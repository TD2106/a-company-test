import { Injectable } from '@nestjs/common';
import { HotelMerger } from './hotels.merger';
import { Hotel } from './hotel.model';
import axios from 'axios';
import { API_URL_DICTIONARY } from './constants';
import { hotelTransformerFactory } from './hotel.data.transformer';

@Injectable()
export class HotelService {
    public constructor(private readonly hotelMerger: HotelMerger) {}

    public findHotels = async (
        hotelIds: string[],
        destinationId: number | null,
    ): Promise<Hotel[]> => {
        const hotels = await this.getAllHotels();
        console.log(hotelIds, destinationId);
        if (hotelIds.length > 0) {
            // O(n^2) can be improve
            return hotels.filter(hotel => hotelIds.includes(hotel.id));
        } else if (destinationId !== null) {
            return hotels.filter(
                hotel => {
                    console.log(hotel.destination_id, destinationId);
                    return hotel.destination_id === destinationId
                },
            );
        }
        return hotels;
    };

    private getAllHotels = async (): Promise<Hotel[]> => {
        const hotelListsPromises = Object.keys(API_URL_DICTIONARY).map(apiId =>
            this.retrieveHotelsUsingApiId(apiId),
        );
        const hotelLists = await Promise.all(hotelListsPromises);
        const hotelDictionary: { [key: string]: Hotel[] } = {};
        hotelLists.forEach(list => {
            list.forEach(hotel => {
                hotelDictionary[hotel.id] = hotelDictionary[hotel.id] || [];
                hotelDictionary[hotel.id].push(hotel);
            });
        });
        return Object.values(hotelDictionary).map(hotels =>
            this.hotelMerger.mergeHotels(hotels),
        );
    };

    private retrieveHotelsUsingApiId = async (
        apiId: string,
    ): Promise<Hotel[]> => {
        const response = await axios.get<any[]>(API_URL_DICTIONARY[apiId]);
        const hotelDtos = response.data;
        const dataTransformer = hotelTransformerFactory(apiId);
        const hotels = hotelDtos.map(dto => dataTransformer.transform(dto));
        return hotels;
    };
}

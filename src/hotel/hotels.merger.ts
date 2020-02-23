import { Hotel, HotelLocation, HotelImages } from './hotel.model';
import { Injectable } from '@nestjs/common';
import { removeSpacesFromString } from '../utils/utils';

@Injectable()
export class HotelMerger {
    public mergeHotels = (hotels: Hotel[]): Hotel => {
        return {
            id: hotels[0].id,
            destination_id: hotels[0].destination_id,
            name: this.mergeStrings(hotels.map(hotel => hotel.name)),
            details: this.mergeStrings(hotels.map(hotel => hotel.details)),
            location: this.mergeLocations(hotels.map(hotel => hotel.location)),
            amenities: {
                general: this.mergeStringLists(
                    hotels.map(hotel => hotel.amenities.general),
                ),
                room: this.mergeStringLists(
                    hotels.map(hotel => hotel.amenities.room),
                ),
            },
            images: this.mergeHotelImages(hotels.map(hotel => hotel.images)),
            booking_conditions: this.mergeStringLists(
                hotels.map(hotel => hotel.booking_conditions),
            ),
        };
    };

    private mergeStrings = (values: string[]): string => {
        let result = values[0];
        values.forEach((value): void => {
            const isReplace = value?.length > result?.length;
            result = isReplace ? value : result;
        });
        return result;
    };

    private mergeLocations = (locations: HotelLocation[]): HotelLocation => {
        let result: HotelLocation = {
            lat: null,
            lng: null,
            city: null,
            address: null,
            country: null,
        };
        locations.forEach((location): void => {
            Object.keys(result).forEach((key): void => {
                result[key] = result[key] || location[key];
            });
        });
        return result;
    };

    private mergeStringLists = (values: string[][]): string[] => {
        const isPresentSet = new Set<string>();
        const result = [];
        values.forEach((stringList): void => {
            stringList.forEach((stringVal): void => {
                const isPresentKey = removeSpacesFromString(stringVal);
                const notPresent = !isPresentSet.has(isPresentKey);
                if (notPresent) {
                    result.push(stringVal);
                    isPresentSet.add(isPresentKey);
                }
            });
        });
        return result;
    };

    private mergeHotelImages = (
        hotelImagesList: HotelImages[],
    ): HotelImages => {
        const result: HotelImages = {
            rooms: [],
            amenities: [],
            site: [],
        };
        hotelImagesList.forEach((hotelImages): void => {
            Object.keys(result).forEach((key): void => {
                result[key].push(...hotelImages[key]);
            });
        });
        return result;
    };
}

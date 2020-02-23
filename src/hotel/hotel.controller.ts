import { Controller, Get, Query } from '@nestjs/common';
import { HotelService } from './hotel.service';
import { Hotel } from './hotel.model';
import { BLANK_STRING } from '../constants';

@Controller('hotel')
export class HotelController {
    public constructor(private readonly hotelService: HotelService) {}

    @Get()
    public async getHotels(
        @Query('hotels') hotelIdsAsString: string = BLANK_STRING,
        @Query('destination') destination: string = null,
    ): Promise<Hotel[]> {
        let hotelIds = [];
        try {
            hotelIds = JSON.parse(hotelIdsAsString);
        } catch (e) {
            hotelIds = [];
        }
        const hotels = await this.hotelService.findHotels(
            hotelIds,
            destination ? parseInt(destination) : null,
        );
        return hotels;
    }
}

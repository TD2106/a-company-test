import { Module } from '@nestjs/common';
import { HotelController } from './hotel.controller';
import { HotelMerger } from './hotels.merger';
import { HotelService } from './hotel.service';

@Module({
    controllers: [HotelController],
    providers: [HotelMerger, HotelService],
})
export class HotelModule {}

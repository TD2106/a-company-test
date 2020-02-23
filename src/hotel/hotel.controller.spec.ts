import { Test, TestingModule } from '@nestjs/testing';
import { HotelController } from './hotel.controller';
import { HotelMerger } from './hotels.merger';
import { HotelService } from './hotel.service';

describe('Hotel Controller', () => {
    let controller: HotelController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [HotelController],
            providers: [HotelMerger, HotelService],
        }).compile();

        controller = module.get<HotelController>(HotelController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});

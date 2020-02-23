import { Test, TestingModule } from '@nestjs/testing';
import { HotelService } from './hotel.service';
import { HotelMerger } from './hotels.merger';

describe('HotelService', () => {
    let service: HotelService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [HotelService, HotelMerger],
        }).compile();

        service = module.get<HotelService>(HotelService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});

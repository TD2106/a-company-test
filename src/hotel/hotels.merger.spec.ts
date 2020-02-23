import * as chai from 'chai';
import { HotelMerger } from './hotels.merger';
import {
    FIRST_API_MOCK_HOTEL,
    SECOND_API_MOCK_HOTEL,
    THIRD_API_MOCK_HOTEL,
    MERGED_MOCK_HOTEL,
} from './hotel.data.mock';

describe('HotelMerger', () => {
    test('mergeHotels should return the correct result', () => {
        const merger = new HotelMerger();
        chai.expect(
            merger.mergeHotels([
                FIRST_API_MOCK_HOTEL,
                SECOND_API_MOCK_HOTEL,
                THIRD_API_MOCK_HOTEL,
            ]),
        ).to.eql(MERGED_MOCK_HOTEL);
    });
});

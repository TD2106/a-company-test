import * as chai from 'chai';
import { hotelTransformerFactory } from './hotel.data.transformer';
import {
    FIRST_API_HOTEL_MOCK_DATA,
    SECOND_API_HOTEL_MOCK_DATA,
    THIRD_API_HOTEL_MOCK_DATA,
    FIRST_API_MOCK_HOTEL,
    SECOND_API_MOCK_HOTEL,
    THIRD_API_MOCK_HOTEL,
} from './hotel.data.mock';
import { FIRST_API_ID, SECOND_API_ID, THIRD_API_ID } from './constants';

describe('HotelApiDataTransformer', () => {
    test('should return the expected result on the first api data type', () => {
        const transformer = hotelTransformerFactory(FIRST_API_ID);
        chai.expect(transformer.transform(FIRST_API_HOTEL_MOCK_DATA)).to.eql(
            FIRST_API_MOCK_HOTEL,
        );
    });

    test('should return the expected result on the second api data type', () => {
        const transformer = hotelTransformerFactory(SECOND_API_ID);
        chai.expect(transformer.transform(SECOND_API_HOTEL_MOCK_DATA)).to.eql(
            SECOND_API_MOCK_HOTEL,
        );
    });

    test('should return the expected result on the third api data type', () => {
        const transformer = hotelTransformerFactory(THIRD_API_ID);
        chai.expect(transformer.transform(THIRD_API_HOTEL_MOCK_DATA)).to.eql(
            THIRD_API_MOCK_HOTEL,
        );
    });
});

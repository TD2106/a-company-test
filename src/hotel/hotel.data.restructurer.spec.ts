import * as chai from 'chai';
import {
    firstApiDataRestructurer,
    secondApiDataRestructurer,
    thirdApiDataRestructurer,
} from './hotel.data.restructurers';
import {
    RestructuredFirstApiPartialData,
    RestructuredSecondApiPartialData,
    RestructuredThirdApiPartialData,
} from './types';
import {
    FIRST_API_HOTEL_MOCK_DATA,
    SECOND_API_HOTEL_MOCK_DATA,
    THIRD_API_HOTEL_MOCK_DATA,
} from './hotel.data.mock';

describe('firstApiDataRestructurer', () => {
    test('should return the expected result', () => {
        const expectedResult: RestructuredFirstApiPartialData = {
            location: {
                lat: FIRST_API_HOTEL_MOCK_DATA.Latitude,
                lng: FIRST_API_HOTEL_MOCK_DATA.Longitude,
                city: FIRST_API_HOTEL_MOCK_DATA.City,
                address: FIRST_API_HOTEL_MOCK_DATA.Address,
                country: FIRST_API_HOTEL_MOCK_DATA.Country,
            },
            amenities: {
                general: [
                    'pool',
                    'business center',
                    'wi fi',
                    'dry cleaning',
                    'breakfast',
                ],
                room: [],
            },
            images: {
                rooms: [],
                site: [],
                amenities: [],
            },
            booking_conditions: [],
        };
        chai.expect(firstApiDataRestructurer(FIRST_API_HOTEL_MOCK_DATA)).to.eql(
            expectedResult,
        );
    });
});

describe('secondApiDataRestructurer', () => {
    test('secondApiDataRestructurer should return the correct result', () => {
        const expectedResult: RestructuredSecondApiPartialData = {
            location: {
                lat: null,
                lng: null,
                city: null,
                address: SECOND_API_HOTEL_MOCK_DATA.location.address,
                country: SECOND_API_HOTEL_MOCK_DATA.location.country,
            },
            images: {
                rooms: SECOND_API_HOTEL_MOCK_DATA.images.rooms,
                site: SECOND_API_HOTEL_MOCK_DATA.images.site,
                amenities: [],
            },
        };
        chai.expect(
            secondApiDataRestructurer(SECOND_API_HOTEL_MOCK_DATA),
        ).to.eql(expectedResult);
    });
});

describe('thirdApiDataRestructurer', () => {
    test('should restructure and return the correct result', () => {
        const expectedResult: RestructuredThirdApiPartialData = {
            location: {
                lat: THIRD_API_HOTEL_MOCK_DATA.lat,
                lng: THIRD_API_HOTEL_MOCK_DATA.lng,
                city: null,
                address: THIRD_API_HOTEL_MOCK_DATA.address,
                country: null,
            },
            amenities: {
                general: [],
                room: [
                    'aircon',
                    'tv',
                    'coffee machine',
                    'kettle',
                    'hair dryer',
                    'iron',
                    'tub',
                ],
            },
            images: {
                rooms: [
                    {
                        link:
                            'https://d2ey9sqrvkqdfs.cloudfront.net/0qZF/2.jpg',
                        caption: 'Double room',
                    },
                ],
                site: [],
                amenities: [
                    {
                        link:
                            'https://d2ey9sqrvkqdfs.cloudfront.net/0qZF/0.jpg',
                        caption: 'RWS',
                    },
                ],
            },
            booking_conditions: [],
        };
        chai.expect(thirdApiDataRestructurer(THIRD_API_HOTEL_MOCK_DATA)).to.eql(
            expectedResult,
        );
    });
});

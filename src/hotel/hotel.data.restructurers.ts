import {
    FirstApiHotelDto,
    SecondApiHotelDto,
    ThirdApiHotelDto,
    ThirdApiImageDto,
    ImageDto,
} from './dto';
import {
    RestructuredFirstApiPartialData,
    RestructuredSecondApiPartialData,
    RestructuredThirdApiPartialData,
} from './types';
import { splitCamelCaseString } from '../utils';
import { isElementInList, isStringContentEqual } from '../utils/utils';
import { GENERAL_AMENITIES } from './constants';

export const firstApiDataRestructurer = (
    hotelApiData: FirstApiHotelDto,
): RestructuredFirstApiPartialData => {
    const cleanedAmenities =
        hotelApiData.Facilities?.map(facility => {
            return splitCamelCaseString(facility);
        }) || [];
    return {
        location: {
            lat: hotelApiData.Latitude,
            lng: hotelApiData.Longitude,
            city: hotelApiData.City,
            address: hotelApiData.Address,
            country: hotelApiData.Country,
        },
        // O(n^2) time complexity for this operation, can be improve
        amenities: classifyAmenities(cleanedAmenities),
        images: {
            rooms: [],
            site: [],
            amenities: [],
        },
        booking_conditions: [],
    };
};

export const secondApiDataRestructurer = (
    hotelApiData: SecondApiHotelDto,
): RestructuredSecondApiPartialData => {
    return {
        location: {
            lat: null,
            lng: null,
            city: null,
            address: hotelApiData.location.address,
            country: hotelApiData.location.country,
        },
        images: {
            rooms: hotelApiData.images.rooms,
            site: hotelApiData.images.site,
            amenities: [],
        },
    };
};

export const thirdApiDataRestructurer = (
    hotelApiData: ThirdApiHotelDto,
): RestructuredThirdApiPartialData => {
    const cleanedAmenities =
        hotelApiData.amenities?.map(amenity => amenity.toLowerCase()) || [];
    return {
        location: {
            lat: hotelApiData.lat,
            lng: hotelApiData.lng,
            city: null,
            address: hotelApiData.address,
            country: null,
        },
        // O(n^2) time complexity for this operation, can be improve
        amenities: classifyAmenities(cleanedAmenities),
        images: {
            rooms: converThirdApiImageDtosToImageDtos(
                hotelApiData.images.rooms,
            ),
            site: [],
            amenities: converThirdApiImageDtosToImageDtos(
                hotelApiData.images.amenities,
            ),
        },
        booking_conditions: [],
    };
};

const classifyAmenities = (
    amenities: string[],
): {
    general: string[];
    room: string[];
} => {
    const result = {
        general: [],
        room: [],
    };
    amenities.forEach((amenity): void => {
        if (
            isElementInList<string>(
                amenity,
                GENERAL_AMENITIES,
                isStringContentEqual,
            )
        ) {
            result.general.push(amenity);
        } else {
            result.room.push(amenity);
        }
    });
    return result;
};

const converThirdApiImageDtosToImageDtos = (
    dtos: ThirdApiImageDto[],
): ImageDto[] => {
    return dtos.map(dto => {
        return {
            link: dto.url,
            caption: dto.description,
        };
    });
};

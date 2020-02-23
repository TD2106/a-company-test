import {
    firstApiDataRestructurer,
    secondApiDataRestructurer,
    thirdApiDataRestructurer,
} from './hotel.data.restructurers';

export const FIRST_API_ID = '1';
export const SECOND_API_ID = '2';
export const THIRD_API_ID = '3';

export const FIRST_HOTELS_API_URL = 'https://api.myjson.com/bins/gdmqa';
export const SECOND_HOTELS_API_URL = 'https://api.myjson.com/bins/1fva3m';
export const THIRD_HOTELS_API_URL = 'https://api.myjson.com/bins/j6kzm';

export const FIRST_API_DTO_RENAME_SCHEME = {
    Id: 'id',
    DestinationId: 'destination_id',
    Name: 'name',
    Description: 'details',
};

export const SECOND_API_DTO_RENAME_SCHEME = {
    hotel_id: 'id',
    hotel_name: 'name',
    destination_id: 'destination_id',
    details: 'details',
    amenities: 'amenities',
    booking_conditions: 'booking_conditions',
};

export const THIRD_API_DTO_RENAME_SCHEME = {
    id: 'id',
    name: 'name',
    destination: 'destination_id',
    info: 'details',
};

export const GENERAL_AMENITIES = [
    'outdoor pool',
    'indoor pool',
    'business center',
    'childcare',
    'parking',
    'bar',
    'dry cleaning',
    'wifi',
    'breakfast',
    'concierge',
    'pool',
];
export const ROOM_AMENITIES = [
    'aircon',
    'minibar',
    'tv',
    'bathtub',
    'hair dryer',
    'coffee machine',
    'kettle',
    'iron',
];

const FIRST_API_TRANSFORMER_FACTORY_CONSTANT = {
    renameScheme: FIRST_API_DTO_RENAME_SCHEME,
    restructurerMethod: firstApiDataRestructurer,
};

const SECOND_API_TRANSFORMER_FACTORY_CONSTANT = {
    renameScheme: SECOND_API_DTO_RENAME_SCHEME,
    restructurerMethod: secondApiDataRestructurer,
};

const THIRD_API_TRANSFORMER_FACTORY_CONSTANT = {
    renameScheme: THIRD_API_DTO_RENAME_SCHEME,
    restructurerMethod: thirdApiDataRestructurer,
};

export const TRANSFORMER_FACTORY_CONSTANT_DICTIONARY = {
    [FIRST_API_ID]: FIRST_API_TRANSFORMER_FACTORY_CONSTANT,
    [SECOND_API_ID]: SECOND_API_TRANSFORMER_FACTORY_CONSTANT,
    [THIRD_API_ID]: THIRD_API_TRANSFORMER_FACTORY_CONSTANT,
};

export const API_URL_DICTIONARY = {
    [FIRST_API_ID]: FIRST_HOTELS_API_URL,
    [SECOND_API_ID]: SECOND_HOTELS_API_URL,
    [THIRD_API_ID]: THIRD_HOTELS_API_URL,
};

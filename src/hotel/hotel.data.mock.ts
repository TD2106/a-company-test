import { FirstApiHotelDto, SecondApiHotelDto, ThirdApiHotelDto } from './dto';
import { Hotel } from './hotel.model';

export const FIRST_API_HOTEL_MOCK_DATA: FirstApiHotelDto = {
    Id: 'iJhz',
    DestinationId: 5432,
    Name: 'Beach Villas Singapore',
    Latitude: 1.264751,
    Longitude: 103.824006,
    Address: ' 8 Sentosa Gateway, Beach Villas ',
    City: 'Singapore',
    Country: 'SG',
    PostalCode: '098269',
    Description:
        '  This 5 star hotel is located on the coastline of Singapore.',
    Facilities: [
        'Pool',
        'BusinessCenter',
        'WiFi ',
        'DryCleaning',
        ' Breakfast',
    ],
};

export const FIRST_API_MOCK_HOTEL: Hotel = {
    id: FIRST_API_HOTEL_MOCK_DATA.Id,
    destination_id: FIRST_API_HOTEL_MOCK_DATA.DestinationId,
    name: FIRST_API_HOTEL_MOCK_DATA.Name,
    details: FIRST_API_HOTEL_MOCK_DATA.Description,
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

export const SECOND_API_HOTEL_MOCK_DATA: SecondApiHotelDto = {
    hotel_id: 'iJhz',
    destination_id: 5432,
    hotel_name: 'Beach Villas Singapore',
    location: {
        address: '8 Sentosa Gateway, Beach Villas, 098269',
        country: 'Singapore',
    },
    details:
        "Surrounded by tropical gardens, these upscale villas in elegant Colonial-style buildings are part of the Resorts World Sentosa complex and a 2-minute walk from the Waterfront train station. Featuring sundecks and pool, garden or sea views, the plush 1- to 3-bedroom villas offer free Wi-Fi and flat-screens, as well as free-standing baths, minibars, and tea and coffeemaking facilities. Upgraded villas add private pools, fridges and microwaves; some have wine cellars. A 4-bedroom unit offers a kitchen and a living room. There's 24-hour room and butler service. Amenities include posh restaurant, plus an outdoor pool, a hot tub, and free parking.",
    amenities: {
        general: [
            'outdoor pool',
            'indoor pool',
            'business center',
            'childcare',
        ],
        room: ['tv', 'coffee machine', 'kettle', 'hair dryer', 'iron'],
    },
    images: {
        rooms: [
            {
                link: 'https://d2ey9sqrvkqdfs.cloudfront.net/0qZF/2.jpg',
                caption: 'Double room',
            },
            {
                link: 'https://d2ey9sqrvkqdfs.cloudfront.net/0qZF/3.jpg',
                caption: 'Double room',
            },
        ],
        site: [
            {
                link: 'https://d2ey9sqrvkqdfs.cloudfront.net/0qZF/1.jpg',
                caption: 'Front',
            },
        ],
    },
    booking_conditions: [
        "All children are welcome. One child under 12 years stays free of charge when using existing beds. One child under 2 years stays free of charge in a child's cot/crib. One child under 4 years stays free of charge when using existing beds. One older child or adult is charged SGD 82.39 per person per night in an extra bed. The maximum number of children's cots/cribs in a room is 1. There is no capacity for extra beds in the room.",
        'Pets are not allowed.',
        'WiFi is available in all areas and is free of charge.',
        'Free private parking is possible on site (reservation is not needed).',
        "Guests are required to show a photo identification and credit card upon check-in. Please note that all Special Requests are subject to availability and additional charges may apply. Payment before arrival via bank transfer is required. The property will contact you after you book to provide instructions. Please note that the full amount of the reservation is due before arrival. Resorts World Sentosa will send a confirmation with detailed payment information. After full payment is taken, the property's details, including the address and where to collect keys, will be emailed to you. Bag checks will be conducted prior to entry to Adventure Cove Waterpark. === Upon check-in, guests will be provided with complimentary Sentosa Pass (monorail) to enjoy unlimited transportation between Sentosa Island and Harbour Front (VivoCity). === Prepayment for non refundable bookings will be charged by RWS Call Centre. === All guests can enjoy complimentary parking during their stay, limited to one exit from the hotel per day. === Room reservation charges will be charged upon check-in. Credit card provided upon reservation is for guarantee purpose. === For reservations made with inclusive breakfast, please note that breakfast is applicable only for number of adults paid in the room rate. Any children or additional adults are charged separately for breakfast and are to paid directly to the hotel.",
    ],
};

export const SECOND_API_MOCK_HOTEL: Hotel = {
    id: SECOND_API_HOTEL_MOCK_DATA.hotel_id,
    destination_id: SECOND_API_HOTEL_MOCK_DATA.destination_id,
    name: SECOND_API_HOTEL_MOCK_DATA.hotel_name,
    details: SECOND_API_HOTEL_MOCK_DATA.details,
    location: {
        lat: null,
        lng: null,
        city: null,
        address: SECOND_API_HOTEL_MOCK_DATA.location.address,
        country: SECOND_API_HOTEL_MOCK_DATA.location.country,
    },
    amenities: SECOND_API_HOTEL_MOCK_DATA.amenities,
    images: {
        rooms: SECOND_API_HOTEL_MOCK_DATA.images.rooms,
        site: SECOND_API_HOTEL_MOCK_DATA.images.site,
        amenities: [],
    },
    booking_conditions: SECOND_API_HOTEL_MOCK_DATA.booking_conditions,
};

export const THIRD_API_HOTEL_MOCK_DATA: ThirdApiHotelDto = {
    id: 'iJhz',
    destination: 5432,
    name: 'Beach Villas Singapore',
    lat: 1.264751,
    lng: 103.824006,
    address: '8 Sentosa Gateway, Beach Villas, 098269',
    info:
        'Located at the western tip of Resorts World Sentosa, guests at the Beach Villas are guaranteed privacy while they enjoy spectacular views of glittering waters. Guests will find themselves in paradise with this series of exquisite tropical sanctuaries, making it the perfect setting for an idyllic retreat. Within each villa, guests will discover living areas and bedrooms that open out to mini gardens, private timber sundecks and verandahs elegantly framing either lush greenery or an expanse of sea. Guests are assured of a superior slumber with goose feather pillows and luxe mattresses paired with 400 thread count Egyptian cotton bed linen, tastefully paired with a full complement of luxurious in-room amenities and bathrooms boasting rain showers and free-standing tubs coupled with an exclusive array of ESPA amenities and toiletries. Guests also get to enjoy complimentary day access to the facilities at Asia’s flagship spa – the world-renowned ESPA.',
    amenities: [
        'Aircon',
        'Tv',
        'Coffee machine',
        'Kettle',
        'Hair dryer',
        'Iron',
        'Tub',
    ],
    images: {
        rooms: [
            {
                url: 'https://d2ey9sqrvkqdfs.cloudfront.net/0qZF/2.jpg',
                description: 'Double room',
            },
        ],
        amenities: [
            {
                url: 'https://d2ey9sqrvkqdfs.cloudfront.net/0qZF/0.jpg',
                description: 'RWS',
            },
        ],
    },
};

export const THIRD_API_MOCK_HOTEL: Hotel = {
    id: THIRD_API_HOTEL_MOCK_DATA.id,
    destination_id: THIRD_API_HOTEL_MOCK_DATA.destination,
    name: THIRD_API_HOTEL_MOCK_DATA.name,
    details: THIRD_API_HOTEL_MOCK_DATA.info,
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
                link: 'https://d2ey9sqrvkqdfs.cloudfront.net/0qZF/2.jpg',
                caption: 'Double room',
            },
        ],
        site: [],
        amenities: [
            {
                link: 'https://d2ey9sqrvkqdfs.cloudfront.net/0qZF/0.jpg',
                caption: 'RWS',
            },
        ],
    },
    booking_conditions: [],
};

export const MERGED_MOCK_HOTEL: Hotel = {
    id: FIRST_API_MOCK_HOTEL.id,
    destination_id: FIRST_API_MOCK_HOTEL.destination_id,
    name: FIRST_API_MOCK_HOTEL.name,
    details: THIRD_API_MOCK_HOTEL.details,
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
            'outdoor pool',
            'indoor pool',
            'childcare',
        ],
        room: [
            'tv',
            'coffee machine',
            'kettle',
            'hair dryer',
            'iron',
            'aircon',
            'tub',
        ],
    },
    images: {
        rooms: [
            {
                link: 'https://d2ey9sqrvkqdfs.cloudfront.net/0qZF/2.jpg',
                caption: 'Double room',
            },
            {
                link: 'https://d2ey9sqrvkqdfs.cloudfront.net/0qZF/3.jpg',
                caption: 'Double room',
            },
            {
                link: 'https://d2ey9sqrvkqdfs.cloudfront.net/0qZF/2.jpg',
                caption: 'Double room',
            },
        ],
        site: [
            {
                link: 'https://d2ey9sqrvkqdfs.cloudfront.net/0qZF/1.jpg',
                caption: 'Front',
            },
        ],
        amenities: [
            {
                link: 'https://d2ey9sqrvkqdfs.cloudfront.net/0qZF/0.jpg',
                caption: 'RWS',
            },
        ],
    },
    booking_conditions: SECOND_API_MOCK_HOTEL.booking_conditions,
};

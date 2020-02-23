export class FirstApiHotelDto {
    Id: string;
    DestinationId: number;
    Name: string;
    Latitude: number;
    Longitude: number;
    Address: string;
    City: string;
    Country: string;
    PostalCode: string;
    Description: string;
    Facilities: string[];
}

export class SecondApiHotelDto {
    hotel_id: string;
    destination_id: number;
    hotel_name: string;
    location: {
        address: string;
        country: string;
    };
    details: string;
    amenities: {
        general: string[];
        room: string[];
    };
    images: {
        rooms: SecondApiImageDto[];
        site: SecondApiImageDto[];
    };
    booking_conditions: string[];
}

export class ThirdApiHotelDto {
    id: string;
    destination: number;
    name: string;
    lat: number;
    lng: number;
    address: string;
    info: string;
    amenities: string[];
    images: {
        rooms: ThirdApiImageDto[];
        amenities: ThirdApiImageDto[];
    };
}

export class SecondApiImageDto {
    link: string;
    caption: string;
}

export class ThirdApiImageDto {
    url: string;
    description: string;
}

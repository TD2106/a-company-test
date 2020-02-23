import { ImageDto } from './dto';

export class Hotel {
    id: string;
    destination_id: number;
    name: string;
    location: HotelLocation;
    details: string;
    amenities: {
        general: string[];
        room: string[];
    };
    images: HotelImages;
    booking_conditions: string[];
}

export class HotelLocation {
    lat: number;
    lng: number;
    city: string;
    address: string;
    country: string;
}

export class HotelImages {
    rooms: ImageDto[];
    site: ImageDto[];
    amenities: ImageDto[];
}

import { ImageDto } from './dto';

export class RenamedFirstApiPartialData {
    id: string;
    destination_id: string;
    name: string;
    details: string;
}

export class RenamedSecondApiPartialData {
    id: string;
    destination_id: string;
    name: string;
    details: string;
    amenities: {
        general: string[];
        room: string[];
    };
    booking_conditions: string[];
}

export class RenamedThirdApiPartialData {
    id: string;
    destination_id: string;
    name: string;
    details: string;
}

export class RestructuredFirstApiPartialData {
    location: {
        lat: number;
        lng: number;
        city: string;
        address: string;
        country: string;
    };
    amenities: {
        general: string[];
        room: string[];
    };
    images: {
        rooms: ImageDto[];
        site: ImageDto[];
        amenities: ImageDto[];
    };
    booking_conditions: string[];
}

export class RestructuredSecondApiPartialData {
    location: {
        lat: number;
        lng: number;
        city: string;
        address: string;
        country: string;
    };
    images: {
        rooms: ImageDto[];
        site: ImageDto[];
        amenities: ImageDto[];
    };
}

export class RestructuredThirdApiPartialData {
    location: {
        lat: number;
        lng: number;
        city: string;
        address: string;
        country: string;
    };
    amenities: {
        general: string[];
        room: string[];
    };
    images: {
        rooms: ImageDto[];
        site: ImageDto[];
        amenities: ImageDto[];
    };
    booking_conditions: string[];
}

export interface RenameScheme {
    [key: string]: string;
}

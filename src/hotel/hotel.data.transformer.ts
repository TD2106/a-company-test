import { RenameScheme } from './types';
import { Hotel } from './hotel.model';
import {
    TRANSFORMER_FACTORY_CONSTANT_DICTIONARY,
    FIRST_API_ID,
} from './constants';

export class HotelApiDataTransformer {
    private renameScheme: RenameScheme;
    private restructuredFunction: (input: any) => any;

    public constructor(
        renameScheme: RenameScheme,
        restructuredFunction: (input: any) => any,
    ) {
        this.renameScheme = renameScheme;
        this.restructuredFunction = restructuredFunction;
    }

    public transform = (hotelApiData: any): Hotel => {
        return {
            ...this.getRenamedPartialDatastructure(hotelApiData),
            ...this.restructuredFunction(hotelApiData),
        } as any;
    };

    private getRenamedPartialDatastructure = (hotelApiData: any): any => {
        const result: any = {};
        Object.entries(hotelApiData).forEach(([key, value]) => {
            if (key in this.renameScheme) {
                result[this.renameScheme[key]] = value;
            }
        });
        return result;
    };
}

export const hotelTransformerFactory = (
    apiId: string,
): HotelApiDataTransformer => {
    const transformerConstant = TRANSFORMER_FACTORY_CONSTANT_DICTIONARY[apiId];
    const { renameScheme, restructurerMethod } = transformerConstant;
    return new HotelApiDataTransformer(renameScheme, restructurerMethod);
};

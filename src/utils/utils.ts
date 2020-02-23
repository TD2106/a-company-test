import { BLANK_STRING } from '../constants';

export const isElementInList = <T>(
    element: T,
    list: T[],
    predicateFunction: (first: T, second: T) => boolean,
): boolean => {
    let isInList = false;
    list.forEach(value => {
        isInList = isInList || predicateFunction(value, element);
    });
    return isInList;
};

export const isStringContentEqual = (
    firstString: string,
    secondString: string,
): boolean => {
    return (
        removeSpacesFromString(firstString).toLowerCase() ===
        removeSpacesFromString(secondString).toLowerCase()
    );
};

export const removeSpacesFromString = (input: string): string => {
    return input.replace(/\s/g, BLANK_STRING);
};

export const splitCamelCaseString = (input: string): string => {
    return input
        .replace(/([a-z](?=[A-Z]))/g, '$1 ')
        .toLowerCase()
        .trim();
};

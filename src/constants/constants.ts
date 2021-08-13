export const CONVERSION_FACTOR_TO_MM: {[key: string]: number } = {
    METER: 1000,
    CENTIMETER: 10,
    MILLIMETER: 1
 }
 
 export const CONVERSION_FACTOR_TO_GM: {[key: string]: number } = {
    KILOGRAM: 1000,
    POUND: 454,
    GRAM: 10,
 }
 
 export const CONVERSION_FACTOR: {[key: string]: {[key: string]: number }} = {
    LENGTH: CONVERSION_FACTOR_TO_MM,
    WEIGHT: CONVERSION_FACTOR_TO_MM
 }
import { Fare } from "../invoice/types";

export enum STANDARD_FARE {
    BOOKING_CHARGES = 5,
    PER_KM_FARE = 10,
    PER_MIN_FARE = 1,
}

export enum PREMIUM_FARE {
    BOOKING_CHARGES = 5,
    PER_KM_FARE = 15,
    PER_MIN_FARE = 2,
}

export const FARE: {[key: string]: Fare } = {
    STANDARD_FARE: STANDARD_FARE,
    PREMIUM_FARE: PREMIUM_FARE
}

export type LengthType = {
   length : number
   unit: string 
}

export const CONVERSION_FACTOR_TO_MM: {[key: string]: number } = {
   METER: 1000,
   CENTIMETER: 10,
   MILLIMETER: 1
}
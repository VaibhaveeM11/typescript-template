import {  CONVERSION_FACTOR_TO_MM, LengthType } from "./types";
 
const convertLength = (value: LengthType) => {
   const conversionFactor = CONVERSION_FACTOR_TO_MM[value.unit]
   return conversionFactor*value.length
}

export const AddLength = (value1: LengthType, value2: LengthType): number => {
   let sum = 0;
   return sum = convertLength(value1) +  convertLength(value2);
}

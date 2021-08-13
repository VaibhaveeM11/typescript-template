import { CONVERSION_FACTOR } from "../constants/constants";
import { Quantity  } from "./types";
 
const convertLength = (input: Quantity ) => {
   const quantityType  = CONVERSION_FACTOR['WEIGHT']
   const conversionFactor  = quantityType[input.unit]   
   return conversionFactor*input.value
}

export const getSumOfQuantity = (value1: Quantity , value2: Quantity ): number => {
   let sum = 0;
   return sum = convertLength(value1) +  convertLength(value2);
}

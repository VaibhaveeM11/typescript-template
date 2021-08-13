import { CONVERSION_FACTOR } from "../constants/constants";
import { Quantity  } from "./types";
 
const convertLength = (input: Quantity ) => {
   const { KILOGRAM } = CONVERSION_FACTOR[input.type]
   console.log(CONVERSION_FACTOR[input.type].);
   
   return KILOGRAM*input.value
}

export const AddLength = (value1: Quantity , value2: Quantity ): number => {
   let sum = 0;
   return sum = convertLength(value1) +  convertLength(value2);
}

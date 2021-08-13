import { CONVERSION_FACTOR } from "../constants/constants";
import getSumOfQuantity from "./index";
describe("convertQuality Test", () => {
    it("should return sum in millimeter of length with same unit", () => {
        const value1 = {
            value: 1,
            unit : 'METER',
            type: 'LENGTH'
        }
        const value2 = {
            value: 1,
            unit : 'METER',
            type: 'LENGTH'
        }
        const expectedLength = 2000
        expect(getSumOfQuantity(value1,value2)).toEqual(expectedLength);
    }); 
    it("should return sum in millimeter of converted length with different unit", () => {
        const value1 = {
            value: 1,
            unit : 'METER',
            type: 'LENGTH'

        }
        const value2 = {
            value: 1,
            unit : 'CENTIMETER',
            type: 'LENGTH'
        }
        const expectedLength = 1010
        expect(getSumOfQuantity(value1,value2)).toEqual(expectedLength);
    }); 
    it("should return sum in millimeter when both value are in millimeter", () => {
        const value1 = {
            value: 1,
            unit : 'MILLIMETER',
           type: 'LENGTH'
        }
        const value2 = {
            value: 1,
            unit : 'MILLIMETER',
           type: 'WEIGHT'
        }
        const expectedLength = 2
        expect(getSumOfQuantity(value1,value2)).toEqual(expectedLength);
    });
    it("should return sum when both values are weight quantity", () => {
        const value1 = {
            value: 1000,
            unit : 'GRAM',
           type: 'WEIGHT'
        }
        const value2 = {
            value: 1,
            unit : 'KILOGRAM',
            type: 'WEIGHT'
        }
        const expectedLength = 2
        expect(getSumOfQuantity(value1,value2)).toEqual(expectedLength);
    });
})
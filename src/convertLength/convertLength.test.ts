import AddLength from "./index";


describe("convertLength Test", () => {
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
        expect(AddLength(value1,value2)).toEqual(expectedLength);
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
        expect(AddLength(value1,value2)).not.toEqual(expectedLength);
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
           type: 'LENGTH'
        }
        const expectedLength = 2
        expect(AddLength(value1,value2)).toEqual(expectedLength);
    });
})
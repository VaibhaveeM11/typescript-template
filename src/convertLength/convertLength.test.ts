import AddLength from "./index";


describe("convertLength Test", () => {
    it("should return sum in millimeter of length with same unit", () => {
        const value1 = {
            length: 1,
            unit : 'METER'
        }
        const value2 = {
            length: 1,
            unit : 'METER'
        }
        const expectedLength = 2000
        expect(AddLength(value1,value2)).toEqual(expectedLength);
    }); 
    it("should return sum in millimeter of converted length with different unit", () => {
        const value1 = {
            length: 1,
            unit : 'METER'
        }
        const value2 = {
            length: 1,
            unit : 'CENTIMETER'
        }
        const expectedLength = 1010
        expect(AddLength(value1,value2)).toEqual(expectedLength);
    }); 
    it("should return sum in millimeter when both value are in millimeter", () => {
        const value1 = {
            length: 1,
            unit : 'MILLIMETER'
        }
        const value2 = {
            length: 1,
            unit : 'MILLIMETER'
        }
        const expectedLength = 2
        expect(AddLength(value1,value2)).toEqual(expectedLength);
    });
})
import { appColors, appApi } from "../../constants/Constants";


describe('Pack App Constants', () => {
    it('Should works : App colors tests', () => {
        expect(appColors.black).toBe('#000000');
        expect(appColors.green).toBe('#2e8b57');
        expect(appColors.white).toBe('#ffffff');
        expect(appColors.blue).toBe('#30304f');
        expect(appColors.deepBlue).toBe('#272738');
        expect(appColors.lightBlue).toBe('#E0EEEE');
    });
    
    it('Should works : App api tests', () => {
        expect(appApi.mainPath).toBe('https://127.0.0.1:8000/api/v1/compute');
    });
})
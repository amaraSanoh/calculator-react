import { appColors, appApi, appActions } from "../../constants/Constants";


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

    it('Should works : App actions tests', () => {
        expect(appActions.cleanRequest).toBe('CLEAN_REQUEST');
        expect(appActions.cleanSuccess).toBe('CLEAN_SUCCESS');

        expect(appActions.computeFailure).toBe('COMPUTE_FAILURE');
        expect(appActions.computeRequest).toBe('COMPUTE_REQUEST');
        expect(appActions.computeSuccess).toBe('COMPUTE_SUCCESS');
  
        expect(appActions.deleteRequest).toBe('DELETE_REQUEST');
        expect(appActions.deleteSuccess).toBe('DELETE_SUCCESS');

        expect(appActions.divisionMultSumFailure).toBe('DIVISION_MULT_SUM_FAILURE');
        expect(appActions.divisionMultSumRequest).toBe('DIVISION_MULT_SUM_REQUEST');
        expect(appActions.divisionMultSumSuccess).toBe('DIVISION_MULT_SUM_SUCCESS');

        expect(appActions.dotSuccess).toBe('DOT_SUCCESS');
        expect(appActions.dotRequest).toBe('DOT_REQUEST');

        expect(appActions.sumRequest).toBe('SUM_REQUEST');
        expect(appActions.sumSuccess).toBe('SUM_SUCCESS');
    });
})
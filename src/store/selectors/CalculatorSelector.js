import { createSelector } from 'reselect';

const getCalculatorState = state => state.CalculatorReducer;

export const calculatorSelector = createSelector(
	[getCalculatorState/*, another one */],
	(calculatorState/*, another one */) => {

		return calculatorState;
	}
)
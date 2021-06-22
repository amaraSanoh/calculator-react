import { combineReducers } from 'redux'; 
import CalculatorReducer from './calculator/CalculatorReducer';


const reducers = combineReducers({
    CalculatorReducer: CalculatorReducer, 
}); 

export default reducers;
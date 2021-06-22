import { appActions } from "../../../constants/Constants";

const initialState = { expression: '', compute: '', loading: false }

function CalculatorReducer(state = initialState, action) {
    let nextState;

    switch (action.type) {
        case appActions.numberRequest:
            nextState = {
                ...state,
                loading: action.loading
            }
            return nextState || state;

        case appActions.numberSuccess:
            nextState = {
                ...state, 
                loading: action.loading,
                expression: state.expression+action.value
            }
            return nextState || state

        case appActions.cleanRequest:
            nextState = {
                ...state,
                loading: action.loading
            }
            return nextState || state;

        case appActions.cleanSuccess:
            nextState = {
                ...state, 
                loading: action.loading,
                expression: '',
                compute: ''
            }
            return nextState || state

        default:
            return state
    }
}

export default CalculatorReducer;
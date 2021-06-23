import { appActions } from "../../../constants/Constants";

const initialState = { expression: '', compute: '', lastPartOfExpression: '', loading: false }

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
                expression: state.expression+action.value,
                lastPartOfExpression: state.lastPartOfExpression+action.value
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
                compute: '',
                lastPartOfExpression: ''
            }
            return nextState || state

        case appActions.deleteRequest:
            nextState = {
                ...state,
                loading: action.loading
            }
            return nextState || state;

        case appActions.deleteSuccess:
            nextState = {
                ...state, 
                loading: action.loading,
                expression: state.expression.substr(0, state.expression.length - 1),
                compute: '',
                lastPartOfExpression: state.lastPartOfExpression.substr(0, state.lastPartOfExpression.length - 1)
            }
            return nextState || state

        case appActions.dotRequest:
            nextState = {
                ...state,
                loading: action.loading
            }
            return nextState || state;

        case appActions.dotSuccess:
            nextState = {
                ...state, 
                loading: action.loading,
                expression: state.lastPartOfExpression.indexOf('.') !== -1 ? state.expression : state.expression+action.value,
                compute: '',
                lastPartOfExpression: state.lastPartOfExpression.indexOf('.') !== -1 ? state.lastPartOfExpression : state.lastPartOfExpression+action.value
            }
            return nextState || state

        default:
            return state
    }
}

export default CalculatorReducer;
import { appActions } from "../../../constants/Constants";

const initialState = { expression: '0', compute: '0', lastPartOfExpression: '', loading: false }

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
                expression: state.expression === '0' ? action.value : state.expression+action.value,
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
                expression: '0',
                compute: '0',
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
                lastPartOfExpression: state.lastPartOfExpression.indexOf('.') !== -1 ? state.lastPartOfExpression : state.lastPartOfExpression+action.value
            }
            return nextState || state

        case appActions.divisionMultSumRequest:
            nextState = {
                ...state,
                loading: action.loading
            }
            return nextState || state;

        case appActions.divisionMultSumSuccess:
            let expressionLastChar = state.expression.substr(state.expression.length -1, state.expression.length);
            let expressionTwoLastChars = state.expression.substr(state.expression.length -2, state.expression.length);
            let constraint1 = new RegExp('[\\*\\-\\+\\/]{2}');
            let constraint2 = new RegExp('[\\*\\-\\+\\/]');
            let tmpExpression = state.expression;

            if(!constraint1.test(expressionTwoLastChars) && constraint2.test(expressionLastChar)) 
                tmpExpression = state.expression.substr(0, state.expression.length-1)+action.value;
            else if(!constraint1.test(expressionTwoLastChars) && !constraint2.test(expressionLastChar)) 
                tmpExpression = state.expression+action.value;

            nextState = {
                ...state, 
                loading: action.loading,
                expression: tmpExpression,
                lastPartOfExpression: ''
            }
            return nextState || state

        case appActions.substractionRequest:
            nextState = {
                ...state,
                loading: action.loading
            }
            return nextState || state;

        case appActions.substractionSuccess:
            let subExpressionLastChar = state.expression.substr(state.expression.length -1, state.expression.length);
            let subExpressionTwoLastChars = state.expression.substr(state.expression.length -2, state.expression.length);
            let subConstraint1 = new RegExp('[\\*\\-\\+\\/]{2}');
            let subConstraint2 = new RegExp('[\\+\\-]');
            let subTmpExpression = state.expression;
            
            if(!subConstraint1.test(subExpressionTwoLastChars) && subConstraint2.test(subExpressionLastChar)) 
                subTmpExpression = state.expression.substr(0, state.expression.length-1)+action.value;
            else if(!subConstraint1.test(subExpressionTwoLastChars) && !subConstraint2.test(subExpressionLastChar)) 
                subTmpExpression = state.expression+action.value;

            nextState = {
                ...state, 
                loading: action.loading,
                expression: subTmpExpression,
                compute: '',
                lastPartOfExpression: action.value
            }
            return nextState || state

        case appActions.computeRequest:
            nextState = {
                ...state,
                loading: action.loading
            }
            return nextState || state;

        case appActions.computeSuccess:
            nextState = {
                ...state, 
                loading: action.loading,
                lastPartOfExpression: '',
                compute: action.value
            }
            return nextState || state

        default:
            return state
    }
}

export default CalculatorReducer;
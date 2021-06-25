import { appActions } from "../../../constants/Constants";

const initialState = { 
    expression: '0', 
    compute: '0', 
    lastPartOfExpression: '', 
    loading: false, 
    eventType: '',
    previousExpression: '',
    previousCompute: '',
    justCompute: false
}

function CalculatorReducer(state = initialState, action) {
    let nextState;

    switch (action.type) {
        case appActions.numberRequest:
            nextState = {
                ...state,
                loading: action.loading, 
                eventType: appActions.numberRequest
            }
            return nextState || state;

        case appActions.numberSuccess:
            nextState = {
                ...state, 
                loading: action.loading,
                expression: (state.expression === '0' || state.justCompute) ? action.value : state.expression+action.value,
                lastPartOfExpression: state.lastPartOfExpression+action.value,
                eventType: appActions.numberSuccess,
                justCompute: false
            }
            return nextState || state

        case appActions.cleanRequest:
            nextState = {
                ...state,
                loading: action.loading,
                eventType: appActions.cleanRequest
            }
            return nextState || state;

        case appActions.cleanSuccess:
            nextState = {
                ...state, 
                loading: action.loading,
                expression: '0',
                compute: '0',
                lastPartOfExpression: '',
                eventType: appActions.cleanSuccess,
                justCompute: false
            }
            return nextState || state

        case appActions.deleteRequest:
            nextState = {
                ...state,
                loading: action.loading,
                eventType: appActions.deleteRequest
            }
            return nextState || state;

        case appActions.deleteSuccess:
            nextState = {
                ...state, 
                loading: action.loading,
                expression: state.justCompute ? '0' : state.expression.substr(0, state.expression.length - 1),
                compute: state.justCompute ? '0' : '',
                lastPartOfExpression: state.justCompute ? '0' : state.lastPartOfExpression.substr(0, state.lastPartOfExpression.length - 1),
                eventType: appActions.deleteSuccess,
                justCompute: false
            }
            return nextState || state

        case appActions.dotRequest:
            nextState = {
                ...state,
                loading: action.loading,
                eventType: appActions.dotRequest
            }
            return nextState || state;

        case appActions.dotSuccess:
            nextState = {
                ...state, 
                loading: action.loading,
                expression: state.justCompute ? action.value : (state.lastPartOfExpression.indexOf('.') !== -1 ? state.expression : state.expression+action.value),
                lastPartOfExpression: state.justCompute ? action.value : (state.lastPartOfExpression.indexOf('.') !== -1 ? state.lastPartOfExpression : state.lastPartOfExpression+action.value),
                eventType: appActions.dotSuccess, 
                justCompute: false
            }
            return nextState || state

        case appActions.divisionMultSumRequest:
            nextState = {
                ...state,
                loading: action.loading,
                eventType: appActions.divisionMultSumRequest
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
                tmpExpression = state.justCompute ? state.compute+action.value : state.expression+action.value;

            nextState = {
                ...state, 
                loading: action.loading,
                expression: tmpExpression,
                lastPartOfExpression: '',
                eventType: appActions.divisionMultSumSuccess,
                justCompute: false
            }
            return nextState || state

        case appActions.substractionRequest:
            nextState = {
                ...state,
                loading: action.loading,
                eventType: appActions.substractionRequest
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
                subTmpExpression = state.justCompute ? state.compute+action.value : state.expression+action.value;

            nextState = {
                ...state, 
                loading: action.loading,
                expression: subTmpExpression,
                compute: '',
                lastPartOfExpression: action.value,
                eventType: appActions.substractionSuccess,
                justCompute: false,
            }
            return nextState || state

        case appActions.computeRequest:
            nextState = {
                ...state,
                loading: action.loading,
                eventType: appActions.computeRequest
            }
            return nextState || state;

        case appActions.computeSuccess:
            nextState = {
                ...state, 
                loading: action.loading,
                lastPartOfExpression: '',
                compute: action.value,
                eventType: appActions.computeSuccess,
                previousExpression: state.expression,
                previousCompute: action.value,
                justCompute: true
            }
            return nextState || state

        default:
            return state
    }
}

export default CalculatorReducer;
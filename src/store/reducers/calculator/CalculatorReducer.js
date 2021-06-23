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

        case appActions.divisionMultRequest:
            nextState = {
                ...state,
                loading: action.loading
            }
            return nextState || state;

        case appActions.divisionMultSuccess:
            let expressionLastChar = state.expression.substr(-1,1);
            let expressionTwoLastChars = state.expression.substr(-1,2);
            let constraint1 = new RegExp('[\\*\\-\\+\\/]{2}');
            let constraint2 = new RegExp('[\\*\\-\\+\\/]');
            let tmpExpression = state.expression;
            if(!constraint1.test(expressionTwoLastChars) && constraint2.test(expressionLastChar)) {
                tmpExpression = state.expression.substr(0, state.expression.length-1)+action.value;
            } else if(!constraint1.test(expressionTwoLastChars) && !constraint2.test(expressionLastChar)) {
                tmpExpression = state.expression+action.value;
            }

            nextState = {
                ...state, 
                loading: action.loading,
                expression: tmpExpression,
                compute: '',
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
            let subExpressionLastChar = state.expression.substr(-1,1);
            let subExpressionTwoLastChars = state.expression.substr(-1,2);
            let subConstraint1 = new RegExp('[\\*\\-\\+\\/]{2}');
            let subConstraint2 = new RegExp('[\\+\\-]');
            let subTmpExpression = state.expression;
            if(!subConstraint1.test(subExpressionTwoLastChars) && subConstraint2.test(subExpressionLastChar)) {
                subTmpExpression = state.expression.substr(0, state.expression.length-1)+action.value;
            } else if(!subConstraint1.test(subExpressionTwoLastChars) && !subConstraint2.test(subExpressionLastChar)) {
                subTmpExpression = state.expression+action.value;
            }

            nextState = {
                ...state, 
                loading: action.loading,
                expression: subTmpExpression,
                compute: '',
                lastPartOfExpression: action.value
            }
            return nextState || state

        default:
            return state
    }
}

export default CalculatorReducer;
import  {appActions} from '../../constants/Constants';

/* Pressed on number button */
const numberRequest = () => ({
    type: appActions.numberRequest,
    loading: true
});

const numberSuccess = number => ({
    type: appActions.numberSuccess,
    loading: false, 
    value: number,
});

export const fetchNumber = number => {
    return (dispatch) => {
        dispatch(numberRequest());
        setTimeout(() => dispatch(numberSuccess(number)), 50);
    }
}

/* Pressed on AC button */
const cleanRequest = () => ({
    type: appActions.cleanRequest,
    loading: true
});

const cleanSuccess = () => ({
    type: appActions.cleanSuccess,
    loading: false
});

export const fetchClean = () => {
    return (dispatch) => {
        dispatch(cleanRequest());
        setTimeout(() => dispatch(cleanSuccess()), 50);
    }
}

/* Pressed on Delete button */
const deleteRequest = () => ({
    type: appActions.deleteRequest,
    loading: true
});

const deleteSuccess = () => ({
    type: appActions.deleteSuccess,
    loading: false
});

export const fetchDelete = () => {
    return (dispatch) => {
        dispatch(deleteRequest());
        setTimeout(() => dispatch(deleteSuccess()), 50);
    }
}


/* Pressed on dot button */
const dotRequest = () => ({
    type: appActions.dotRequest,
    loading: true
});

const dotSuccess = dot => ({
    type: appActions.dotSuccess,
    loading: false,
    value: dot
});

export const fetchDot = dot => {
    return (dispatch) => {
        dispatch(dotRequest());
        setTimeout(() => dispatch(dotSuccess(dot)), 50);
    }
}

/* Pressed on division button */
const divisionRequest = () => ({
    type: appActions.divisionRequest,
    loading: true
});

const divisionSuccess = division => ({
    type: appActions.divisionSuccess,
    loading: false,
    value: division
});

export const fetchDivision = division => {
    return (dispatch) => {
        dispatch(divisionRequest());
        setTimeout(() => dispatch(divisionSuccess(division)), 50);
    }
}
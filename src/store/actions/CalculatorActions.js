import  {appActions} from '../../constants/Constants';

/* Pressed number button */
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

/* Pressed AC button */
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
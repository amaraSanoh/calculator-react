import  {appActions, appApi} from '../../constants/Constants';

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

/* Pressed on division or multiplication or sum button */
const divisionMultSumRequest = () => ({
    type: appActions.divisionMultSumRequest,
    loading: true
});

const divisionMultSumSuccess = operator => ({
    type: appActions.divisionMultSumSuccess,
    loading: false,
    value: operator
});

export const fetchDivisionMultSum = operator => {
    return (dispatch) => {
        dispatch(divisionMultSumRequest());
        setTimeout(() => dispatch(divisionMultSumSuccess(operator)), 50);
    }
}

/* Pressed on substraction button */
const substractionRequest = () => ({
    type: appActions.substractionRequest,
    loading: true
});

const substractionSuccess = substraction => ({
    type: appActions.substractionSuccess,
    loading: false,
    value: substraction
});

export const fetchSubstraction = substraction => {
    return (dispatch) => {
        dispatch(substractionRequest());
        setTimeout(() => dispatch(substractionSuccess(substraction)), 50);
    }
}

/* Pressed on equals button */
const computeRequest = () => ({
    type: appActions.computeRequest,
    loading: true
});

const computeSuccess = compute => ({
    type: appActions.computeSuccess,
    loading: false,
    value: compute
});

export const fetchCompute = expression => {
    let headers = new Headers({
        "Content-Type":  "application/ld+json",
        "Accept":  "application/ld+json"
    });

    let init = {
        method: 'POST',
        headers,
        body: JSON.stringify({
            expression: expression
        })
    }; 

    return dispatch => {
        dispatch(computeRequest());
            
            return ( 
                fetch(appApi.mainPath, init)
                .then(response => {
                    if(!response.ok) throw new Error('Error - 404 Found');

                    return response.json(); 
                })
                .then(data => { 
                    console.log(data);
                    dispatch(computeSuccess(typeof data.compute !== undefined ? data.compute : data.error));
                })
                .catch(error => {
                    console.log(error);
                    // dispatch(loginFailure(error));
                })
            );
    }
}

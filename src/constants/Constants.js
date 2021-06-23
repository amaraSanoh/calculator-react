export const appColors = {
    black: '#000000',
    green: '#2e8b57',
    white: '#ffffff',
    gray: '#808080',
    blue: '#30304f',
    deepBlue: '#272738',
    lightBlue: '#E0EEEE'
}

export const appApi = {
    mainPath: 'https://127.0.0.1:8000/api/v1/compute'
}

export const appActions = {
    computeRequest: "COMPUTE_REQUEST",
    computeSuccess: "COMPUTE_SUCCESS",
    computeFailure: "COMPUTE_FAILURE",

    numberRequest: "NUMBER_REQUEST",
    numberSuccess: "NUMBER_SUCCESS",

    cleanRequest: "CLEAN_REQUEST",
    cleanSuccess: "CLEAN_SUCCESS",

    deleteRequest: "DELETE_REQUEST",
    deleteSuccess: "DELETE_SUCCESS",

    dotRequest: "DOT_REQUEST",
    dotSuccess: "DOT_SUCCESS",
    dotFailure: "DOT_FAILURE",

    divisionMultSumRequest: "DIVISION_MULT_SUM_REQUEST",
    divisionMultSumSuccess: "DIVISION_MULT_SUM_SUCCESS",
    divisionMultSumFailure: "DIVISION_MULT_SUM_FAILURE",

    substractionRequest: "SUBSTRACTION_REQUEST",
    substractionSuccess: "SUBSTRACTION_SUCCESS",
    substractionFailure: "SUBSTRACTION_FAILURE",

    sumRequest: "SUM_REQUEST",
    sumSuccess: "SUM_SUCCESS",
    sumFailure: "SUM_FAILURE",
}
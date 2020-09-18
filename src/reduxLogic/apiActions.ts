import Api from "./api"

//actions
export const LOAD_QUOTES_LOADING = 'REDUX_THUNK_LOAD_QUOTES_LOADING';
export const LOAD_QUOTES_SUCCESS = 'REDUX_THUNK_LOAD_QUOTES_SUCCESS';
export const LOAD_QUOTES_ERROR = 'REDUX_THUNK_LOAD_QUOTES_ERROR';

//actionTypes
export function loadQuotesLoading() {
    return {
        type: LOAD_QUOTES_LOADING
    }
}

export function loadQuotesSuccess(quotes: any) {
    return {
        type: LOAD_QUOTES_SUCCESS,
        payload: quotes
    }
}

export function loadQuotesError(error: any) {
    return {
        type: LOAD_QUOTES_ERROR,
        error: error
    }
}

export const loadQuotes = (loanSize: any, creditScore: any, propertyType: any, occupancy: any) => {
    return async (dispatch: (arg0: any) => void) => {   
        dispatch(loadQuotesLoading);   

        try {
            const response = await Api.fetchQuotes(loanSize, creditScore, propertyType, occupancy);
            if (!response.ok) {
                throw Error("Failed to fetch data");
            }
            const data = await response.text();
            let dataObj = JSON.parse(data);
            dispatch(loadQuotesSuccess(dataObj["rateQuotes"]));
            dispatch({type: LOAD_QUOTES_SUCCESS, payload: dataObj["rateQuotes"]});
        } catch(error) {
            dispatch({type: LOAD_QUOTES_ERROR, error})
        }
    }
}


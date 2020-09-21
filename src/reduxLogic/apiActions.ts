import { Action, ActionCreator, AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import Api from "./api"

//actions
export const LOAD_QUOTES_LOADING = 'LOAD_QUOTES_LOADING';
export const LOAD_QUOTES_SUCCESS = 'LOAD_QUOTES_SUCCESS';
export const LOAD_QUOTES_ERROR = 'LOAD_QUOTES_ERROR';

//action creators
export const loadQuotesLoading: ActionCreator<Action>=() =>{
    return {
        type: LOAD_QUOTES_LOADING
    }
}

export const loadQuotesSuccess:ActionCreator<Action> =(quotes: any) => {
    return {
        type: LOAD_QUOTES_SUCCESS,
        payload: quotes
    }
}

export const loadQuotesError: ActionCreator<Action> = (error: any) => {
    return {
        type: LOAD_QUOTES_ERROR,
        error: error
    }
}

let dataObj: any;

export const loadQuotes = (loanSize: any, creditScore: any, propertyType: any, occupancy: any) => {
    return async (dispatch: ThunkDispatch<any, any, AnyAction>) => {
        dispatch(loadQuotesLoading);
        try {
            const response = await Api.fetchQuotes(loanSize, creditScore, propertyType, occupancy);
            if (!response.ok) {
                dispatch(loadQuotesError(Error))
            } else {
                const data = await response.text();
                dataObj = JSON.parse(data);
                dispatch(loadQuotesSuccess(dataObj["rateQuotes"]));
            }
            return dataObj;
        } catch(err) {
            dispatch(loadQuotesError(Error));
            return Error;
        }
    }
};


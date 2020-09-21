import {LOAD_QUOTES_ERROR, LOAD_QUOTES_LOADING, LOAD_QUOTES_SUCCESS} from "./apiActions";

export interface IState {
    quotes: {
        lenderName: string,
        loanType: number,
        interestRate: number,
        closingCosts: number,
        monthlyPayment: number,
        apr: number
    }
};

export const initialState = {
   quotes: {
    lenderName: "",
    loanType: "",
    interestRate: "",
    closingCosts: "",
    monthlyPayment: "",
    apr: ""
   },
   loading: true,
   error: ''
};

export default function reduxThunkReducer(state = initialState, action: any) {
   switch (action.type) {
       case LOAD_QUOTES_LOADING: {
           return {
               ...state,
               loading: true,
               error:''
           };
       }
       case LOAD_QUOTES_SUCCESS: {
           return {
               ...state,
               quotes: action.payload,
               loading: false
           };
       }
       case LOAD_QUOTES_ERROR: {
           return {
               ...state,
               loading: true,
               error: "failed to fetch data"
           };
       }
       default: {
           return state;
       }
   }
}

//Selectors
export function getQuotes(state: any) {
    return state.quotes;
}

export function getLoading(state: any) {
    return state.loading;
}

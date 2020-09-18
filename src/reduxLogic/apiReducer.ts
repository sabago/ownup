import {LOAD_QUOTES_ERROR, LOAD_QUOTES_LOADING, LOAD_QUOTES_SUCCESS} from "./apiActions";

const initialState = {
   quotes: {
    lenderName: "",
    loanType: "",
    interestRate: "",
    closingCosts: "",
    monthlyPayment: "",
    apr: ""
   },
   loading: false,
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
           }
       }
       case LOAD_QUOTES_ERROR: {
           return {
               ...state,
               loading: false,
               error: action.error
           };
       }
       default: {
           return state;
       }
   }
}

//Selector
export function getQuotes(state: any) {
    return state.quotes;
}

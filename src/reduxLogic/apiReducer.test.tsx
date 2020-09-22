import reduxThunkReducer, { getQuotes } from './apiReducer';
import * as types from "./apiActions";
import { initialState } from './apiReducer';


describe('todos reducer', () => {
    it('should return the initial state', () => {
      expect(reduxThunkReducer(undefined, {})).toEqual({
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
        });
    });
  
    it('should handle ADD_TODO', () => {
      expect(
        reduxThunkReducer(initialState, {
          type: types.LOAD_QUOTES_LOADING
        })
      ).toEqual(
        {
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
            });
        });
  
      expect(
        reduxThunkReducer(
          initialState,
          {
            type: types.LOAD_QUOTES_SUCCESS,
            payload: {}
          }
        )
        ).toEqual(
            {
                quotes: { },
                loading: false,
                error: ''
            });
            
        expect(
        reduxThunkReducer(
            initialState,
            {
                type: types.LOAD_QUOTES_ERROR,
                payload: {}
            }
        )
        ).toEqual(
            {
            quotes: { lenderName: "",
            loanType: "",
            interestRate: "",
            closingCosts: "",
            monthlyPayment: "",
            apr: ""},
            loading: true,
            error: "failed to fetch data"
            });        
        });

import configureMockStore from 'redux-mock-store'
import thunk, { ThunkDispatch } from 'redux-thunk'
import * as actions from './apiActions'
import * as types from './apiActions'
import fetchMock from 'fetch-mock'
import expect from 'expect' 
import { AnyAction } from 'redux'
import { API_KEY, API_URL } from './api'
import { initialState } from './apiReducer';

const middlewares = [thunk];

const mockStore = configureMockStore(middlewares);

const fetch_url = new URL(API_URL);
fetch_url.search = new URLSearchParams(
    {"loanSize":"450000",
    "creditScore":"680",
    "propertyType": "SingleFamily",
    "occupancy": "Primary"}
    ).toString();

describe('async actions',  () => {
  afterEach(() => {
    fetchMock.restore()
  });

  it('should create an action to handle loading of data', () => {
    const expectedAction = {
      type: types.LOAD_QUOTES_LOADING
    }
    expect(actions.loadQuotesLoading()).toEqual(expectedAction)
  });

  it('should create an action to successful fetch', () => {
    const quotes = {};
    const expectedAction = {
      type: types.LOAD_QUOTES_SUCCESS,
      payload: quotes
    }
    expect(actions.loadQuotesSuccess(quotes)).toEqual(expectedAction)
  });

  it('should create an action to handle errors', () => {
    const error = "failed to fetch data";
    const expectedAction = {
      type: types.LOAD_QUOTES_ERROR,
      error: error
    }
    expect(actions.loadQuotesError(error)).toEqual(expectedAction)
  });

  it('should handle async action creators', async () => {
    const response = ["do something"]

    await fetchMock.getOnce(fetch_url.href, 
          {
            body: { quotes: response },
            headers: { 'content-type': 'application/json' , 'Authorization': `OU-AUTH ${API_KEY}` }
          })

    const expectedActions = [
      { type: types.LOAD_QUOTES_SUCCESS, payload: undefined} 
    ]
    const store = mockStore(initialState)

    type TestThunkDispatch = ThunkDispatch<{}, {}, AnyAction>;
    const thunkDispatch = store.dispatch as TestThunkDispatch;

    return thunkDispatch(actions.loadQuotes("450000", "680", "SingleFamily", "Primary")).then(() => {
      // potentially false positive as it returns payload of undefined...
      expect(store.getActions()).toEqual(expectedActions);
    })
  })
})





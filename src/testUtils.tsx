import React from 'react';
import { render as rtlRender } from '@testing-library/react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
// Import your own reducer
// import reducer from '../reducer'
import reduxThunkReducer from './reduxLogic/apiReducer';

 
const testRender = (ui: any, {
    // initialState,
    // store = createStore(reducer, initialState),
    store = createStore(reduxThunkReducer),
    ...renderOptions
  } = {}
) =>{
  const Wrapper = (children: React.ReactNode) => {
    return <Provider store={store}>{ui}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// {homes.map(home => <div>{home.name}</div>)}

// re-export everything
export * from '@testing-library/react';
// override render method
export { testRender };


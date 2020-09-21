import * as React from 'react';
import { useSelector } from "react-redux";

import { QuoteTable } from './components/quoteTable';
import { getQuotes } from './reduxLogic/apiReducer';
import { SearchControl } from './components/searchControl';
import './App.css';

const App = () => {
  const fetchedQuotes = useSelector(getQuotes);
  const quotes = Object.values(fetchedQuotes);

  return (
    <div className="App">
      {<SearchControl />}
      {<QuoteTable quotes={quotes}/>}
    </div>
  );
}

export default App;

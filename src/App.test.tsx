import React from 'react';
import App from './App';
import { testRender } from './testUtils';



describe("when the user opens the browser", () => {
  it("renders App component in initial state", () => {
    const { asFragment } = testRender(<App/>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders App component with the Search Contol component", ()=>{
    const { getByTestId } = testRender(<App />);
    expect(getByTestId("search-control")).toBeInTheDocument();
  });

  it("renders App component with the Table component", ()=>{
    const { getByTestId } = testRender(<App />);
    expect(getByTestId("quote-table")).toBeInTheDocument();
  });
})

//Add E2E test for when user clicks the button in the search control
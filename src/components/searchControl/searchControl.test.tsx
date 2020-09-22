import '@testing-library/jest-dom';
import React from "react";
import { SearchControl } from ".";
import { testRender } from "../../testUtils";


describe ("when page laods", () => {
    it("renders the search control", () => {
        const { getByTestId } = testRender(< SearchControl />);
        expect(getByTestId("search-control")).toBeInTheDocument();
    })
    it("renders all labels in the search control correctly", () => {
        const { getByText } = testRender(<SearchControl/>);
       
        expect(getByText("Loan Size")).toBeInTheDocument();
        expect(getByText("Property Type")).toBeInTheDocument();
        expect(getByText("Credit Score")).toBeInTheDocument();
        expect(getByText("Occupancy")).toBeInTheDocument();
    });

    it("renders the placeholders in the search control correctly", () => {
        const { getByPlaceholderText } = testRender(<SearchControl/>);
      
        expect(getByPlaceholderText("450000")).toBeInTheDocument();
        expect(getByPlaceholderText("450000")).toBeInTheDocument();
        expect(getByPlaceholderText("450000")).toBeInTheDocument();
        expect(getByPlaceholderText("450000")).toBeInTheDocument();
    });

    it("renders the values in the search control correctly", () => {
        const { getByLabelText } = testRender(<SearchControl/>);

        expect((getByLabelText("Loan Size") as HTMLInputElement).value).toBe("450000");
        expect((getByLabelText("Property Type") as HTMLInputElement).value).toBe("SingleFamily");
        expect((getByLabelText("Credit Score") as HTMLInputElement).value).toBe("680");
        expect((getByLabelText("Occupancy") as HTMLInputElement).value).toBe("Primary");
    });

    it("renders the button in the search control", async ()=> {
        const { getByText} = testRender(<SearchControl />);
        const button = getByText('Quote Rates');
        expect(button).toBeInTheDocument();

    });
});



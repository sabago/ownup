import React from "react";

import { QuoteTable } from ".";
import { testRender } from "../../testUtils";

describe("when page loads", () => {
    it("renders the search control", () => {
        const quotes: any[] = [];
        const { getByTestId } = testRender(< QuoteTable quotes={quotes}/>);
        expect(getByTestId("loader")).toBeInTheDocument();
    });
    it("renders no table upon loading", () => {
        const quotes: any[] = [
            {
                lenderName: "TFB",
                loanType: "30YR Fixed",
                interestRate: "4%",
                closingCosts: "10000",
                monthlyPayment: "2000",
                apr: "4%"
                
            }
        ];
        const { queryByTestId } = testRender(< QuoteTable quotes={quotes}/>);
        expect(queryByTestId("data-table")).not.toBeInTheDocument();
    })
});


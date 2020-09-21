import * as React from 'react';

import "./styles/index.css";

interface IProps {
    quoteprop: any;
}
 
 const toPercentage = (num: any) => {
    const formatter = new Intl.NumberFormat("en-US", {
        minimumFractionDigits: 3,
        maximumFractionDigits: 3
    });
    return formatter.format(num);
 }

 const toCurrency = (num: any) => {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
    return formatter.format(num);
  }

  //Because this is rendered dynamically when the data is fetched, skipping test for now
export const QuoteRow: React.FC <IProps> = (props: IProps) => {
    const quote  = props.quoteprop;
    return (
        <tr>
            <td>
                <div className="trunc-text">{quote.lenderName}</div>
            </td>
            <td>{quote.loanType}</td>
            <td>
                {toPercentage(quote.interestRate)+"%"}
            </td>
            <td>
                {toCurrency(quote.closingCosts)}
            </td>
            <td>
                {toCurrency(quote.monthlyPayment)}
            </td>
            <td>
                {toPercentage(quote.apr)+"%"}
            </td>
        </tr>
    );
}

import * as React from 'react';

import "./styles/index.css";

interface IProps {
    quoteprop: any;
}

export const QuoteRow: React.FC <IProps> = (props: IProps) => {
    const quote  = props.quoteprop;
    return (
        <tr>
            <td>
                <div className="trunc-text">{quote.lenderName}</div>
            </td>
            <td>{quote.loanType}</td>
            <td>
                {new Intl.NumberFormat('en-US', {
                    minimumFractionDigits: 3,
                    maximumFractionDigits: 3
                    }).format(quote.interestRate)+"%"}
            </td>
            <td>
                {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0
                }).format(quote.closingCosts)}
            </td>
            <td>
                {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0
                }).format(quote.monthlyPayment)}
            </td>
            <td>
                {new Intl.NumberFormat('en-US', {
                minimumFractionDigits: 3,
                maximumFractionDigits: 3
                }).format(quote.apr)+"%"}
            </td>
        </tr>
    );
}

import * as React from 'react';

interface IProps {
    quoteprop: any;
}
export const QuoteRow: React.FC <IProps>=(props: IProps)=>{
    const quote  = props.quoteprop;
    return (
        <tr>
            <td>{quote.lenderName}</td>
            <td>{quote.loanType}</td>
            <td>{quote.interestRate}</td>
            <td>{quote.closingCosts}</td>
            <td>{quote.monthlyPayment}</td>
            <td>{quote.apr}</td>
        </tr>
    );
}
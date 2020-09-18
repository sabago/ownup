import * as React from 'react';

import { QuoteRow } from '../quoteRow';

interface IProps {
    quotes:any;
}

export const QuoteTable:React.FC <IProps>=(props: IProps) => {
    const rows: any=[];
    let lastLender: any = null;

    props.quotes.map((quote: any, index: number)=> {
        if (quote.lenderName !== lastLender) {
            rows.push(
                <QuoteRow quoteprop={quote} key={index}/>
            );
            return rows;          
        }
        lastLender = quote.lenderName;
    });
    
    return (
        <table>
            <thead>
                <tr>
                    <th style={{padding:"0 20px"}}>LENDER</th>
                    <th style={{padding:"0 20px"}}>PRODUCT</th>
                    <th style={{padding:"0 20px"}}>RATE</th>
                    <th style={{padding:"0 20px"}}>CLOSING COSTS</th>
                    <th style={{padding:"0 20px"}}>MONTHLY PAYMENTTS</th>
                    <th style={{padding:"0 20px"}}>APR</th>
                </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
        </table>
    );
}


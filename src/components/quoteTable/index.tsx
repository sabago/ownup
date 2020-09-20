import * as React from 'react';
import Loader from 'react-loader-spinner';

import { useSelector } from "react-redux";

import { getLoading } from '../../reduxLogic/apiReducer';
import { QuoteRow } from '../quoteRow';
import "./styles/index.css";

interface IProps {
    quotes:any;
}

export const QuoteTable:React.FC <IProps>=(props: IProps) => {
    const loadingState = useSelector(getLoading);
    let rows: any=[];
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
        <div>
            {loadingState ?
            <div className="center-loader">
                <h1> Press the button to see your rates!</h1>
                <Loader type="TailSpin" color="#265b5f"/>
            </div> :
            <table>
                <thead>
                    <tr>
                        <th>LENDER</th>
                        <th>PRODUCT</th>
                        <th>RATE</th>
                        <th className="trunc-head-text">CLOSING COSTS</th>
                        <th className="trunc-head-text">MONTHLY PAYMENT</th>
                        <th>APR</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>}
        </div>
    );
}


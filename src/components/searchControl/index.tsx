import * as React from "react";
import { useState, useEffect } from 'react';

import { useDispatch } from "react-redux";

import { loadQuotes } from "../../reduxLogic/apiActions";
import "./styles/index.css";

export const SearchControl = () => {
    const [loanSize, setLoanSize] = useState<number| undefined>(450000);
    const [creditScore, setCreditScore] = useState<number| undefined>(680);
    const [propertyType, setPropertyType] = useState<string | undefined>("SingleFamily");
    const [occupancy, setOccupancy] = useState<string | undefined>("Primary");

    const dispatch = useDispatch();

    const propertyOptions = [
        {value: "SingleFamily" , label:"Single Family"  },
        {value: "Condo" , label:"Condo"  },
        {value: "Townhouse" , label:"Townhouse"  },
        {value: "MultiFamily" , label:"Multi Family"  }
      ];
    
    const occupancyOptions = [
        {value: "Primary", label: "Primary Residence"},
        {value: "Secondary" , label:"Secondary Residence"},
        {value: "Investment", label: "Investment"}
    ];
      
    let updateParams: any;
    useEffect(()=>{
        updateParams = (e: any) =>{
            dispatch(loadQuotes(
                loanSize,
                creditScore,
                propertyType,
                occupancy));
                e.preventDefault();
            }
    }, [loanSize, creditScore, propertyType, occupancy]);
          
    return (
        <div>
            <form>
                <div className="search">
                    <span>
                        <label>Loan Size</label>
                        <input
                            type="number"
                            placeholder="450000"
                            onChange={e=>setLoanSize(parseInt(e.target.value))}
                            value={loanSize}
                        />
                    </span>
                    <span>
                        <label>Property Type</label>
                        <select
                            onChange={e=>setPropertyType(e.target.value)}
                            value={propertyType}
                        >
                            {propertyOptions.map((o,i) => (
                                <option value={o.value} key={i}>
                                    {o.label}
                                </option>
                            ))}
                        </select>
                    </span>
                </div>
                <br/>
                <div className="search">
                    <span>
                        <label> Credit Score</label>
                        <input
                            type="number"
                            placeholder="680"
                            onChange={e=>setCreditScore(parseInt(e.target.value))}
                            value={creditScore}
                        />
                    </span>
                    <span>
                        <label>Occupancy</label>
                        <select
                            value={occupancy}
                            onChange={e=>setOccupancy(e.target.value)}
                        >
                            {occupancyOptions.map((o,i) => (
                                <option value={o.value} key={i}>
                                    {o.label}
                                </option>
                            ))}
                        </select>
                    </span>
                </div>
                <button className="quote-button" onClick={e=>updateParams(e)}>Quote Rates</button>
            </form>
        </div>
    )
}


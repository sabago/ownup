import * as React from "react";

import { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";

import { loadQuotes } from "../../reduxLogic/apiActions";

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
        {value: "Primary", label: "Primary"},
        {value: "Secondary" , label:"Secondary"},
        {value: "Investment", label: "Investment"}
      ];
      
        let updateParams: any;
        useEffect(()=>{
            updateParams = (e: any) =>{
                dispatch(loadQuotes(loanSize, 
                    creditScore, 
                    propertyType, 
                    occupancy));
                    e.preventDefault();
                }
        }, [loanSize, creditScore, propertyType, occupancy]);
          
    return (
        <div>
            <form>
                <span>
                <label>Loan Size</label>
                <input 
                type="number" 
                min="0.01" 
                step="0.01"
                placeholder="450000"
                onChange={e=>setLoanSize(parseInt(e.target.value))}
                value={loanSize} />
                <label>Property Type</label>
                <select 
                onChange={e=>setPropertyType(e.target.value)}
                value={propertyType}
                >
                    {propertyOptions.map((o,i) => (
                <option value={o.value} key={i}>{o.label}</option>
                ))}
                </select>
                </span>
                
                <span>
                <label> Credit Score</label>
                <input 
                type="number"
                placeholder="680"
                onChange={e=>setCreditScore(parseInt(e.target.value))}
                value={creditScore} />
                <label>Occupancy</label>
                <select 
                value={occupancy}
                onChange={e=>setOccupancy(e.target.value)}
                >
                    {occupancyOptions.map((o,i) => (
                    <option value={o.value} key={i}>{o.label}</option>
                    ))}
                </select>
                </span>  
                <button onClick={e=>updateParams(e)}>Quote Rates</button>       
            </form>
        </div>
    )
}


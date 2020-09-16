import * as React from "react";
import { useEffect, useState } from "react";

interface IProps {
    loanSize: number;

    submitClick:(e: any) => void;
}


export const ControlCenter:React.FC <IProps>=(props: IProps) => {
// export const  = (props: IProps) => {
    // const [loanSize, setLoanSize] = useState(initialLoanSize);
    // const [creditScore, setCreditScore] = useState(680);
    // const [propertyType, setPropertyType] = useState("SingleFamily");
    // const [occupancy, setOccupancy] = useState("Primary");
    const [retrievedData, setRetrievedData] = useState([]);


//   const refLoanSize = React.useRef(loanSize);

//   useEffect(() => {
//     refLoanSize.current = loanSize;
//   })

    // useEffect(() => {
    //     const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
    //     const API_URL= `https://ss6b2ke2ca.execute-api.us-east-1.amazonaws.com/Prod/quotes/`;
    //     const fetch_url = new URL(API_URL);
    //     // console.log(propertyType);
    //     fetch_url.search = new URLSearchParams(
    //                         {"loanSize":`${refLoanSize.current}`,
    //                         "creditScore":`${creditScore}`,
    //                         "propertyType": `${propertyType}`,
    //                         "occupancy":`${occupancy}`}
    //                         ).toString();
    
    //     const fetchData = async () => {
    //     try {
    //       const response = await fetch(fetch_url.href, {
    //         headers: {
    //             'Authorization': `OU-AUTH ${API_KEY}`
    //             }
    //       });
    //       if (!response.ok) {
    //         throw Error("Failed to fetch data");
    //       }
    //       const data = await response.text();
    //       dataObj = JSON.parse(data);
    
    //       setRetrievedData(dataObj["rateQuotes"])
          
    
    //     } catch(error) {
    //       console.log(error);
    //     }
    //   }
    
    //   fetchData();
      
      
    //   },[loanSize , creditScore, propertyType, occupancy]);
    
    

    const propertyOptions = [
        {value: "SingleFamily" , label:"Single Family"  },
        {value: "Condo" , label:"Condo"  },
        {value: "Townhouse" , label:"Townhouse"  },
        {value: "MultiFamily" , label:"Multi Family"  }
      ]
    
      const occupancyOptions = [
        {value: "Primary", label: "Primary"},
        {value: "Secondary" , label:"Secondary"},
        {value: "Investment", label: "Investment"}
      ]
    return (
    <form>
        {/* <span>
        <label>Loan Size</label>
        <input 
          placeholder="450000"
          onChange={(e:any)=>setLoanSize(e.target.value)}
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
          type="text"
          placeholder="680"
          onChange={(e:any)=>setCreditScore(e.target.value)}
          value={creditScore} />
        <label>Occupancy</label>
        <select 
          value={occupancy}
          onChange={(e:any) =>setOccupancy(e)}
          >
            {occupancyOptions.map((o,i) => (
              <option value={o.value} key={i}>{o.label}</option>
            ))}
        </select>
        </span> 
        <button onClick={props.submitClick}>Quote Rates</button>       */}
      </form>

    )
    
}
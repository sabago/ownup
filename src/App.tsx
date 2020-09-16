import * as React from 'react';
import {useState, useEffect, useRef} from 'react';

import './App.css';
import { TableHeader } from './components/tableHeader';


interface IProps {}

interface IState {}

let dataObj: any;
const initialLoanSize = 450000;

const App: React.FC<IProps> = (props:IProps, state:IState) => {
  const [loanSize, setLoanSize] = useState(initialLoanSize);
  const [creditScore, setCreditScore] = useState(680);
  const [propertyType, setPropertyType] = useState("SingleFamily");
  const [occupancy, setOccupancy] = useState("Primary");
  const [retrievedData, setRetrievedData] = useState([]);

  const refLoanSize = useRef(loanSize);

  useEffect(() => {
    refLoanSize.current = loanSize;
  })

  const handleLoanSize = (event: any) => {
    setLoanSize(event.target.value);
  }

  //delete
  console.log("loan size", loanSize);
  const handleCreditScore = (event: any) => {
    setCreditScore(event.target.value);
  }
  //delete
  console.log("credit score", creditScore);

  const handlePropertyType = (event: any) => {
    setPropertyType(event);
  }

  //delete
  console.log("property Type", propertyType);

  const handleOccupancy = (event: any) => {
    setOccupancy(event);
  }

  //delete
  console.log("occupancy", occupancy);
  useEffect(() => {
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
    const API_URL= `https://ss6b2ke2ca.execute-api.us-east-1.amazonaws.com/Prod/quotes/`;
    const fetch_url = new URL(API_URL);
    // console.log(propertyType);
    fetch_url.search = new URLSearchParams(
                        {"loanSize":`${refLoanSize.current}`,
                        "creditScore":`${creditScore}`,
                        "propertyType": `${propertyType}`,
                        "occupancy":`${occupancy}`}
                        ).toString();

    const fetchData = async () => {
    try {
      const response = await fetch(fetch_url.href, {
        headers: {
            'Authorization': `OU-AUTH ${API_KEY}`
            }
      });
      if (!response.ok) {
        throw Error("Failed to fetch data");
      }
      const data = await response.text();
      dataObj = JSON.parse(data);

      setRetrievedData(dataObj["rateQuotes"])
      

    } catch(error) {
      console.log(error);
    }
  }

  fetchData();
  
  
  },[loanSize , creditScore, propertyType, occupancy]);


  // console.log(typeof(retrievedData), retrievedData);

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
    <div className="App">
      <form>
        <span>
        <label>Loan Size</label>
        <input 
          type="number" 
          min="0.01" 
          step="0.01"
          placeholder="$450000"
          onChange={e=>handleLoanSize(e)}
          value={loanSize} />
        <label>Property Type</label>
        <select 
          onChange={e=>handlePropertyType(e)}
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
          onChange={e=>handleCreditScore(e)}
          value={creditScore} />
        <label>Occupancy</label>
        <select 
          value={occupancy}
          onChange={e=>handleOccupancy(e)}
          >
            {occupancyOptions.map((o,i) => (
              <option value={o.value} key={i}>{o.label}</option>
            ))}
        </select>
        </span>       
      </form>
      {<TableHeader quotes={retrievedData}/>}
    </div>
  );

  
}



export default App;

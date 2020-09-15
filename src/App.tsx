import * as React from 'react';
import {useState, useEffect} from 'react';
import './App.css';

interface IProps {
}

interface IState {
  playOrPause?: string;
}

let data:any;

const App: React.FC<IProps> = (props:IProps, state:IState) => {
  const [loanSize, setLoanSize] = useState(450000);
  const [creditScore, setCreditScore] = useState(680);
  const [propertyType, setPropertyType] = useState("SingleFamily");
  const [occupancy, setOccupancy] = useState("Primary");

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
    const API_URL= `https://ss6b2ke2ca.execute-api.us-east-1.amazonaws.com/Prod/quotes/?apiKey=${API_KEY}`;
    const fetch_url = new URL(API_URL);
    fetch_url.search = new URLSearchParams({"loanSize":`${loanSize}`, "creditScore":`${creditScore}`, "propertyType": `${propertyType}`, "occupancy":`${occupancy}`}).toString();

    const fetchData = async () => {
    try {
      const response = await fetch(fetch_url.href, {
        headers: {
            'Authorization': `OU-AUTH ${API_KEY}`
            }
      });
      const data = await response.text();
      const dataObj = JSON.parse(data);

      //delete  when done with table     
      console.log(dataObj["rateQuotes"]);

    } catch(error) {
      console.log(error);
    }
  }

  fetchData();
  },[loanSize , creditScore, propertyType, occupancy]);

  return (
    <div className="App">
      {data}
    </div>
  );
}
  

export default App;

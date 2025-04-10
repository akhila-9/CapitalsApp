import React, { useState } from "react";
import "./Capital.css";
const countryAndCapitalsList = [
    {
      id: 'NEW_DELHI',
      capitalDisplayText: 'New Delhi',
      country: 'India',
    },
    {
      id: 'LONDON',
      capitalDisplayText: 'London',
      country: 'United Kingdom',
    },
    {
      id: 'PARIS',
      capitalDisplayText: 'Paris',
      country: 'France',
    },
    {
      id: 'KATHMANDU',
      capitalDisplayText: 'Kathmandu',
      country: 'Nepal',
    },
    {
      id: 'HELSINKI',
      capitalDisplayText: 'Helsinki',
      country: 'Finland',
    },
  ]
const Capital = () => {
  const [selected, setSelected] = useState("");
  const selectedcapital = countryAndCapitalsList.find((countryAndCapitalsList) => countryAndCapitalsList.capitalDisplayText === selected);
  return (
    <div className="entireContainer">
      <div className="Capitalcard">
        <div className="header">Countires and Capitals</div>
        <div class="ggg">
        <div className="sss">
        <select value={selected} className="dropdown" onChange={(e) => setSelected(e.target.value)
            
        }>
           
          <option value="">select one</option>
          {countryAndCapitalsList.map((item) => (
           
            <option key={item.value} value={item.value}>
              {item.capitalDisplayText}
            </option>
          ))}
        </select>
      </div>
      <div className="ddd">is capital of which country?</div>
        </div>
       
       {selectedcapital && (
        <div className="jjj" >
          {selectedcapital.country}
        </div>
      )}
     
       
       
      
      </div>
      
    </div>
  );
};

export default Capital;

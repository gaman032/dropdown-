import React, { useState } from "react";
import "./App.css";
import { MultiSelect } from "react-multi-select-component";



  // Array of all options
  const optionList  = [ 
    
    { value: "India", label: "India" },
    { value: "France", label: "France" },
    { value: "Finland", label: "Finland" },
    { value: "Australia", label: "Australia" },
    { value: "Bermuda", label: "Bermuda" },
    { value: "Canada", label: "Canada" },
    { value: "Cameroon", label: "Cameroon" },
    { value: "Denmark", label: "Denmark" } ,

   

  ];

  const Example = () => {
    const [selected, setSelected] = useState([]);
  
  return (
    <div className="app">
      <h2>ENTER COUNTRY NAME</h2>
      <div className="dropdown-container">
        <MultiSelect 
          options={optionList}          
          value={selected}
          filterBarPlaceholder="Search countries" 
          onChange={setSelected}
        />
      </div>
    </div>
  );
};

export default Example;
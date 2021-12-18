import React, { useState, useEffect } from "react";
import "./App.css";
import Expense from "./classes/expense";
import Names from "./components/Names";
import Transactions from "./components/Transactions";

function App() {
  const [flag, setFlag] = useState(false);
  const [allNames, setAllNames] = useState([]);
  
  const handleOpenForm = () => {
    console.log("Form opened");
    setFlag(!false);
  };
  return (
    <div style={{margin: "auto"}}>
      <Names flag={flag} handleOpenForm={handleOpenForm} allNames={allNames} setAllNames={setAllNames}/>
      {flag ? <Transactions flag={flag} allNames={allNames} /> : null}
    </div>
  );
}

export default App;

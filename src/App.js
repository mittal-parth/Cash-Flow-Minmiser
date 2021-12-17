import React, { useState, useEffect } from "react";
import "./App.css";
import Expense from "./classes/expense";
import Names from "./components/Names";

function App() {
  const [flag, setFlag] = useState(false);
  // const handleOpenForm = () => {
  //   setFlag(!false);
  // };
  return (
    <div>
      <Names flag={flag} />
    </div>
  );
}

export default App;

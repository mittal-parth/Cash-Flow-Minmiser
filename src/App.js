import React, { useState, useEffect } from "react";
import "./App.css";
import { Grid } from "@material-ui/core";
// import Expense from "./classes/expense";
import Graph from "./components/Graph";
import Names from "./components/Names";
import Transactions from "./components/Transactions";

function App() {
  const [flag, setFlag] = useState(false);
  const [allNames, setAllNames] = useState([]);
  const [inputGraphData, setInputGraphData] = useState({});
  const [inputGraphConfig, setInputGraphConfig] = useState({});
  const [items, setItems] = useState([]);

  const handleOpenForm = () => {
    console.log("Form opened");
    setFlag(!false);
  };
  return (
    <div style={{ margin: "auto" }}>
      <Names
        flag={flag}
        handleOpenForm={handleOpenForm}
        allNames={allNames}
        setAllNames={setAllNames}
      />
      {flag ? (
        <Grid container>
          <Transactions
            flag={flag}
            allNames={allNames}
            items={items}
            setItems={setItems}
            inputGraphConfig={inputGraphConfig}
            inputGraphData={inputGraphData}
            setInputGraphConfig={setInputGraphConfig}
            setInputGraphData={setInputGraphData}
          />
          <Graph
            inputGraphConfig={inputGraphConfig}
            GraphData={inputGraphData}
            GraphHeader="Transactions Graph"
          />
        </Grid>
      ) : null}
    </div>
  );
}

export default App;

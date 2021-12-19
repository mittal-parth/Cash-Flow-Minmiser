import React, { useState } from "react";
import "./App.css";
import { Grid } from "@material-ui/core";

import Graph from "./components/Graph";
import Names from "./components/Names";
import Transactions from "./components/Transactions";
import TransactionTable from "./components/TransactionTable";
import OutputGraph from "./components/OutputGraph";

function App() {
  const [flag, setFlag] = useState(false);
  const [allNames, setAllNames] = useState([]);
  const [inputGraphData, setInputGraphData] = useState({});
  const [outputList, setOutputList] = useState([]);
  const [outputGraphData, setOutputGraphData] = useState({});
  const [graphConfig, setGraphConfig] = useState({});

  const [items, setItems] = useState([]);

  const handleOpenForm = () => {
    if (allNames.length > 1) {
      setFlag(!false);
    }
    else {
      alert("Atleast two people must be entered.")
    }
  };

  return (
    <div className="App">
      <Names
        flag={flag}
        handleOpenForm={handleOpenForm}
        allNames={allNames}
        setAllNames={setAllNames}
      />
      {flag ? (
        <>
          <Grid container>
            <Transactions
              flag={flag}
              allNames={allNames}
              items={items}
              setItems={setItems}
              inputGraphData={inputGraphData}
              setInputGraphData={setInputGraphData}
              setOutputList={setOutputList}
              setOutputGraphData={setOutputGraphData}
              setGraphConfig={setGraphConfig}
            />
            <Graph
              graphData={inputGraphData}
              graphHeader="Transactions Graph"
              graphConfig={graphConfig}
            />
          </Grid>
          {outputList && outputList.length ? (
            <Grid container>
              <Grid item xs={12} md={6}>
                <div className="form">
                  <TransactionTable isInput={false} items={outputList} tableHeader="Simplified Transactions"/>
                </div>
              </Grid>
              <OutputGraph
                graphData={outputGraphData}
                graphHeader={"Simplified Graph"}
                graphConfig={graphConfig}
              />
            </Grid>
          ) : null}
        </>
      ) : null}
    </div>
  );
}

export default App;

import { useState } from "react";
import { Grid } from "@material-ui/core";
import TransactionTable from "./TransactionTable";
import Button from "./Button";
import Expense from "../classes/expense";
import { generateNodes, generateLinks } from "../utils/graphConfig";
import { minimiseCashFlow } from "../utils/minimiseCashFlow";
import {config} from "../utils/graphConfig"

const Transactions = (props) => {

  const [finalValues, setFinalValues] = useState({
    person1: "",
    person2: "",
    amount: "",
  });

  const handleFinalChange = (name) => (event) => {
    setFinalValues({ ...finalValues, [name]: event.target.value });
  };

  function addValues() {
    if (
      finalValues["person1"] !== "" &&
      finalValues["person2"] !== "" &&
      finalValues["amount"] !== ""
    ) {
      props.setItems([...props.items, finalValues]);
    } else {
      alert("Enter all Fields");
    }
    setFinalValues({
      ...finalValues,
      person1: "",
      person2: "",
      amount: "",
    });
  }

  function handleTransactionDataSubmit() {
    const data = {
      nodes: generateNodes(props.allNames),
      links: generateLinks(props.items),
    };

    props.setInputGraphData(data);
    props.setGraphConfig(config);
  }

  function minimiseCash() {
    const input = [];
    for (let item of props.items) {
      input.push(
        new Expense(item.person1, item.person2, parseInt(item.amount))
      );
    }
    const output = minimiseCashFlow(input);

    props.setOutputList(output);
    props.setOutputGraphData({
      nodes: generateNodes(props.allNames),
      links: generateLinks(output),
    });
  };

  return (
    <Grid item xs={12} md={6}>
      
      <div className="form">
        {props.flag && (
          <TransactionTable
            isInput = {true}
            items={props.items}
            allNames={props.allNames}
            addValues={addValues}
            finalValues={finalValues}
            handleFinalChange={handleFinalChange}
            tableHeader = "Input Transactions"
          />
        )}
      </div>

      {props.items && props.items.length ? (
        <div className="form-names">
          <Button
            variant="contained"
            color="primary"
            onClick={handleTransactionDataSubmit}
            text="Build Graph"
          />

          <Button
            variant="contained"
            color="secondary"
            onClick={minimiseCash}
            text="Simplify Settlements"
          />
        </div>
      ) : null}
    </Grid>
  );
};

export default Transactions;

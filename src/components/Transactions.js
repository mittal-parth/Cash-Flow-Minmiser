import { useState } from "react";
import { Grid } from "@material-ui/core";
import TransactionTable from "./TransactionTable";
import Button from "./Button";
import { generateNodes, generateLinks, config } from "../utils/GraphConfig";

const Transactions = (props) => {
  // const [items, setItems] = useState([]);

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
    props.setInputGraphConfig(config);
  }
  return (
    <Grid item xs={12} md={6}>
      <div>
        <h4>Transactions</h4>
      </div>
      <div className="form">
        {props.flag && (
          <TransactionTable
            items={props.items}
            allNames={props.allNames}
            addValues={addValues}
            finalValues={finalValues}
            handleFinalChange={handleFinalChange}
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
            onClick={props.splitwiseTransactions}
            text="Simplify Settlements"
          />
        </div>
      ) : null}
    </Grid>
  );
};

export default Transactions;

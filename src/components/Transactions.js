import { useState } from "react";
import { Grid } from "@material-ui/core";
import TransactionTable from "./TransactionTable";
import Button from "./Button";

const Transactions = ({
  flag,
  handleTransactionDataSubmit,
  splitwiseTransactions,
  allNames,
}) => {
  const [items, setItems] = useState([]);

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
      setItems([...items, finalValues]);
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
  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <div>
          <h4>Transactions</h4>
        </div>
        <div className="form">
          {flag && (
            <TransactionTable
              items={items}
              allNames={allNames}
              addValues={addValues}
              finalValues={finalValues}
              handleFinalChange={handleFinalChange}
            />
          )}
        </div>

        {items && items.length ? (
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
              onClick={splitwiseTransactions}
              text="Simplify Settlements"
            />
          </div>
        ) : null}
      </Grid>
    </Grid>
  );
};

export default Transactions;

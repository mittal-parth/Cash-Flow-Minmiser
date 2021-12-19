import { TableContainer, Paper, Table, TableBody } from "@material-ui/core";
import TableHeader from "./TableHeader";
import TransactionInputRow from "./TransactionInputRow";
import TransactionOutput from "./TransactionOutput";

const TransactionTable = (props) => {
  return (
    <>
      <div>
        <h4>{props.tableHeader}</h4>
      </div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHeader isInput={props.isInput} />
          <TableBody>
            {props.items.length > 0 &&
              props.items.map((row) => <TransactionOutput row={row} />)}
            {props.isInput ? (
              <TransactionInputRow
                allNames={props.allNames}
                addValues={props.addValues}
                finalValues={props.finalValues}
                handleFinalChange={props.handleFinalChange}
              />
            ) : null}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TransactionTable;

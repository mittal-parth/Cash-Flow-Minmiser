import { TableContainer, Paper, Table, TableBody } from "@material-ui/core";
import TableHeader from "./TableHeader";
import TransactionInputRow from "./TransactionInputRow";
import TransactionOutput from "./TransactionOutput";

const TransactionTable = (props) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="siimple table">
        <TableHeader />
        <TableBody>
          {props.items.length > 0 &&
            props.items.map((row) => <TransactionOutput row={row} />)}
          <TransactionInputRow
            allNames={props.allNames}
            addValues={props.addValues}
            finalValues={props.finalValues}
            handleFinalChange={props.handleFinalChange}
          />
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TransactionTable;

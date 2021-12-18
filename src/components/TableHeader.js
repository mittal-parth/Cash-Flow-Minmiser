import { TableHead, TableRow, TableCell } from "@material-ui/core";

const TableHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell align="center">Payer</TableCell>
        <TableCell align="center">Payee</TableCell>
        <TableCell align="center">Amount</TableCell>
        <TableCell align="center">Add</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;

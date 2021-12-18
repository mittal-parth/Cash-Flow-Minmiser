import { TableCell, TableRow } from "@material-ui/core";
import React from "react";

const TransactionOutput = ({ row }) => {
  return (
    <TableRow key={row.name}>
      <TableCell component="th" align="center" scope="row">
        {row.person1}
      </TableCell>
      <TableCell align="center">{row.person2}</TableCell>
      <TableCell align="center">{row.amount}</TableCell>
    </TableRow>
  );
};

export default TransactionOutput;

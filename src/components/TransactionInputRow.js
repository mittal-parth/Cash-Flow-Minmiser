import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TableCell,
  TableRow,
  TextField,
} from "@material-ui/core";
import Button from "./Button";

const TransactionInputRow = (props) => {
  const { person1, person2, amount } = props.finalValues;
  return (
    <TableRow>
      <TableCell align="center">
        <FormControl>
          <InputLabel>Payer</InputLabel>
          <Select value={person1} onChange={props.handleFinalChange("person1")}>
            {props.allNames.map((item) => (
              <MenuItem value={item.name}>{item.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </TableCell>

      <TableCell align="center">
        <FormControl>
          <InputLabel>Payee</InputLabel>
          <Select value={person2} onChange={props.handleFinalChange("person2")}>
            {props.allNames.map((item) =>
              person1 !== item.name ? (
                <MenuItem value={item.name}>{item.name}</MenuItem>
              ) : (
                <></>
              )
            )}
          </Select>
        </FormControl>
      </TableCell>

      <TableCell align="center">
        <FormControl>
          <TextField
            id="standard-number"
            label="Amount"
            type="number"
            value={amount}
            placeholder="Enter Amount"
            onChange={props.handleFinalChange("amount")}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </FormControl>
      </TableCell>

      <TableCell align="center">
        <Button
          variant="outlined"
          color="primary"
          text="Add"
          onClick={(e) => props.addValues()}
        />
      </TableCell>
    </TableRow>
  );
};

export default TransactionInputRow;

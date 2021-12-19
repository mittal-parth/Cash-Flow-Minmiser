import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
} from "@material-ui/core";

const NameList = ({ allNames }) => {
  return (
    <div className="name-list">
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Names</TableCell>
            </TableRow>
          </TableHead>
          {allNames.map((item, index) => (
            <TableRow key={index}>
              <TableCell align="center"> {item.name}</TableCell>
            </TableRow>
          ))}
        </Table>
      </TableContainer>
    </div>
  );
};

export default NameList;

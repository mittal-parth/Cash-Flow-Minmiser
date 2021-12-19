import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  TableBody,
} from "@material-ui/core";

const NameList = ({ allNames }) => {
  return (
    <div className="name-list">
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow key="names">
              <TableCell align="center">Names</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allNames.map((item, index) => (
              <TableRow key={index}>
                <TableCell align="center"> {item.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default NameList;

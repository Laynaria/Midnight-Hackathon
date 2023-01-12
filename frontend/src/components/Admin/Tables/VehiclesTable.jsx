import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../../../assets/css/admin/Admin.css";

const isAvailable = (available) => {
  if (available) {
    return "Yes";
  }
  return "No";
};

export default function VehiclesTable() {
  const [rows, setRows] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:5501/car")
      .then((response) => response.json())
      .then((data) => {
        setRows(data[0]);
      });
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 550 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Type</TableCell>
            <TableCell align="left">Brand</TableCell>
            <TableCell align="left">Model</TableCell>
            <TableCell align="left">Immat</TableCell>
            <TableCell align="left">Available</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows
              .slice(0,5)
              .map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.type}</TableCell>
              <TableCell align="left">{row.brand}</TableCell>
              <TableCell align="left">{row.model}</TableCell>
              <TableCell align="left">{row.matriculation}</TableCell>
              <TableCell align="left">{isAvailable(row.available)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

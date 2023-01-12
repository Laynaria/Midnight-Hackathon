import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../../../assets/css/admin/Admin.css";



export default function MaintenanceTable() {
  const [rows, setRows] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:5501/user")
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
            <TableCell>Firstname</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Address</TableCell>
            <TableCell align="left">City</TableCell>
            <TableCell align="left">Phone</TableCell>
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
              <TableCell>{row.firstname}</TableCell>
              <TableCell align="left">{row.lastname}</TableCell>
              <TableCell align="left">{row.address}</TableCell>
              <TableCell align="left">{row.city}</TableCell>
              <TableCell align="left">{row.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

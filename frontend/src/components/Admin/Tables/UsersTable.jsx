import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../../../assets/css/admin/Admin.css";

function createData({ id, firstname, name, address, city, phone }) {
  return { id, firstname, name, address, city, phone };
}

const rows = [
  createData({
    id: 1,
    firstname: "John",
    name: "Doe",
    address: "123 Main St",
    city: "Anytown",
    phone: "555-555-5555",
  }),
  createData({
    id: 2,
    firstname: "Jane",
    name: "Smith",
    address: "456 Park Ave",
    city: "Metropolis",
    phone: "555-555-5556",
  }),
  createData({
    id: 3,
    firstname: "Bob",
    name: "Johnson",
    address: "789 Elm St",
    city: "Smallville",
    phone: "555-555-5557",
  }),
  createData({
    id: 4,
    firstname: "Alice",
    name: "Williams",
    address: "321 Oak St",
    city: "Bigcity",
    phone: "555-555-5558",
  }),
  createData({
    id: 5,
    firstname: "Charlie",
    name: "Brown",
    address: "654 Pine St",
    city: "Springfield",
    phone: "555-555-5559",
  }),
];

export default function MaintenanceTable() {
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
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.firstname}</TableCell>
              <TableCell align="left">{row.name}</TableCell>
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

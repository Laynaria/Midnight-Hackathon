import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../../../assets/css/admin/Admin.css";

function createData({ id, type, model, immat, duration, cost }) {
  return { id, type, model, immat, duration, cost };
}

const rows = [
  createData({
    id: 1,
    type: "Berline",
    model: "508",
    immat: "AA123BB",
    duration: "5 days",
    cost: "45",
  }),
  createData({
    id: 1,
    type: "Berline",
    model: "508",
    immat: "AA123BB",
    duration: "5 days",
    cost: "45",
  }),
  createData({
    id: 1,
    type: "Berline",
    model: "508",
    immat: "AA123BB",
    duration: "5 days",
    cost: "45",
  }),
  createData({
    id: 1,
    type: "Berline",
    model: "508",
    immat: "AA123BB",
    duration: "5 days",
    cost: "45",
  }),
  createData({
    id: 1,
    type: "Berline",
    model: "508",
    immat: "AA123BB",
    duration: "5 days",
    cost: "45",
  }),
];

export default function BookingTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 550 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Type</TableCell>
            <TableCell align="left">Model</TableCell>
            <TableCell align="left">Immat</TableCell>
            <TableCell align="left">Duration</TableCell>
            <TableCell align="left">Cost</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.type}</TableCell>
              <TableCell align="left">{row.model}</TableCell>
              <TableCell align="left">{row.immat}</TableCell>
              <TableCell align="left">{row.duration}</TableCell>
              <TableCell align="left">{row.cost}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

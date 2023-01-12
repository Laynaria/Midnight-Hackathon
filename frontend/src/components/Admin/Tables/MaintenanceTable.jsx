import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../../../assets/css/admin/Admin.css";

function createData({ id, model, immat, intervention, limit }) {
  return { id, model, immat, intervention, limit };
}

const rows = [
  createData({
    id: 1,
    model: "508",
    immat: "AA123BB",
    intervention: "Front tires",
    limit: "14-01-2023",
  }),
  createData({
    id: 2,
    model: "Zoé",
    immat: "CC123DD",
    intervention: "Brakes",
    limit: "31-01-2023",
  }),
  createData({
    id: 3,
    model: "Master",
    immat: "EE123FF",
    intervention: "Drainage",
    limit: "01-02-2023",
  }),
  createData({
    id: 4,
    model: "5008",
    immat: "GG123HH",
    intervention: "Headlights",
    limit: "15-02-2023",
  }),
  createData({
    id: 5,
    model: 500,
    immat: "II123JJ",
    intervention: "Climatisation",
    limit: "15-02-2023",
  }),
];

export default function MaintenanceTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 550 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Model</TableCell>
            <TableCell align="left">Immat</TableCell>
            <TableCell align="left">Intervention</TableCell>
            <TableCell align="left">Limit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.model}</TableCell>
              <TableCell align="left">{row.immat}</TableCell>
              <TableCell align="left">{row.intervention}</TableCell>
              <TableCell align="left">{row.limit}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

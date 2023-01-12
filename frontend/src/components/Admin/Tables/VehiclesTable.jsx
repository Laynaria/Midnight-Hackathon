import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../../../assets/css/admin/Admin.css";

/* function createData({ id, type, brand, model, immat, available }) {
  return { id, type, brand, model, immat, available };
}

 const rows = [
    createData({
      id: 1,
      type: "Berline",
      brand: "Peugeot",
      model: "508",
      immat: "AA123BB",
      available: true,
    }),
    createData({
      id: 2,
      type: "Citadine",
      brand: "Renault",
      model: "Zoé",
      immat: "CC123DD",
      available: true,
    }),
    createData({
      id: 3,
      type: "Utilitaire",
      brand: "Renault",
      model: "Master",
      immat: "EE123FF",
      available: true,
    }),
    createData({
      id: 4,
      type: "SUV",
      brand: "Peugeot",
      model: "5008",
      immat: "GG123HH",
      available: false,
    }),
    createData({
      id: 5,
      type: "Citadine",
      brand: "Fiat",
      model: 500,
      immat: "II123JJ",
      available: false,
    }),
  ];
*/

const isAvailable = (available) => {
  if (available) {
    return "Yes";
  }
  return "No";
};

export default function VehiclesTable() {
  const [rows, setRows] = React.useState([]);

    React.useEffect(() => {
      fetch ("http://localhost:5501/car")
        .then((response) => response.json())
        .then((data) => {
            setRows(data);
            console.log(data);
        }
        )}, []);

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
          {rows.map((row) => (
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

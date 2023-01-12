import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../../../assets/css/admin/Admin.css";
import { Link } from "react-router-dom";
import editButton from "../../../assets/img/editButton.svg";

function createData({ id, type, brand, model, immat, available }) {
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

const isAvailable = (available) => {
  if (available) {
    return "Yes";
  }
  return "No";
};

export default function VehiclesTablePage() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 1100 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>Type</TableCell>
              <TableCell align="left">Brand</TableCell>
              <TableCell align="left">Model</TableCell>
              <TableCell align="left">Immat</TableCell>
              <TableCell align="left">Available</TableCell>
              <TableCell align="left">Autonomy</TableCell>
              <TableCell align="left">Object</TableCell>
              <TableCell align="left">Capacity</TableCell>
              <TableCell align="left">Modify</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.type}</TableCell>
                  <TableCell align="left">{row.brand}</TableCell>
                  <TableCell align="left">{row.model}</TableCell>
                  <TableCell align="left">{row.immat}</TableCell>
                  <TableCell align="left">
                    {isAvailable(row.available)}
                  </TableCell>
                  <TableCell align="left">{row.autonomy}</TableCell>
                  <TableCell align="left">{row.object}</TableCell>
                  <TableCell align="left">{row.capacity}</TableCell>
                  <TableCell align="left">
                    <Link to="/admin/vehicles/:id">
                      <img
                        className="editButton"
                        src={editButton}
                        alt="Edit button"
                      />
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}

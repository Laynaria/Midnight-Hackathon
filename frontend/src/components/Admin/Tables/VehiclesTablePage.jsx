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

const isAvailable = (available) => {
  if (available) {
    return "Yes";
  }
  return "No";
};

export default function VehiclesTablePage() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:5501/car")
      .then((response) => response.json())
      .then((data) => {
        setRows(data[0]);
      });
  }, []);

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
                  <TableCell align="left">{row.matriculation}</TableCell>
                  <TableCell align="left">
                    {isAvailable(row.is_available)}
                  </TableCell>
                  <TableCell align="left">{row.ideal_distance}</TableCell>
                  <TableCell align="left">{row.ideal_object}</TableCell>
                  <TableCell align="left">{row.ideal_places}</TableCell>
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

import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import "./Table.scss";

export default function StickyHeadTable({
  data,
  label,
  type,
  totalRecords,
  onRecordClick,
}) {
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
    <Paper sx={{
      width: "100%",
      overflow: "hidden",
      borderRadius: 0,
    }}>
      <TableContainer sx={{ maxHeight: 'calc(100vh - 220px)' }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell className="tbl-cell hdr-cell" align={"center"}>{"ID"}</TableCell>
              <TableCell className="tbl-cell hdr-cell">{"Name"}</TableCell>
              <TableCell className="tbl-cell hdr-cell" align={"center"}>{"State"}</TableCell>
              <TableCell className="tbl-cell hdr-cell" align={"center"}>{"Type"}</TableCell>
              <TableCell className="tbl-cell hdr-cell" align={"center"}>{label}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              ?.map((row) => {
                return (
                  <TableRow
                    onClick={() => onRecordClick(row)}
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.venueId}
                  >
                    <TableCell className="tbl-cell" align={"center"}>{row?.venueId}</TableCell>
                    <TableCell className="tbl-cell">{row?.venueName}</TableCell>
                    <TableCell className="tbl-cell" align={"center"}>{row?.venueState}</TableCell>
                    <TableCell className="tbl-cell" align={"center"}>{row?.venueType}</TableCell>
                    <TableCell className="tbl-cell" align={"center"}>{row?.[type]}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={totalRecords}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import TableHead from "@mui/material/TableHead";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(
  Account_Number,
  bet_amount,
  sports_name,
  tournament_name,
  bet_type,
  bet_date_time
) {
  return {
    Account_Number,
    bet_amount,
    sports_name,
    tournament_name,
    bet_type,
    bet_date_time,
  };
}

const rows = [
  createData("Cupcake", 305, 3.7, 1, 1, 1),
  createData("Donut", 452, 25.0, 1, 1, 1),
  createData("Eclair", 262, 16.0, 1, 1, 1),
  createData("Frozen yoghurt", 159, 6.0, 1, 1, 1),
  createData("Gingerbread", 356, 16.0, 1, 1, 1),
  createData("Honeycomb", 408, 3.2, 1, 1, 1),
  createData("Ice cream sandwich", 237, 9.0, 1, 1, 1),
  createData("Jelly Bean", 375, 0.0, 1, 1, 1),
  createData("KitKat", 518, 26.0, 1, 1, 1),
  createData("Lollipop", 392, 0.2, 1, 1, 1),
  createData("Marshmallow", 318, 0, 1, 1, 1),
  createData("Nougat", 360, 19.0, 1, 1, 1),
  createData("Oreo", 437, 18.0, 1, 1, 1),
].sort((a, b) => (a.bet_amount < b.bet_amount ? -1 : 1));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export default function CustomPaginationActionsTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHead>
          <TableRow
            sx={{
              "& th": {
                fontSize: "1rem",
                color: "white",
                backgroundColor: "green",
              },
            }}
          >
            <TableCell>Account Number</TableCell>
            <TableCell align="right">Bet Amount</TableCell>
            <TableCell align="right">Sports Name</TableCell>
            <TableCell align="right">Tournament Name</TableCell>
            <TableCell align="right">Bet Type</TableCell>
            <TableCell align="right">Bet Date & Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.Account_Number}>
              <TableCell component="th" scope="row">
                {row.Account_Number}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.bet_amount}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.sports_name}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.tournament_name}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.bet_type}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.bet_date_time}
              </TableCell>
            </TableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  "aria-label": "rows per page",
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
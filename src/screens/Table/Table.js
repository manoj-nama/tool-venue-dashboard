import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import moment from "moment";
import "./Table.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { httpAuth } from "../../utils/http-utility";

const columns = [
  {
    field: "account_number",
    headerName: "Account Number",
    width: 200,
    minWidth: 180,
    maxWidth: 300,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "bet_amount",
    headerName: "Bet Amount",
    width: 220,
    minWidth: 180,
    maxWidth: 300,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "sport_name",
    headerName: "Sports Name",
    width: 200,
    minWidth: 130,
    maxWidth: 250,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "tournament_name",
    headerName: "Tournament Name",
    width: 170,
    minWidth: 150,
    maxWidth: 220,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "bet_type",
    headerName: "Bet Type",
    width: 150,
    minWidth: 150,
    maxWidth: 220,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "bet_date_and_time",
    headerName: "Bet Date & Time",
    headerClassName: "super-app-theme--header",
    width: 220,
  },
];

export default function DataTable() {
  const [betData, setBetData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchdata = async () => {
      const res = await httpAuth.get(
        `http://13.211.126.67:3000/v1/service-venue/venue-info/${id}`
      );
      setBetData(res.data.data);
    };
    fetchdata();
  }, []);
  const tableData = betData.map((row, index) => {
    return {
      betId: index,
      account_number: row?.account_number,
      bet_amount: row?.bet_amount,
      bet_date_and_time: moment(row?.bet_date_and_time).format("lll"),
      bet_type: row?.bet_type,
      sport_name: row?.sport_name,
      tournament_name: row?.tournament_name,
    };
  });

  return (
    <div style={{ height: "630px", width: "100%" }}>
      <DataGrid
        getRowId={(row) => row.betId}
        rows={tableData}
        columns={columns}
        pageSize={20}
        rowsPerPageOptions={[20]}
        showMenu={true}
        className="super-app-theme"
        sx={{
          ".MuiDataGrid-columnSeparator": {
            display: "none",
          },
          "&.MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-columnHeader:last-child": {},
        }}
      />
    </div>
  );
}

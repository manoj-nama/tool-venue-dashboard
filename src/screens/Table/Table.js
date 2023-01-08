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
    flex: 1,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "bet_amount",
    headerName: "Bet Amount",
    flex: 1,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "sport_name",
    headerName: "Sports Name",
    flex: 1,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "bet_type",
    headerName: "Bet Type",
    flex: 1,
    headerClassName: "super-app-theme--header",
  },
  {
    field: "bet_date_and_time",
    headerName: "Bet Date & Time",
    headerClassName: "super-app-theme--header",
    flex: 1,
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
    };
  });

  return (
    <div style={{ height: "630px" }}>
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

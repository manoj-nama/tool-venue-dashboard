import React from "react";
import Slider, { SliderProps } from "@mui/material/Slider";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { Link } from "@mui/material";
import "./Charts.css";
import { createTheme } from "@mui/material/styles";
import LinearProgress from "@mui/material/LinearProgress";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#0971f1",
      darker: "#053e85",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
  },
});

function Charts(props) {
  let max = props?.data?.reduce(function (prev, current) {
    if (+current?.[props.keyName] > +prev?.[props.keyName]) {
      return current;
    } else {
      return prev;
    }
  });

  return (
    <div className="line">
      <Box sx={{ width: 330 }} className="box">
        <Typography align="center" variant="h6" className="typo">
          Top 5 Venues with Most{" "}
        </Typography>

        <Typography
          display="block"
          align="center"
          variant="h6"
          className="typo"
        >
          {props.name}
        </Typography>

        {props?.data?.map((user) => (
          <Box>
            <Typography
              display="block"
              align="left"
              variant="h7"
              className="typo"
              color={props.textColor}
            >
              {user?.active_users}
            </Typography>
            <Typography
              display="block"
              align="left"
              variant="h10"
              className="typo"
              color={props.textColor}
            >
              {user.venueName}
            </Typography>
            <LinearProgress
              color={props.color}
              style={{ paddingBottom: 2, marginBottom: 2 }}
              variant="determinate"
              value={parseInt(
                (user?.active_users / parseInt(max[props?.keyName])) * 100
              )}
            />
          </Box>
        ))}
      </Box>

      <Link
        href="/venue"
        sx={{
          bgcolor: "green",
          color: "white",
        }}
        style={{ marginTop: 10 }}
        className="textven"
        underline="none"
      >
        Show More{" "}
      </Link>
    </div>
  );
}

export default Charts;

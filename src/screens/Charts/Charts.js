import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { Link } from "@mui/material";
import "./Charts.scss";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ProgressBar from "../Components/progressiveBar";
import InfoIcon from "@mui/icons-material/Info";
import Tooltip from "@mui/material/Tooltip";
import { useNavigate } from "react-router-dom";

const theme2 = createTheme({
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          color: "black",
          fontSize: "13px",
          border: "1px solid black",
        },
      },
    },
  },
});

function Charts({
  data,
  keyName,
  name,
  textColor,
  display$,
  displayHr,
  route,
  maxValueKey,
}) {
  const navigate = useNavigate();
  let max = parseInt(data?.[0]?.[maxValueKey]);
  return (
    <div className="chart-container">
      <div className="label">{name}
        <ThemeProvider theme={theme2}>
          <Tooltip
            className="toolTip"
            componentsProps={{
              tooltip: {
                sx: {
                  bgcolor: "common.white",
                  "& .MuiTooltip-arrow": {
                    color: "common.white",
                  },
                },
              },
            }}
            title={`Top 5 venues with most ${name}`}
          >
            <InfoIcon sx={{ backgroundColor: "white", color: "grey" }} />
          </Tooltip>
        </ThemeProvider>
      </div>
      <div className="chart">
        <Box sx={{ width: 320 }} className="box">
          {data?.map((item) => (
            <Box className="chart-row" key={item[keyName]}>
              <Typography
                display="block"
                align="left"
                variant="h7"
                className="metric-value"
                color={textColor}
              >
                <span className="prefix" style={{ display: display$ }}>$</span>
                {
                  display$ !== "none" && displayHr !== "none"
                    ? parseFloat(item?.[maxValueKey]).toFixed(2)
                    : item?.[maxValueKey]
                }
              </Typography >
              <Typography
                display="block"
                align="left"
                variant="h10"
                className="metric-value-secondary"
                color={textColor}
                onClick={() => { navigate(`/venue-details/${item.venueId}`) }}
              >
                {item?.venueName}
              </Typography>
              <ProgressBar
                label="Full progressbar"
                className="progress-bar"
                visualParts={[
                  {
                    percentage: `${parseInt(
                      (item?.[maxValueKey] / parseInt(max)) * 100
                    )}%`,
                    color: textColor,
                  },
                ]}
              />
            </Box >
          ))
          }
        </Box >
      </div >

      <Link
        href={route}
        sx={{
          bgcolor: "green",
          color: "white",
        }}
        style={{ marginTop: 10 }}
        className="cta-button"
        underline="none"
      >
        Show More{" "}
      </Link>
    </div >
  );
}

export default Charts;

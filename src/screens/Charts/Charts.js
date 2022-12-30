import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { Link } from "@mui/material";
import "./Charts.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ProgressBar from "../Components/progressiveBar";
import InfoIcon from "@mui/icons-material/Info";
import Tooltip from "@mui/material/Tooltip";

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
const theme2 = createTheme({
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: "white",
          color: "black",
          fontSize:"10px",
          border: "1px solid #dadde9",
        },
      },
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
      <div className="line1">
        <Box sx={{ width: 330 }} className="box">
          
          <Typography
            display="block"
            align="center"
            variant="h6"
            className="typo"
          >
            Most {""}
            {props.name}

         
         
          <ThemeProvider theme={theme2}>
              <Tooltip
                className="toolTip"
                wrapperStyle={{ backgroundColor: 'white'}}
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
                title={`Top 5 venues with most ${props.name}`}

              >
                {/* <IconButton  > */}
                <InfoIcon className="infoIcon" />
                {/* </IconButton> */}
              </Tooltip>
            </ThemeProvider>
         
          </Typography>

          {props?.data?.map((user) => (
            <Box className="box1">
              <Typography
                display="block"
                align="left"
                variant="h7"
                className="typo11"
                color={props.textColor}
              ><span className="span1">$</span>
                {user?.[props.keyName]}
                <span className="span">/hr</span>
              </Typography>
              <Typography
                display="block"
                align="left"
                variant="h10"
                className="typo12"
                color={props.textColor}
              >
                {user?.venueName}
              </Typography>
              <ProgressBar
                label="Full progressbar"
                className="typo13"
                visualParts={[
                  {
                    percentage: `${parseInt(
                      (user?.[props.keyName] / parseInt(max[props?.keyName])) *
                        100
                    )}%`,
                    color: props.textColor,
                  },
                ]}
              />
            </Box>
          ))}
        </Box>
      </div>

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

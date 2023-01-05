import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({ SelectedMatric, selectedTabOnPageOpen }) {
  console.log("tt-->", selectedTabOnPageOpen);
  const [value, setValue] = React.useState(selectedTabOnPageOpen);

  const handleChange = (event, newValue) => {
    //console.log(event.target.value,"value-",newValue);
    setValue(newValue);
    SelectedMatric(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Active Users" {...a11yProps(0)} />
          <Tab label="Most Bets" {...a11yProps(1)} />
          <Tab label="Most Amount Spent" {...a11yProps(2)} />
        </Tabs>
      </Box>
    </Box>
  );
}

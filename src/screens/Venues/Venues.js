

import React from 'react'
import { Typography } from "@mui/material";

import "./Venues.css";
import img from "./logo.png";
import Charts from "../Charts/Charts.js";
import Date from "../Date/Date.js";
import SearchIcon from "@mui/icons-material/Search";

//import IconButton from '@mui/material/IconButton';
import InputField from "@mui/material/InputBase";

const Venues = () => {
  const onChange = (ranges) => {
    console.log(ranges);
  };
  return (
    <div className="container">
      <div className="test">
        <div className="imagebg">
          <img src={img} className="image" alt="logo"></img>
        </div>
        <h2>Venues with Most Users</h2>
        <br />

        <div className="date">
          <div className="date2">
            <div className="date3">
            <InputField
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search for Venues"
              inputProps={{ "aria-label": "search venues" }}
            />

            <SearchIcon sx={{ backgroundColor: "white", color: "grey" }} />
            </div>
            
          </div>

          <div className="date1">
            <Date onChange={onChange} />
          </div>
        </div>

      </div>

      <div className="userpage1">
        
      </div>
    </div>
  );
};

            

export default Venues;




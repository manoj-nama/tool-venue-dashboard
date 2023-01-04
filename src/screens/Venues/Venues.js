import React from 'react'
import { Typography } from "@mui/material";
import Select from 'react-select';
import "./Venues.css";
import img from "./logo.png";
import Charts from "../Charts/Charts.js";
import Date from "../Date/Date.js";
import SearchIcon from "@mui/icons-material/Search";

//import IconButton from '@mui/material/IconButton';
import InputField from "@mui/material/InputBase";

const Venues = () => {
  const actions = [
    { label: "Ascending", value: 1 },
    { label: "Descending", value: 2 }
  ];
  
  return (
    <div className="container">
      <div className="test">
        <div className="imagebg">
          <img src={img} className="image" alt="logo"></img>
        </div>
        <h2>Venues with Most Users</h2>
        

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
            <br/>
            <div class="dropdown">
              <span>Sort by</span>
              <div className="row">
                
                <div className="col">
                <Select 
                defaultValue={ {label: "Ascending", value: 1}}
                options={ actions } 
                label="Sort By" />
              </div>
      
              </div>
            </div>
            
          </div>

          <div className="date1">
            
            <h3>Select date Range</h3>
           
            <div className="datech">
              <Date  />
            </div>
            
          </div>

          

        </div>

      </div>

      <div className="userpage1">
        
      </div>
    </div>
  );
};

            

export default Venues;




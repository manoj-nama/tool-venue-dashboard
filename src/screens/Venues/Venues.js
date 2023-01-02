

import React from 'react'
import "./Venues.css";
import img from "./logo.png";
import Charts from "../Charts/Charts.js";
import Date from "../Date/Date.js";
import { Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { Select, MenuItem } from '@mui/material';

//import IconButton from '@mui/material/IconButton';
import InputField from '@mui/material/InputBase';

function Venues() {
  return (
    <div className='container'>
        <div className='test'>
          <div className="imagebg">
            <img src={img} className="image" alt="logo"></img>  
          </div>
          <h2>Venues with Most Users</h2>
          <br/>

          <div className="date">
            <div className="date2">
            <InputField
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search Venues"
              inputProps={{ 'aria-label': 'search venues' }}
              
            />

            <SearchIcon  sx={{ backgroundColor: "white", color: "grey" }} />
             
            </div>
             
            <div className="date1">
               <Date/>
            </div>
          </div>
          <br/>
          
          <div className="select">
          
          </div>
          </div>

          
        <br/>


        <div className="userpage1">
          <Charts
          name="Most Users"
          
          keyName={"active_users"}
          color={"warning"}
          textColor={"#ed6c03"}
        />
            
        </div>
      
    </div>
  )
}



            

export default Venues




import React from 'react'
import "./Venues.css";
import img from "./logo.png";
import Charts from "../Charts/Charts.js";
import Date from "../Date/Date.js";
import { Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { Select, MenuItem } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

//import IconButton from '@mui/material/IconButton';
import InputField from '@mui/material/InputBase';

function Venues() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
    
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
          
          <div className="sort">
            <div className='sort1'>
            <InputLabel className="inpu">Sort By </InputLabel>

            <FormControl  size="small" variant="standard" className="typos">

                <Select
                  labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Sort By"
                    onChange={handleChange}
                    >
                <MenuItem sx={{color:"gray"}} value=""><em>None</em></MenuItem>
                <MenuItem sx={{color:"gray"}}value={"Ascending"}>Ascending</MenuItem>
                <MenuItem sx={{color:"gray"}}value={"Descending"}>Descending</MenuItem>
                </Select>
              </FormControl>
            </div>
            
            <div className='sort2'>
              
            </div>
          
          </div>
          <div>

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



            

export default Venues;


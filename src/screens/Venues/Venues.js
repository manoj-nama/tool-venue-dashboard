import React from 'react'
import "./Venues.css";
import img from "./logo.png";
import SearchIcon from '@mui/icons-material/Search';

function Venues() {
  return (
    <div className='container'>
        <div className='test'>
        <div className="imagebg">
            <img src={img} className="image"></img>  
        </div>
        <h2>Venues with Most Users</h2>
        <SearchIcon>
        
        </SearchIcon>

        
        </div>
        <div>

        </div>
      
    </div>
  )
}

export default Venues

/*import React from 'react'
import "./Venues.css";
import img from "./logo.png";
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

function Venues() {
  return (
    <div className='container'>
        <div className='test'>
        <div className="imagebg">
            <img src={img} className="image"></img>  
        </div>
        <h2>Venues with Most Users</h2>
        <SearchIcon>
        <InputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
        </SearchIcon>

        
        </div>
        <div>

        </div>
      
    </div>
  )
}

export default Venues*/

import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import "./Search.css"

function App() {
  return (
    
        <div className="search">

            <div className='searchlist'>
            <InputBase
              placeholder="Search for Venue"
              inputProps={{ 'aria-label': 'search' }}
            />
            </div>
            <div className="searchIcon">
              <SearchIcon />
            </div>
          </div>
        
  
  
  );
}
export default App;
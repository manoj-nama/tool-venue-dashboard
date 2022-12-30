import React from 'react'
import "./Venues.css";
import img from "./logo.png";
//import Charts from "../Charts/Charts.js";
import Search from "../Search/Search";
import Date from "../Date/Date";

function Venues() {
  return (
    <div className='container'>
        <div className='test'>
        <div className="imagebg">
            <img src={img} className="image" alt="logo here"></img>  
        </div>
        <h2>Venues with Most Users</h2>

        <div className="date">
            <div className="date1">
              <Search/>
            </div>
            <div className="date1">
              
                
              
            </div>
        </div>

        </div>
        <br/>

        
        <div className="userpage1">
        
        <Date/>
        </div>

        
        
      
    </div>
  )
}

export default Venues



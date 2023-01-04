import React from 'react'
import img from "../Home/logo.png";
import "./Details.css";
import Maps from "../Maps/Maps";

function Details() {
  return (
    <div className="container">
      <div className="test">
        <div className="imagebg">
          <img src={img} className="image" alt="logo"></img>
        </div>
        <h2>Venues with Most Users</h2>
        </div>
        <div className='lowerview'>
            <div className='table'>
            <h1>jbj</h1>
            </div>

            <div className='map'>
                
                <Maps />
            </div>

        </div>
    </div>
  )
}

export default Details

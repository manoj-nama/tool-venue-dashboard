import React from 'react'
import img from "../Home/logo.png";
import "./Details.css";
import Maps from "../Maps/Maps";
import Table from "../Table/Table"

function Details() {
  return (
    <div className="containers">
      <div className="test">
        <div className="imagebg">
          <img src={img} className="image" alt="logo"></img>
        </div>
        <h2>Venues with Most Users</h2>
        <div className='info'>
          <h2 className='h2tag'>
            Venue:Clayton
            State:VIC
          </h2>
          
        </div>
        </div>
        <div className='lowerview'>
            <div className='table'>
            <Table/>
            </div>

            <div className='map'>
                
                <Maps />
            </div>

        </div>
    </div>
  )
}

export default Details

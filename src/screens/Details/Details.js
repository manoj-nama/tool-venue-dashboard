import React from 'react'
import img from "../Home/logo.svg";
import "./Details.css";
import Maps from "../Maps/Maps";
import Table from "../Table/Table"

function Details() {
  return (
    <div className="containers">
      <div className="test">
      <div className="section">
      </div>
      <div className="header">
        <div className="logo">
          <img src={img} className="image" alt="logo here"></img>
        </div>
      </div>
      <h2 className="h2">Venues with Most Users</h2>
        
        {/* <div className="imagebg">
          <img src={img} className="image" alt="logo"></img>
        </div> */}
        
        </div>
        <div className='lowerview'>
            <div className='table'>
            <Table/>
            </div>

            <div className='map'>
                <div className="active">
               <div className='info'>
          <h2 className='h2tag'>
            Venue:Clayton
            State:VIC
          </h2>
          
        </div>

        <div className='info'>
          <h2 className='h2tag'>
            Active Users
            Number
          </h2>
          
        </div>
                </div>

               <div className='map'>
               <Maps />
               </div>
            </div>

        </div>
    </div>
  )
}

export default Details

import * as React from 'react';
import "./Home.css";
import img from "./logo.png"
import Charts from "../Charts/Charts.js"

const Home = () => {
    return(
        <div className="container">
           <div className='test'>
            <div className="imagebg">
            <img src={img} className="image"></img>
              
            </div>
              <h1>Top Venues</h1>
              <div className='Users1'>
                <div className='rectangle'>
                    <p>Number</p>
                </div>
                <div className='border'></div>
                <div className='rectangle'>
                    <p>Number</p>
                </div>
                </div>
                <div className='Users1'>
                    <h2 className="act">Active Users</h2>
                    <div className='border1'></div>
                    <h2>Number of Venues</h2>
                </div>
            </div>
  
            <br/>
            <div className='Users'>
               
              <Charts name="Users"/>
              <Charts name="Bets Placed/Hr"/>
              <Charts name="Amount Placed on Bets/Hr"/>
            </div>
        
        </div>
    )

}

export default Home;

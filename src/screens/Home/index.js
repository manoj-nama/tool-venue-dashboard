import * as React from 'react';
import "./Home.css";
import img from "./logoo.png"
import Charts from "../Charts/Charts.js"

const Home = () => {
    return(
        <div>
           <div className='test'>
              <img src={img} className="image"></img>
              <h1>Top Venues</h1>
              <div className='Users'>
                <div className='rectangle'>
                    <p>Number</p>
                </div>
                <div className='border'></div>
                <div className='rectangle'>
                    <p>Number</p>
                </div>
                </div>
                <div className='Users'>
                    <h2>Active Users</h2>
                    <div className='border1'></div>
                    <h2>Number of Venues</h2>
                </div>
            </div>
  
        <div className='Users'>
            <Charts name="Users"/>
            <Charts name="Bets"/>
            <Charts name="Amount"/>
        </div>
        
        </div>
    )

}

export default Home;

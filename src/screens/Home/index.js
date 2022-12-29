import * as React from "react";
import "./Home.css";
import img from "./logo.png";
import Charts from "../Charts/Charts.js";
import { useEffect } from "react";
import { getVenuStats } from "../../services";

const Home = () => {
  const [venuStats, setVenuStats] = React.useState();

  const getSatats = () => {
    let res = getVenuStats();
    setVenuStats(res);
  };

  useEffect(() => {
    getSatats();
  }, []);

  return (
    <div className="container">
      <div className="test">
        <div className="imagebg">
          <img src={img} className="image" alt="logo here"></img>
        </div>
        <h1>Top Venues</h1>
        <div className="Users1">
          <div className="rectangle">
            <p>Number</p>
          </div>
          <div className="border"></div>
          <div className="rectangle">
            <p>Number</p>
          </div>
        </div>
        <div className="Users1">
          <h2 className="act">Active Users</h2>
          <div className="border1"></div>
          <h2>Number of Venues</h2>
        </div>
      </div>
      <br />
      <div className="Users">
        <Charts
          name="Users"
          data={venuStats?.active_users}
          keyName={"active_users"}
          color={"warning"}
          textColor={"#ed6c03"}
        />
        <Charts
          name="Bets Placed/Hr"
          data={venuStats?.most_placed_bets}
          keyName={"frequency_of_bets"}
          color={"primary"}
          textColor={"#1876d2"}
        />
        <Charts
          name="Amount Placed on Bets/Hr"
          data={venuStats?.most_amount_spent}
          keyName={"frequency_of_amount_spent"}
          color={"success"}
          textColor={"#2f7c32"}
        />
      </div>
    </div>
  );
};

export default Home;

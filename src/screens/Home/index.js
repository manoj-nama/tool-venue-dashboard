import * as React from "react";
import "./Home.css";
import img from "./logo.png";
import Charts from "../Charts/Charts.js";
import { useEffect } from "react";
import {
  getVenuStats,
  getUserVanueCounts,
  getUserStats,
  getBetsStats,
  getUserAmount,
} from "../../services";

const Home = () => {
  const [venuStats, setVenuStats] = React.useState();
  const [userStats, setUserStats] = React.useState();
  const [betStats, setBetStats] = React.useState();
  const [amountStats, setAmountStats] = React.useState();

  const [venuCounts, setVenuCounts] = React.useState();

  const getSatats = async () => {
    let res = await getVenuStats();
    setVenuStats(res);
  };

  const getCounts = async () => {
    let res = await getUserVanueCounts();
    setVenuCounts(res);
  };

  const getStatsForUser = async () => {
    let res = await getUserStats();
    setUserStats(res?.active_users);
  };

  const getStatsBetsPlaced = async () => {
    let res = await getBetsStats();
    setBetStats(res?.data);
  };

  const getStatsForAmountPlaced = async () => {
    let res = await getUserAmount();
    setAmountStats(res?.data);
  };

  useEffect(() => {
    getCounts();
    getSatats();
    getStatsForUser();
    getStatsBetsPlaced();
    getStatsForAmountPlaced();
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
            <p>{venuCounts?.userCount}</p>
          </div>
          <div className="border"></div>
          <div className="rectangle">
            <p>{venuCounts?.venueCount}</p>
          </div>
        </div>
        <div className="Users12">
          <h2 className="act">Active Users</h2>
          <div className="border1"></div>
          <h2 className="act1">Number of Venues</h2>
        </div>
      </div>
      <br />
      <div className="Users">
        <Charts
          name="Users"
          data={userStats}
          keyName={"active_users"}
          color={"warning"}
          textColor={"#ed6c03"}
          display$={"none"}
          displayHr={"none"}
          setMargin={1}
        />
        <Charts
          name="Bets Placed"
          data={betStats}
          keyName={"frequency_of_bets"}
          color={"primary"}
          textColor={"#1876d2"}
          display$={"none"}
          displayHr={"contents"}
          setMargin={0}
        />
        <Charts
          name="Amount Placed on Bets"
          data={amountStats}
          keyName={"frequency_of_total_amount_spent"}
          color={"success"}
          textColor={"#2f7c32"}
          display$={"contents"}
          displayHr={"contents"}
          setMargin={0}
        />
      </div>
    </div>
  );
};

export default Home;

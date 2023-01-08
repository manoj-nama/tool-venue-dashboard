import * as React from "react";
import "./Home.scss";
import Charts from "../Charts/Charts.js";
import { useEffect } from "react";
import {
  getActiveUserVenueCounts,
  getUserStats,
  getBetsPlaced,
  getAmountSpent,
} from "../../services";

export const toCountString = (count) => {
  const outCount = typeof count === "string" ? parseInt(count, 10) : count;
  if (!outCount) {
    return "0";
  } else if (outCount <= 1000) {
    return outCount.toString();
  } else if (outCount <= 9000) {
    return outCount.toLocaleString();
  } else {
    return `${(outCount / 1000).toFixed(1)}k`;
  }
};

const Home = () => {
  const didMountRef = React.useRef(false);
  const [userStats, setUserStats] = React.useState();
  const [betStats, setBetStats] = React.useState();
  const [amountStats, setAmountStats] = React.useState();
  const [activeCount, setActiveCount] = React.useState({
    userCount: 0,
    venueCount: 0,
  });

  const getActiveCount = async () => {
    let res = await getActiveUserVenueCounts();
    setActiveCount({
      userCount: toCountString(res.userCount || 0),
      venueCount: toCountString(res.venueCount || 0),
    });
  };

  const getStatsForUser = async () => {
    let res = await getUserStats();
    setUserStats(res?.active_users);
  };

  const getBetsPlacedStats = async () => {
    let res = await getBetsPlaced();
    setBetStats(res?.data);
  };

  const getAmountSpentStats = async () => {
    let res = await getAmountSpent();
    setAmountStats(res?.data);
  };

  useEffect(() => {
    if (!didMountRef.current) {
      // This is to prevent double mount under strict mode with React18 for Dev mode
      didMountRef.current = true;

      getActiveCount();
      getStatsForUser();
      getBetsPlacedStats();
      getAmountSpentStats();
    }
  }, []);

  return (
    <div className="container">
      <div className="section landing">
        <div className="metric totalUsers">
          <p className="value userCount">{activeCount?.userCount}</p>
          <p className="label userCount">Active Users</p>
        </div>
        <div className="divider"></div>
        <div className="metric totalVenues">
          <p className="value venueCount">{activeCount?.venueCount}</p>
          <p className="label venueCount">Venues</p>
        </div>
      </div>

      <div className="full-width">
        <h2 className="dashboard-header">Top Venues</h2>
      </div>
      <div className="section metrics">
        <Charts
          name="Most Active Users"
          data={userStats}
          keyName={"venueId"}
          maxValueKey={"active_users"}
          color={"warning"}
          textColor={"#ed6c03"}
          display$={"none"}
          displayHr={"none"}
          route={"/venues?tab=users"}
          setMargin={1}
        />
        <Charts
          name="Most Bets Placed"
          data={betStats}
          keyName={"venueId"}
          maxValueKey={"frequency_of_bets"}
          color={"primary"}
          textColor={"#1876d2"}
          display$={"none"}
          displayHr={"contents"}
          route={"/venues?tab=bets"}
          setMargin={0}
        />
        <Charts
          name="Most Amount Placed on Bets"
          data={amountStats}
          keyName={"venueId"}
          maxValueKey={"frequency_of_total_amount_spent"}
          color={"success"}
          textColor={"#2f7c32"}
          display$={"contents"}
          displayHr={"contents"}
          route={"/venues?tab=amount"}
          setMargin={0}
        />
      </div>
    </div>
  );
};

export default Home;

import * as React from "react";
import "./Home.scss";
import Charts from "../Charts/Charts.js";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import JurisdictionSelector from "../Components/JurisdictionBox";
import {
  getDashboardMetrics,
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
  const navigate = useNavigate();
  const getSearchParams = () => new URLSearchParams(window.location.search);
  const [jurisdiction, setJurisdiction] = React.useState(
    getSearchParams().get('jurisdiction') || "all"
  );
  const [metrics, setMetrics] = React.useState({
    userCount: 0,
    venueCount: 0,
    users: [],
    bets: [],
    amount: [],
  });

  const getMetrics = async (jurisdiction) => {
    let {
      userCount,
      venueCount,
      users,
      bets,
      amount
    } = await getDashboardMetrics(jurisdiction);

    setMetrics({
      userCount,
      venueCount,
      users: users.data,
      bets: bets.data,
      amount: amount.data,
    });
  };

  const onJurisdictionChange = (evt) => {
    let jur = evt.target.value;
    if (jur && jur.toLowerCase() !== "all") {
      navigate(`/dashboard?jurisdiction=${jur}`);
    } else {
      navigate('/dashboard');
    }
    setJurisdiction(jur);
  };

  useEffect(() => {
    getMetrics(jurisdiction);
  }, [jurisdiction]);

  return (
    <div className="container">
      <div className="section landing">
        <div className="metric totalUsers">
          <p className="value userCount">{metrics.userCount}</p>
          <p className="label userCount">Active Users</p>
        </div>
        <div className="divider"></div>
        <div className="metric totalVenues">
          <p className="value venueCount">{metrics.venueCount}</p>
          <p className="label venueCount">Venues</p>
        </div>
        <JurisdictionSelector
          value={jurisdiction}
          onChange={onJurisdictionChange}
        />
      </div>

      <div className="full-width metric-section">
        <h2 className="dashboard-header">Top Venues</h2>
        {
          jurisdiction !== 'all' ? (
            <span>{jurisdiction}</span>
          ) : null
        }
      </div>
      <div className="section metrics">
        <Charts
          name="Most Active Users"
          data={metrics.users}
          keyName={"venueId"}
          maxValueKey={"active_users"}
          color={"warning"}
          textColor={"#1876d2"}
          display$={"none"}
          displayHr={"none"}
          route={"/venues?tab=users"}
        />
        <Charts
          name="Most Bets Placed"
          data={metrics.bets}
          keyName={"venueId"}
          maxValueKey={"frequency_of_bets"}
          color={"primary"}
          textColor={"#ed6c03"}
          display$={"none"}
          displayHr={"contents"}
          route={"/venues?tab=bets"}
        />
        <Charts
          name="Most Amount Placed on Bets"
          data={metrics.amount}
          keyName={"venueId"}
          maxValueKey={"frequency_of_total_amount_spent"}
          color={"success"}
          textColor={"#2f7c32"}
          display$={"contents"}
          displayHr={"contents"}
          route={"/venues?tab=amount"}
        />
      </div>
    </div>
  );
};

export default Home;

import React, { useEffect } from "react";
import img from "../Home/logo.svg";
import { httpAuth } from "../../utils/http-utility";
import { useParams } from "react-router-dom";
import "./Details.css";
import Maps from "../Maps/Maps";
import Table from "../Table/Table";

function Details() {
  const [venueData, setVenueData] = React.useState([]);
  const{id}=useParams();

  useEffect(() => {
    const fetchdata = async () => {
      const res = await httpAuth.get(
        `http://13.211.126.67:3000/v1/service-venue/venue-info/${id}`
      );

      setVenueData(res.data);
    };
    fetchdata();
  }, []);

  return (
    <div className="containers">
      <div className="test">
        <div className="section"></div>
        <div className="header">
          <div className="logo">
            <img src={img} className="image" alt="logo here"></img>
          </div>
        </div>
        <h2 className="h2">Venues Insights</h2>

        {/* <div className="imagebg">
          <img src={img} className="image" alt="logo"></img>
        </div> */}
      </div>
      <div className="lowerview">
        <div className="table">
          <Table />

        </div>

        <div className="map">
          <div className="active">
            <div className="info">
              <h2 className="h2tag">
                Venue:<span className="spanname">{venueData?.venueDetails?.venueName}</span> State:
                <span className="spanname">{venueData?.venueDetails?.venueState}</span>
              </h2>
            </div>

            <div className="info">
              <h2 className="h2tag">
                Active Users: <span className="spanname">{venueData?.data?.[0]?.active_users}</span>
              </h2>
            </div>
          </div>
          {venueData?.venueDetails ? (
            <div className="map">
              <Maps mapData={venueData?.venueDetails} />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      
    </div>
  );
}

export default Details;

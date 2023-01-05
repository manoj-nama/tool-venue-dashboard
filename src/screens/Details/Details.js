import React, { useEffect } from "react";
import img from "../Home/logo.svg";
import { httpAuth } from "../../utils/http-utility";

import "./Details.css";
import Maps from "../Maps/Maps";
import Table from "../Table/Table";

function Details() {
  const [venueData, setVenueData] = React.useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const res = await httpAuth.get(
        "http://13.211.126.67:3000/v1/service-venue/venue-info/2601"
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
        <h2 className="h2">Venues with Most Users</h2>

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
                Venue:{venueData?.venueDetails?.venueName} State:
                {venueData?.venueDetails?.venueState}
              </h2>
            </div>

            <div className="info">
              <h2 className="h2tag">
                Active Users {venueData?.data?.[0]?.active_users}
              </h2>
            </div>
          </div>
          {venueData?.venueDetails ? (
            <div className="map">
              <Maps cordinates={venueData?.venueDetails} />
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

import React, { useEffect } from "react";
import img from "../../assets/logo.svg";
import { httpAuth } from "../../utils/http-utility";
import { useNavigate, useParams } from "react-router-dom";
import "./Details.css";
import Maps from "../Maps/Maps";
import Table from "../Table/Table";
import { TbDiscount2 } from "react-icons/tb";
import { TfiAnnouncement } from "react-icons/tfi";

function Details() {
  const [venueData, setVenueData] = React.useState([]);
  const { id } = useParams();
  const nav = useNavigate();

  useEffect(() => {
    const fetchdata = async () => {
      const res = await httpAuth.get(
        `http://13.211.126.67:3000/v1/service-venue/venue-info/${id}`
      );
      if (res.data.data.length === 0) {
        nav("/error");
      } else {
        setVenueData(res.data);
      }
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
        <div className="icons">
          <button className="btns">
            <div className="btns2">
              <div className="ico"><TbDiscount2 /></div>
              <div className="text">Reveal a New Offer</div>
            </div>

          </button>
          <button className="btns">
            <div className="btns2">
              <span className="ico"><TfiAnnouncement /></span>

              <span className="text">Make an Announcement</span>
            </div>
          </button>

        </div>
      </div>

    </div>
  );
}

export default Details;

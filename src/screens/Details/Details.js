import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Details.scss";
import Maps from "../Maps/Maps";
import Table from "../Table/Table";
import { TfiAnnouncement, TfiTicket } from "react-icons/tfi";
import SurveyDialog from '../Components/Modal/SurveyModal';
import WeTalkDialog from '../Components/Modal/WeTalkModal';
import { fetchVenue } from "../../services";

function Details() {
  const [venueData, setVenueData] = React.useState([]);
  const [isOpen, setIsOpen] = React.useState(false);
  const [isWeTalkOpen, setIsWeTalkOpen] = React.useState(false);
  const { id } = useParams();
  const nav = useNavigate();

  const handleModalClose = () => {
    setIsOpen(false);
    setIsWeTalkOpen(false);
  }

  useEffect(() => {
    const fetchdata = async () => {
      const res = await fetchVenue(id);
      if (res.data.data.length === 0) {
        nav("/error");
      } else {
        setVenueData(res.data);
      }
    };
    fetchdata();
  }, []);

  return (
    <div className="container venue-container">
      <div className="section">
        <div className="venue-details">
          <div className="map">
            {venueData?.venueDetails ? (
              <Maps mapData={venueData?.venueDetails} />
            ) : (
              ""
            )}
          </div>
          <div className="venue">
            <div className="venue-pill">{venueData?.venueDetails?.venueType}</div>
            <span className="venue-pill venue-state">{venueData?.venueDetails?.venueState}</span>
            <div className="venue-name">
              {venueData?.venueDetails?.venueName}
            </div>
            <div className="venue-users">
              <span>{venueData?.active_users}</span>
              {"Active Users"}
            </div>
            <div className="actions">
              <button className="cta-btn" onClick={() => setIsWeTalkOpen(true)}>
                <div className="btns2">
                  <span className="ico"><TfiAnnouncement /></span>
                  <span className="text">Make an Announcement</span>
                </div>
              </button>
              <button className="cta-btn" onClick={() => setIsOpen(true)}>
                <div className="btns2">
                  <span className="ico"><TfiTicket /></span>
                  <span className="text">Send a Survey</span>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="table">
          <Table data={venueData.data} />
        </div>
      </div>
      <SurveyDialog open={isOpen} onClose={handleModalClose} />
      <WeTalkDialog open={isWeTalkOpen} onClose={handleModalClose} />
    </div>
  );
}

export default Details;

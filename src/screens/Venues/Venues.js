import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import "./Venues.css";
import img from "./logo.png";
import Table from "../Table";
import Search from "../Search/Search";

import Date from "../Date/Date.js";
import SearchIcon from "@mui/icons-material/Search";

//import IconButton from '@mui/material/IconButton';
import InputField from "@mui/material/InputBase";
import { getVenues } from "../../services";

const Venues = () => {
  // const [searchOptions, setSearchOptions] = React.useState();

  const getVenueData = async (val) => {
    let res = await getVenues(val);
    console.log("reasult--->", res);
  };

  const debounce = function (value, d) {
    let timer;
    return function () {
      let context = this,
        args = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => {
        getVenueData.apply(context, arguments);
      }, d);
    };
  };

  const getVanues = debounce(getVenueData, 300);

  useEffect(() => {}, []);

  return (
    <div className="container">
      <div className="test">
        <div className="imagebg">
          <img src={img} className="image" alt="logo"></img>
        </div>
        <h2>Venues with Most Users</h2>

        <div className="date">
          <div className="date2">
            <div className="date3">
              <InputField
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search for Venues"
                inputProps={{ "aria-label": "search venues" }}
                // value={searchOptions}
                onChange={getVanues}
              />

              <SearchIcon sx={{ backgroundColor: "white", color: "grey" }} />
            </div>
            <br />
            <div className="dropdown">
              <Search />
            </div>
          </div>

          <div className="date1">
            <h3>Select date Range</h3>

            <div className="datech">
              <Date />
            </div>
          </div>
        </div>
      </div>

      <div className="userpage1">
        <Table
          data={[
            {
              active_users: 21,
              venueId: 1664,
              venueName: "Pennant Hills Inn12",
              venueType: "PubTab",
              venueState: "NSW",
            },
            {
              active_users: 19,
              venueId: 2792,
              venueName: "Walshs Hotel, Queanbeyan",
              venueType: "PubTab",
              venueState: "NSW",
            },
            {
              active_users: 16,
              venueId: 7588,
              venueName: "Full Moon Hotel",
              venueType: "PubTab",
              venueState: "QLD",
            },
            {
              active_users: 11,
              venueId: 2601,
              venueName: "Royal Oak Hotel, Double Bay",
              venueType: "PubTab",
              venueState: "NSW",
            },
            {
              active_users: 10,
              venueId: 1352,
              venueName: "Wyong RLF Club, Kanwal",
              venueType: "ClubTab",
              venueState: "NSW",
            },
            {
              active_users: 21,
              venueId: 1664,
              venueName: "Pennant Hills Inn",
              venueType: "PubTab",
              venueState: "NSW",
            },
            {
              active_users: 19,
              venueId: 2792,
              venueName: "Walshs Hotel, Queanbeyan",
              venueType: "PubTab",
              venueState: "NSW",
            },
            {
              active_users: 16,
              venueId: 7588,
              venueName: "Full Moon Hotel",
              venueType: "PubTab",
              venueState: "QLD",
            },
            {
              active_users: 11,
              venueId: 2601,
              venueName: "Royal Oak Hotel, Double Bay",
              venueType: "PubTab",
              venueState: "NSW",
            },
            {
              active_users: 10,
              venueId: 1352,
              venueName: "Wyong RLF Club, Kanwal",
              venueType: "ClubTab",
              venueState: "NSW",
            },
            {
              active_users: 21,
              venueId: 1664,
              venueName: "Pennant Hills Inn",
              venueType: "PubTab",
              venueState: "NSW",
            },
            {
              active_users: 19,
              venueId: 2792,
              venueName: "Walshs Hotel, Queanbeyan",
              venueType: "PubTab",
              venueState: "NSW",
            },
            {
              active_users: 16,
              venueId: 7588,
              venueName: "Full Moon Hotel",
              venueType: "PubTab",
              venueState: "QLD",
            },
            {
              active_users: 11,
              venueId: 2601,
              venueName: "Royal Oak Hotel, Double Bay",
              venueType: "PubTab",
              venueState: "NSW",
            },
            {
              active_users: 10,
              venueId: 1352,
              venueName: "Wyong RLF Club, Kanwal1222",
              venueType: "ClubTab",
              venueState: "NSW",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Venues;

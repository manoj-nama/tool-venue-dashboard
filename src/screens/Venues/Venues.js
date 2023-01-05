import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import "./Venues.css";
import img from "./logo.png";
import Table from "../Table";
import Search from "../Search/Search";
import Tab from "../Tab";
import { useParams, useLocation } from "react-router-dom";

import Date from "../Date/Date.js";
import SearchIcon from "@mui/icons-material/Search";

//import IconButton from '@mui/material/IconButton';
import InputField from "@mui/material/InputBase";
import {
  getVenuesByAmount,
  getVenuesByBets,
  getVenuesByActiveUser,
} from "../../services";

const Venues = () => {
  const useSearchParam = () => new URLSearchParams(useLocation().search);
  const location = useLocation();
  const [tableData, setTabelData] = React.useState();
  const [searchValue, setSearchValue] = React.useState();
  const [selectedTabOnPageOpen, setSelectedTabOnPageOpen] = React.useState();
  const [headingText, setHeadingText] = React.useState("");

  const [currentTab, setCurrentTab] = React.useState();

  const [applyDateFilter, setApplyDateFilter] = React.useState(false);
  const [filter, setFilter] = React.useState({
    dateRange: {
      startDate: "",
      endDate: "",
    },
  });

  const currentPage = location?.pathname;

  const findCurrentPage = () => {
    if (currentPage === "/users") {
      return "users";
    } else if (currentPage === "/bets") {
      return "bets";
    } else if (currentPage === "/amount") {
      return "amount";
    }
  };

  const getVenueData = async (val, page) => {
    let currentPage = page ? page : findCurrentPage();
    if (currentPage === "users") {
      let res = await getVenuesByActiveUser("search?text=" + val);
      setTabelData(res);
    } else if (currentPage === "bets") {
      let res = await getVenuesByBets("search?text=" + val);
      setTabelData(res);
    } else if (currentPage === "amount") {
      let res = await getVenuesByAmount("search?text=" + val);
      setTabelData(res);
    }
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

  const SelectedMatric = (value) => {
    let page = "users";
    if (value === 0) {
      setHeadingText(" Users");
      page = "users";
    } else if (value === 1) {
      setHeadingText(" Bets Placed");
      page = "bets";
    } else {
      setHeadingText(" Amount Spent");
      page = "amount";
    }
    getVenueData(searchValue, page);
    setCurrentTab(page);
  };

  const getDateRange = (data, type) => {
    let filters = { ...filter };
    if (type === "dateRange") {
      let obj = {
        startDate: data?.[0]?.startDate.toUTCString(),
        endDate: data?.[0]?.endDate.toUTCString(),
      };
      filters["dateRange"] = obj;
      setFilter(filters);
      setApplyDateFilter(true);
    }
  };

  const getVanues = debounce(getVenueData, 300);

  useEffect(() => {
    async function fetchMyAPI() {
      let currentPage = findCurrentPage();

      setCurrentTab(currentPage);

      if (filter?.dateRange?.startDate && filter?.dateRange?.endDate) {
        let startDate = filter?.dateRange?.startDate;
        let endDate = filter?.dateRange?.endDate;

        if (currentPage === "amount" && applyDateFilter) {
          let res = await getVenuesByAmount(
            "fromDateUTC={" + startDate + "}&toDateUTC={" + endDate + "}"
          );
          setApplyDateFilter(false);
          setTabelData(res);
        } else if (currentPage === "users" && applyDateFilter) {
          let res = await getVenuesByActiveUser(
            "fromDateUTC={" + startDate + "}&toDateUTC={" + endDate + "}"
          );
          setApplyDateFilter(false);
          setTabelData(res);
        } else if (currentPage === "bets" && applyDateFilter) {
          let res = await getVenuesByBets(
            "fromDateUTC={" + startDate + "}&toDateUTC={" + endDate + "}"
          );
          setApplyDateFilter(false);
          setTabelData(res);
        }
      }
    }
    fetchMyAPI();
  }, [filter]);

  useEffect(() => {
    let currentPage = findCurrentPage();

    if (currentPage === "amount") {
      setSelectedTabOnPageOpen(2);
      setHeadingText(" Amount Spent");
    } else if (currentPage === "users") {
      setHeadingText(" Users");
      setSelectedTabOnPageOpen(0);
    } else if (currentPage === "bets") {
      setHeadingText(" Bets Placed");
      setSelectedTabOnPageOpen(1);
    }
  }, []);

  return (
    <div className="containers">
      <div className="section"></div>
      <div className="header">
        <div className="logo">
          <img src={img} className="image" alt="logo here"></img>
        </div>
      </div>
      <div className="test">
        {/* <div className="imagebg">
          <img src={img} className="image" alt="logo"></img>
        </div> */}
        <h2>Venues with Most{headingText}</h2>

        <div className="date">
          <div className="date2">
            <div className="date3">
              <InputField
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search for Venues"
                inputProps={{ "aria-label": "search venues" }}
                value={searchValue}
                onChange={(e) => {
                  getVanues(e.target.value);
                  setSearchValue(e.target.value);
                }}
              />

              <SearchIcon sx={{ backgroundColor: "white", color: "grey" }} />
            </div>
            <br />
            {selectedTabOnPageOpen !== undefined ? (
              <Tab
                selectedTabOnPageOpen={selectedTabOnPageOpen}
                SelectedMatric={SelectedMatric}
              />
            ) : (
              ""
            )}
          </div>

          <div className="date1">
            <h3>Select date Range</h3>

            <div
              className="datech"
              style={
                currentTab === "users"
                  ? { pointerEvents: "none", opacity: 0.4 }
                  : {}
              }
            >
              <Date getDateRange={getDateRange} />
            </div>
          </div>
        </div>
      </div>

      <div className="userpage1">
        {currentTab === "users" ? (
          <Table type={"active_users"} data={tableData?.data?.data} />
        ) : (
          ""
        )}
        {currentTab === "bets" ? (
          <Table type={"frequency_of_bets"} data={tableData?.data?.data} />
        ) : (
          ""
        )}
        {currentTab === "amount" ? (
          <Table
            type={"frequency_of_total_amount_spent"}
            data={tableData?.data?.data}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Venues;

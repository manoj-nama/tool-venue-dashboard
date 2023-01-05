import React, { useEffect } from "react";
import "./Venues.css";
import img from "../../assets/logo.svg";
import Table from "../Table";
import Tab from "../Tab";
import Date from "../Date/Date.js";

import SearchIcon from "@mui/icons-material/Search";
import InputField from "@mui/material/InputBase";
import { useNavigate } from "react-router-dom";
import {
  getVenuesByAmount,
  getVenuesByBets,
  getVenuesByActiveUser,
} from "../../services";

const TABS = [
  "users",
  "bets",
  "amount"
];
const TabFilters = {
  users: 0,
  bets: 1,
  amount: 2,
};

const debounce = function (fn, d) {
  let timer;
  return function () {
    let context = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, arguments);
    }, d);
  };
};

const Venues = () => {
  const navigate = useNavigate();
  const getSearchParams = () => new URLSearchParams(window.location.search);
  const [tableData, setTableData] = React.useState();

  const [applyDateFilter, setApplyDateFilter] = React.useState(false);
  const [filter, setFilter] = React.useState({
    dateRange: {
      startDate: "",
      endDate: "",
    },
    searchText: getSearchParams().get('searchText'),
    tab: TABS[0],
  });

  const getCurrentTab = () => {
    const loc = getSearchParams();
    return loc.get('type') || 'users';
  };

  const getActiveFilters = () => {
    const { searchText, dateRange } = filter;
    const filtersToApply = {};
    if (searchText) {
      filtersToApply["text"] = searchText;
    }
    if (dateRange.startDate) {
      filtersToApply["fromDateUTC"] = dateRange.startDate;
    }
    if (dateRange.endDate) {
      filtersToApply["toDateUTC"] = dateRange.endDate;
    }
    return filtersToApply;
  };

  const getVenueData = async () => {
    const sp = new URLSearchParams(getActiveFilters()).toString();
    const path = `search${sp ? `?${sp}` : ''}`;

    let res;
    switch (filter.tab) {
      case "users": {
        res = await getVenuesByActiveUser(path);
        break;
      }
      case "amount": {
        res = await getVenuesByAmount(path);
        break;
      }
      case "bets": {
        res = await getVenuesByBets(path);
        break;
      }
      default: {
        console.log("Invalid tab");
      }
    }
    if (res) {
      setTableData(res);
    }
  };

  const updateSearchParams = (override) => {
    const sp = new URLSearchParams({
      ...getActiveFilters(),
      ...override,
    }).toString();

    navigate(`/venues${sp ? `?${sp}` : ''}`);
  };

  const onSearchChange = (searchText) => {
    setFilter(filter => ({
      ...filter,
      searchText,
    }));
    updateSearchParams({ searchText });
  };

  const onTabSelect = (value) => {
    let tab = TABS[value] || TABS[0];
    updateSearchParams({ tab });
    setFilter(filter => ({
      ...filter,
      tab,
    }));
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

  const getVenues = debounce(getVenueData, 500);

  useEffect(() => {
    getVenues();
  }, [filter]);

  useEffect(() => {
    let currentTab = getCurrentTab();
    setFilter(filter => ({
      ...filter,
      tab: currentTab,
    }));
  }, []);

  const currentTab = filter.tab;

  return (
    <div className="containers">
      <div className="section"></div>
      <div className="header">
        <div className="logo">
          <img src={img} className="image" alt="logo here"></img>
        </div>
      </div>
      <div className="test">
        <div className="date">
          <div className="date2">
            <div className="date3">
              <InputField
                sx={{ ml: 1, flex: 1, backgroundColor: "white" }}
                placeholder="Search for Venues"
                inputProps={{ "aria-label": "search venues" }}
                value={filter.searchText}
                onChange={(e) => {
                  onSearchChange(e.target.value);
                }}
              />

              <SearchIcon
                sx={{ backgroundColor: "white", color: "grey", marginTop: 2 }}
              />
            </div>
            <Tab
              selectedTabOnPageOpen={TabFilters[filter.tab]}
              onTabSelect={onTabSelect}
            />
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
        ) : null}
      </div>
    </div>
  );
};

export default Venues;

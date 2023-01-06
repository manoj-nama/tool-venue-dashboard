import React, { useEffect, useState } from "react";
import "./Venues.scss";
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
const TableTypes = {
  users: {
    key: 'active_users',
    label: 'Active Users',
  },
  bets: {
    key: 'frequency_of_bets',
    label: 'Bets Placed',
  },
  amount: {
    key: 'frequency_of_total_amount_spent',
    label: 'Amount Spent',
  },
}

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

const makeVenuesRequest = async (type = "users", { searchText, startDate, endDate }) => {
  const requests = {
    users: getVenuesByActiveUser,
    bets: getVenuesByBets,
    amount: getVenuesByAmount
  };
  const filtersToApply = {};
  if (searchText) {
    filtersToApply["text"] = searchText;
  }
  if (startDate) {
    filtersToApply["fromDateUTC"] = startDate;
  }
  if (endDate) {
    filtersToApply["toDateUTC"] = endDate;
  }

  const sp = new URLSearchParams(filtersToApply).toString();
  const path = `search${sp ? `?${sp}` : ''}`;
  const fn = requests[type];
  return fn(path);
};

const Venues = () => {
  const navigate = useNavigate();
  const getSearchParams = () => new URLSearchParams(window.location.search);
  const [tableData, setTableData] = useState();

  const [filter, setFilter] = useState({
    startDate: getSearchParams().get("startDate") || "",
    endDate: getSearchParams().get("endDate") || "",
    searchText: getSearchParams().get('searchText') || "",
    tab: TABS[0],
  });

  const getCurrentTab = () => {
    const loc = getSearchParams();
    return loc.get('tab') || 'users';
  };

  const getVenueData = async () => {
    let res = await makeVenuesRequest(filter.tab, filter);
    if (res) {
      setTableData(res);
    }
  };

  const getActiveFilters = () => {
    const { searchText, startDate, endDate } = filter;
    const filtersToApply = {};
    if (searchText) {
      filtersToApply["searchText"] = searchText;
    }
    if (startDate) {
      filtersToApply["startDate"] = startDate;
    }
    if (endDate) {
      filtersToApply["endDate"] = endDate;
    }
    return filtersToApply;
  }

  const updateSearchParams = (override = {}) => {
    const sp = new URLSearchParams({
      ...getActiveFilters(),
      ...override,
    }).toString();

    navigate(`/venues${sp ? `?${sp}` : ''}`);
  };

  const onSearchChange = (searchText) => {
    setFilter(filters => ({
      ...filters,
      searchText,
    }));
    updateSearchParams({ searchText });
  };

  const onTabSelect = (value) => {
    let tab = TABS[value] || TABS[0];
    updateSearchParams({ tab });
    setFilter(filters => ({
      ...filters,
      tab,
    }));
  };

  const getDateRange = (data, type) => {
    if (type === "dateRange") {
      const startDate = +data?.[0]?.startDate;
      const endDate = +data?.[0]?.endDate;
      updateSearchParams({ startDate, endDate });
      setFilter(filters => ({
        ...filters,
        startDate,
        endDate
      }));
    }
  };

  const getVenues = debounce(getVenueData, 500);

  useEffect(() => {
    getVenues();
  }, [filter]);

  useEffect(() => {
    let currentTab = getCurrentTab();
    setFilter(filters => ({
      ...filters,
      tab: currentTab,
    }));
  }, []);

  const currentTab = filter.tab;
  const tableType = TableTypes[currentTab] || TableTypes.users;

  return (
    <div className="container">
      <div className="header">
        <div className="logo">
          <img src={img} className="image" alt="logo here"></img>
        </div>
      </div>
      <div className="filters-container section">
        <div className="filters">
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

        <div className="date-picker">
          <div
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

      <div className="table-section section">
        <Table
          type={tableType.key}
          label={tableType.label}
          data={tableData?.data?.data}
        />
      </div>
    </div>
  );
};

export default Venues;

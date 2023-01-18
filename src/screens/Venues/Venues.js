import React, { useEffect, useState } from "react";
import "./Venues.scss";
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
  const [tableData, setTableData] = useState({
    data: [],
    total_count: 0,
  });

  const navigateToVenueDetails = (venue) => {
    navigate(`/venue-details/${venue.venueId}`);
  }

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
      const { totalCount, data, active_users } = res.data;
      setTableData({
        totalCount,
        data: active_users || data,
      });
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

  const onDateSelectionChange = (data, type) => {
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
      <div className="filters-container section">
        <div className="search-box">
          <SearchIcon
            sx={{ backgroundColor: "white", color: "grey" }}
          />
          <InputField
            sx={{ ml: 1, flex: 1, backgroundColor: "white" }}
            placeholder="Search for Venues"
            inputProps={{ "aria-label": "search venues" }}
            value={filter.searchText}
            onChange={(e) => {
              onSearchChange(e.target.value);
            }}
          />
        </div>
        <div className="filters">
          <Tab
            selectedTabOnPageOpen={TabFilters[filter.tab]}
            onTabSelect={onTabSelect}
          />
          <div className="date-picker">
            <label>Date Range: </label>
            <div
              style={
                currentTab === "users"
                  ? { pointerEvents: "none", opacity: 0.4 }
                  : {}
              }
            >
              <Date onChange={onDateSelectionChange} />
            </div>
          </div>
        </div>
      </div>

      <div className="table-section section">
        <Table
          type={tableType.key}
          label={tableType.label}
          totalRecords={tableData?.totalCount}
          data={tableData?.data}
          onRecordClick={navigateToVenueDetails}
        />
      </div>
    </div>
  );
};

export default Venues;

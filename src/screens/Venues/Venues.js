import React, { useEffect, useState, useCallback, createRef } from "react";
import "./Venues.scss";
import Table from "../Table";
import Tab from "../Tab";
import Date from "../Date/Date.js";

import SearchIcon from "@mui/icons-material/Search";
import InputField from "@mui/material/InputBase";
import { useNavigate } from "react-router-dom";
import JurisdictionSelector from "../Components/JurisdictionBox";
import {
  searchVenues,
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
  let timer = null;
  return function () {
    let context = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, arguments);
    }, d);
  };
};

const makeVenuesRequest = async (type = "users", {
  searchText,
  startDate,
  endDate,
  jurisdiction = "",
}) => {
  const filtersToApply = {};
  if (searchText.trim()) {
    filtersToApply["text"] = searchText.trim();
  }
  if (startDate) {
    filtersToApply["fromDateUTC"] = startDate;
  }
  if (endDate) {
    filtersToApply["toDateUTC"] = endDate;
  }
  if (type) {
    filtersToApply["type"] = type.toLowerCase();
  }
  if (jurisdiction && jurisdiction !== "all") {
    filtersToApply["jurisdiction"] = jurisdiction.toUpperCase();
  }

  const sp = new URLSearchParams(filtersToApply).toString();
  const path = `${sp ? `?${sp}` : ''}`;
  return searchVenues(path);
};

const Venues = () => {
  const navigate = useNavigate();
  const mountedRef = createRef();
  const inputRef = createRef();
  const getSearchParams = () => new URLSearchParams(window.location.search);
  const [tableData, setTableData] = useState({
    data: [],
    total_count: 0,
  });
  const [filter, setFilter] = useState({
    startDate: getSearchParams().get("startDate") || "",
    endDate: getSearchParams().get("endDate") || "",
    searchText: getSearchParams().get('searchText') || "",
    jurisdiction: getSearchParams().get('jurisdiction') || "",
    tab: TABS[0],
  });

  const navigateToVenueDetails = (venue) => {
    navigate(`/venue-details/${venue.venueId}`);
  }

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

  const getActiveFilters = (overrides = {}) => {
    const { searchText, startDate, endDate } = filter;
    const _filters = {
      searchText,
      startDate,
      endDate,
      ...overrides,
    };
    const filtersToApply = {};
    if (_filters.searchText.trim()) {
      filtersToApply["searchText"] = _filters.searchText.trim();
    }
    if (_filters.startDate) {
      filtersToApply["startDate"] = _filters.startDate;
    }
    if (_filters.endDate) {
      filtersToApply["endDate"] = _filters.endDate;
    }
    if (_filters.jurisdiction) {
      filtersToApply["jurisdiction"] = _filters.jurisdiction;
    }
    return filtersToApply;
  }

  const updateSearchParams = (override = {}) => {
    const sp = new URLSearchParams(
      getActiveFilters(override),
    ).toString();

    navigate(`/venues${sp ? `?${sp}` : ''}`);
  };

  const updateSearchTerm = debounce((searchText) => {
    setFilter(filters => ({
      ...filters,
      searchText,
    }));
  }, 300);

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

  const onJurisdictionChange = (evt) => {
    let jurisdiction = evt.target.value;
    jurisdiction = jurisdiction.toLowerCase() === "all" ? "" : jurisdiction;
    updateSearchParams({ jurisdiction });
    setFilter(filters => ({
      ...filters,
      jurisdiction,
    }));
  };

  useEffect(() => {
    getVenueData();
  }, [filter]);

  useEffect(() => {
    if (!mountedRef.current) {
      let currentTab = getCurrentTab();
      mountedRef.current = true;
      setFilter(filters => ({
        ...filters,
        tab: currentTab,
      }));
    } else {
      return () => {
        inputRef.current.removeEventListener("input", imperativeChangeHandler);
      }
    }
  }, []);

  const currentTab = filter.tab;
  const tableType = TableTypes[currentTab] || TableTypes.users;

  function imperativeChangeHandler(evt) {
    const searchText = evt.target.value.trim();
    updateSearchParams({ searchText });
    updateSearchTerm(searchText);
  }
  const onTextRefChange = useCallback((node) => {
    if (node) {
      inputRef.current = node;
      inputRef.current.addEventListener('input', imperativeChangeHandler);
    }
  }, []);

  return (
    <div className="container">
      <div className="filters-container section">
        <div className="search-box-container">
          <div className="search-box">
            <SearchIcon
              sx={{ backgroundColor: "white", color: "#008542" }}
            />
            <InputField
              sx={{ ml: 1, flex: 1, backgroundColor: "white" }}
              placeholder="Search for Venues"
              inputProps={{ "aria-label": "search venues" }}
              defaultValue={filter.searchText}
              inputRef={onTextRefChange}
            />
          </div>
          <JurisdictionSelector
            value={filter.jurisdiction}
            onChange={onJurisdictionChange}
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

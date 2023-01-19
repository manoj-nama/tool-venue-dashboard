import { httpAuth } from "../utils/http-utility";
import {
  LOGIN_API_URL,
  DASHBOARD_API_URL,
  SEARCH_VENUES,
  VENUE_DETAILS,
} from "../constant";

export const getDashboardMetrics = async (jurisdiction, limit = 5) => {
  try {
    const qs = { limit };
    if (jurisdiction) {
      qs['jurisdiction'] = jurisdiction;
    }
    const path = new URLSearchParams(qs).toString();
    let res = await httpAuth.get(DASHBOARD_API_URL + `?${path}`);
    return res?.data;
  } catch (e) {
    console.log(e);
  }
};

export const searchVenues = async (path = "") => {
  try {
    let res = await httpAuth.get(SEARCH_VENUES + path);
    return res;
  } catch (e) {
    console.log(e);
  }
};

export const fetchVenue = async (venueId) => {
  try {
    let res = await httpAuth.get(VENUE_DETAILS + venueId);
    return res;
  } catch (e) {
    console.log(e);
  }
};

export const loginUser = async (userData) => {
  try {
    let res = await httpAuth.post(LOGIN_API_URL, userData);
    return res?.data;
  } catch (e) {
    console.log(e);
  }
}

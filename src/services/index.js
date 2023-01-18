import { httpAuth } from "../utils/http-utility";
import {
  COUNT_API_URL,
  USER_API_URL,
  BET_API_URL,
  AMOUNT_API_URL,
  SEARCH_VENUE_BY_AMOUNT,
  SEARCH_VENUE_BY_BET,
  SEARCH_VENUE_BY_ACTIVE_USER,
  LOGIN_API_URL,
  DASHBOARD_API_URL
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

export const getActiveUserVenueCounts = async () => {
  try {
    let res = await httpAuth.get(COUNT_API_URL);
    return res?.data;
  } catch (e) {
    console.log(e);
  }
};

export const getUserStats = async () => {
  try {
    let res = await httpAuth.get(USER_API_URL);
    return res?.data;
  } catch (e) {
    console.log(e);
  }
};

export const getBetsPlaced = async () => {
  try {
    let res = await httpAuth.get(BET_API_URL);
    return res?.data;
  } catch (e) {
    console.log(e);
  }
};

export const getAmountSpent = async () => {
  try {
    let res = await httpAuth.get(AMOUNT_API_URL);
    return res?.data;
  } catch (e) {
    console.log(e);
  }
};

export const getVenuesByAmount = async (path) => {
  try {
    let res = await httpAuth.get(SEARCH_VENUE_BY_AMOUNT + path);
    return res;
  } catch (e) {
    console.log(e);
  }
};

export const getVenuesByBets = async (path) => {
  try {
    let res = await httpAuth.get(SEARCH_VENUE_BY_BET + path);
    return res;
  } catch (e) {
    console.log(e);
  }
};

export const getVenuesByActiveUser = async (path) => {
  try {
    let res = await httpAuth.get(SEARCH_VENUE_BY_ACTIVE_USER + path);
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

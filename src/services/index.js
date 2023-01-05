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
} from "../constant";

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

export const getVenuesByAmount = async (data) => {
  try {
    let res = await httpAuth.get(SEARCH_VENUE_BY_AMOUNT + data);
    return res;
  } catch (e) {
    console.log(e);
  }
};

export const getVenuesByBets = async (data) => {
  try {
    let res = await httpAuth.get(SEARCH_VENUE_BY_BET + data);
    return res;
  } catch (e) {
    console.log(e);
  }
};

export const getVenuesByActiveUser = async (data) => {
  try {
    let res = await httpAuth.get(SEARCH_VENUE_BY_ACTIVE_USER + data);
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

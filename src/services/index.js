import { httpAuth } from "../utils/http-utility";
import {
  COUNT_API_URL,
  USER_API_URL,
  BET_API_URL,
  AMOUNT_API_URL,
  SEARCH_VENUE_BY_AMOUNT,
  SEARCH_VENUE_BY_BET,
  SEARCH_VENUE_BY_ACTIVE_USER,
} from "../constant";

const data = {
  most_placed_bets: [
    { venueId: 12345, venueName: "venue1", frequency_of_bets: "900" },
    {
      venueId: 12347,
      venueName: "venue2",
      frequency_of_bets: "600",
    },
    {
      venueId: 12349,
      venueName: "venue3",
      frequency_of_bets: "250",
    },
    {
      venueId: 88471,
      venueName: "venue4",
      frequency_of_bets: "180",
    },
    {
      venueId: 10023,
      venueName: "venue5",
      frequency_of_bets: "760",
    },
  ],
  most_amount_spent: [
    {
      venueId: 12345,
      venueName: "venue1",
      frequency_of_amount_spent: "540",
    },
    {
      venueId: 12347,
      venueName: "venue2",
      frequency_of_amount_spent: "700",
    },
    {
      venueId: 12349,
      venueName: "venue3",
      frequency_of_amount_spent: "300",
    },
    {
      venueId: 88471,
      venueName: "venue4",
      frequency_of_amount_spent: "440",
    },
    {
      venueId: 10023,
      venueName: "venue5",
      frequency_of_amount_spent: "540",
    },
  ],
  active_users: [
    {
      venueId: 12345,
      venueName: "venue1",
      active_users: "50",
    },
    {
      venueId: 12347,
      venueName: "venue2",
      active_users: "40",
    },
    {
      venueId: 12349,
      venueName: "venue3",
      active_users: "54",
    },
    {
      venueId: 88471,
      venueName: "venue4",
      active_users: "400",
    },
    {
      venueId: 10023,
      venueName: "venue5",
      active_users: "740",
    },
  ],
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

export const getVenuesByAmount = async (data) => {
  console.log("dddddaaaatttttaaa->", data);
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

const data = {
  most_placed_bets: [
    { venueId: 12345, venueName: "venue1", frequency_of_bets: "540" },
    {
      venueId: 12347,
      venueName: "venue2",
      frequency_of_bets: "700",
    },
    {
      venueId: 12349,
      venueName: "venue3",
      frequency_of_bets: "300",
    },
    {
      venueId: 88471,
      venueName: "venue4",
      frequency_of_bets: "440",
    },
    {
      venueId: 10023,
      venueName: "venue5",
      frequency_of_bets: "540",
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
export const getVenuStats = () => {
  try {
    return data;
  } catch (e) {
    console.log(e);
  }
};

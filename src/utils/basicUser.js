const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://api.chase-hulett.crabdance.com"
    : "http://localhost:3001";

function checkResponse(res) {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
}

export const addNewEvent = ({ location, event, userToken }) => {
  return fetch(`${BASE_URL}/users/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ location, event, userToken, date: new Date() }),
  }).then(checkResponse);
};

export const addActiveUser = ({ location, userToken }) => {
  // return fetch(`${BASE_URL}/users/new-user`, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     location,
  //     event: { timeSpent: 0 },
  //     userToken,
  //     date: new Date(),
  //   }),
  // }).then(checkResponse);
};

export const updateActiveUser = ({ event, event_id }) => {
  // return fetch(`${BASE_URL}/users/update-user/${event_id}`, {
  //   method: "PATCH",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({ event }),
  // }).then(checkResponse);
};

export const getAnalyticsData = ({ beginDate, endDate }) => {
  // return fetch(`${BASE_URL}/users/analytics`, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({ beginDate, endDate }),
  // }).then(checkResponse);
};

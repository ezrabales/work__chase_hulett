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
    body: JSON.stringify({ location, event, userToken }),
  }).then(checkResponse);
};

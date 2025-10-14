// input is location and max scroll percent
// push data to db

import { addNewEvent } from "../utils/basicUser";
import useFindVisitToken from "./useFindVisitToken";

function useAnalyticsScrollEvent({ location, maxUserScroll }) {
  if (location === "home" && maxUserScroll === 0) {
    return;
  }
  addNewEvent({
    location,
    event: { maxUserScroll },
    userToken: useFindVisitToken(),
  });
}

export default useAnalyticsScrollEvent;

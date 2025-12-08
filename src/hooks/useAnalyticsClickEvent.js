// uses "analytics" className to locate elements
// pushes the elements id and the time it took to click from load to db

import { useEffect } from "react";
import { addNewEvent } from "../utils/basicUser";
import useFindVisitToken from "./useFindVisitToken";

let beginningTime;
let endTime;

function useAnalyticsClickEvent({ location }) {
  // function handleAnalyticsClick(element) {
  //   endTime = new Date();
  //   const totalTime = endTime.getTime() - beginningTime.getTime();
  //   addNewEvent({
  //     location,
  //     event: { clickedOn: element.target.id, time: totalTime },
  //     userToken: useFindVisitToken(),
  // });
}

//   useEffect(() => {
//     beginningTime = new Date();
//     const analyticsElements = document.getElementsByClassName("analytics");
//     if (analyticsElements) {
//       for (let i = 0; i < analyticsElements.length; i++) {
//         analyticsElements[i].addEventListener("click", handleAnalyticsClick);
//       }
//     }
//     return () => {
//       for (let i = 0; i < analyticsElements.length; i++) {
//         analyticsElements[i].removeEventListener("click", handleAnalyticsClick);
//       }
//     };
//   }, []);
// }

export default useAnalyticsClickEvent;

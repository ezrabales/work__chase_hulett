import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import "./main.css";
import Video from "../Video/Video";
import useAnalyticsClickEvent from "../../hooks/useAnalyticsClickEvent";

const Main = () => {
  useAnalyticsClickEvent({ location: "home" });
  return (
    <div className="main">
      <div className="main__background">
        <Video source={"/drone.mp4"} />
      </div>
      <div className="main__container">
        <h1 className="main__title">True Light Pictures</h1>
        <div className="main__section-container">
          <NavLink
            to={"/cinema"}
            className="main__left analytics"
            id="analytics__home_cinema"
          >
            <h2 className="main__left_title">Cinema</h2>
          </NavLink>
          <NavLink
            to={"/videography"}
            className="main__right analytics"
            id="analytics__home_videography"
          >
            <h2 className="main__right_title">Videography</h2>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Main;

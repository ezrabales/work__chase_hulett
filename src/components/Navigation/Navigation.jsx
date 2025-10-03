import "./Navigation.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="nav">
      <NavLink to={"/"}>
        <div className="nav__link">Home</div>
      </NavLink>
      <NavLink to={"/cinema"}>
        <div className="nav__link">Cinema</div>
      </NavLink>
      <NavLink to={"/videography"}>
        <div className="nav__link">Videography</div>
      </NavLink>
    </div>
  );
};
export default Navigation;

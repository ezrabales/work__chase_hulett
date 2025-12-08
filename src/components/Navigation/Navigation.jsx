import "./Navigation.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="nav">
      <NavLink to={"/"}>
        <nav className="nav__link">Home</nav>
      </NavLink>
      <NavLink to={"/cinema"}>
        <nav className="nav__link">Cinema</nav>
      </NavLink>
      <NavLink to={"/videography"}>
        <nav className="nav__link">Videography</nav>
      </NavLink>
    </div>
  );
};
export default Navigation;

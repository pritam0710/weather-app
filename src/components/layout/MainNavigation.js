import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
const MainNavigation = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "#fff" : "#063030",
    };
  };
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Weather App</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink style={navLinkStyles} to="/weather/search">
              Search
            </NavLink>
          </li>
          <li>
            <NavLink style={navLinkStyles} to="/weather/history">
              History
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;

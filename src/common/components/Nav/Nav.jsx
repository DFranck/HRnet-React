import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import "./nav.scss";
export const Nav = () => {
  const theme = useSelector((state) => state.theme.theme);
  const location = useLocation();
  console.log(location);
  return (
    <nav className="HRnet-nav">
      <ul
        className={`${theme} ${location.pathname === "/" ? "left" : "right"}`}
      >
        <li className={`${theme} ${location.pathname === "/" ? "active" : ""}`}>
          <Link to="/">Create Employee</Link>
        </li>
        <li
          className={`${theme} ${
            location.pathname === "/employee-list" ? "active" : ""
          }`}
        >
          <Link to="/employee-list">View Current Employees</Link>
        </li>
      </ul>
    </nav>
  );
};

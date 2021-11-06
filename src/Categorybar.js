import { NavLink } from "react-router-dom";
import "./Categorybar.css";
function Categorybar(props) {
  return (
    <div className="categorybar">
      <NavLink
        activeClassName="categorybar-link-active"
        className="categorybar-link"
        exact
        to="/"
      >
        General
      </NavLink>
      <NavLink
        activeClassName="categorybar-link-active"
        className="categorybar-link"
        exact
        to="/business"
      >
        Business
      </NavLink>
      <NavLink
        activeClassName="categorybar-link-active"
        className="categorybar-link"
        exact
        to="/entertainment"
      >
        {" "}
        Entertainment{" "}
      </NavLink>
      <NavLink
        activeClassName="categorybar-link-active"
        className="categorybar-link"
        exact
        to="/sports"
      >
        {" "}
        Sports{" "}
      </NavLink>
      <NavLink
        activeClassName="categorybar-link-active"
        className="categorybar-link"
        exact
        to="/science"
      >
        {" "}
        Science{" "}
      </NavLink>
      <NavLink
        activeClassName="categorybar-link-active"
        className="categorybar-link"
        exact
        to="/technology"
      >
        {" "}
        Technology
      </NavLink>
      <NavLink
        activeClassName="categorybar-link-active"
        className="categorybar-link"
        exact
        to="/health"
      >
        Health
      </NavLink>
      
    </div>
  );
}
export default Categorybar;

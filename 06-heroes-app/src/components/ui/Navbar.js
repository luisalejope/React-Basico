import React, { useContext } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";
import "./styles/Navbar.css";
export const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);

  const history = useHistory();

  const handleLogout = () => {
    dispatch({
      type: types.logout,
    });
    history.replace("/login");
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="itemsContainer">
        <div className="leftContainer">
          <Link className="navbar-brand" to="/">
            Comics
          </Link>

          <div className="navbar-collapse">
            <div className="navbar-nav">
              <NavLink
                activeClassName="active"
                className="nav-item nav-link"
                exact
                to="/marvel"
              >
                Marvel
              </NavLink>

              <NavLink
                activeClassName="active"
                className="nav-item nav-link"
                exact
                to="/dc"
              >
                DC
              </NavLink>
              <NavLink
                activeClassName="active"
                className="nav-item nav-link"
                exact
                to="/search"
              >
                Search
              </NavLink>
            </div>
          </div>
        </div>

        <div>
          <ul className="navbar-nav ml-auto">
            <p className="nav-item nav-link text-info">{user.name}</p>
            <button className="nav-item nav-link btn" onClick={handleLogout}>
              Logout
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

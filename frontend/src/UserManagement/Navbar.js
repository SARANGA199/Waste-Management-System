import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthService from "../Services/AuthService";
import { AuthContext } from "../Context/AuthContext";

const Navbar = (props) => {
  const { isAuthenticated, user, setIsAuthenticated, setUser } =
    useContext(AuthContext);

  const onClickLogoutHandler = () => {
    AuthService.logout().then((data) => {
      if (data.success) {
        setUser(data.user);
        setIsAuthenticated(false);
      }
    });
  };

  const unauthenticatedNavBar = () => {
    return (
      <>
        <Link to="/">
          <li className="nav-item nav-link text-white">Home</li>
        </Link>
        <Link to="/login">
          <li className="nav-item nav-link text-white">Login</li>
        </Link>
        <Link to="/register">
          <li className="nav-item nav-link text-white">Register</li>
        </Link>
      </>
    );
  };

  const authenticatedNavBar = () => {
    return (
      <>
        <Link to="/">
          <li className="nav-item nav-link text-white">Home</li>
        </Link>
        <Link to="/clientprofile/:id">
          <li className="nav-item nav-link text-white">My Profile</li>
        </Link>
        {user.role === "admin" ? (
          <Link to="/profiles">
            <li className="nav-item nav-link text-white">Registered Users</li>
          </Link>
        ) : null}
        <Link to="/profiles">
          <li
            className="nav-item nav-link text-white "
            style={{ marginRight: "5vh", marginLeft: "43vh" }}
          >
            Driver Register
          </li>
        </Link>
        <Link to="/itemlist">
          <li className="nav-item nav-link text-white ">Marketplace</li>
        </Link>
        <span>
          {user.role === "User" ? (
            <h4 className="nav-item nav-link text-white">
              Welcome&nbsp;{user.name}
            </h4>
          ) : null}
        </span>
        <span>
          {user.role === "admin" ? (
            <li className="nav-item nav-link text-white ">
              Administrator&nbsp;{user.name}
            </li>
          ) : null}
        </span>
        <li class="nav-item">
          <button
            type="button"
            className="btn btn-link nav-item nav-link text-white"
            onClick={onClickLogoutHandler}
            style={{ marginRight: "1.5vh", marginLeft: "4.5vh" }}
          >
            Logout
          </button>
        </li>
        &nbsp;&nbsp;
        <div>
          {" "}
          <li class="nav-item">
            <a href="#" class="text-white ">
              <i class="fas fa-user text-white"></i>&nbsp;About us
            </a>
          </li>
          &nbsp; &nbsp;
          <li class="nav-item">
            <a href="#" class="text-white ">
              <i className="fas fa-envelope text-white" />
              &nbsp;Contact us
            </a>
          </li>
        </div>
      </>
    );
  };
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark mb-4 pb-4 pt-4 "
      style={{ marginRight: "-19.5vh", marginLeft: "-19.5vh", height: "15vh" }}
    >
      <div className="container-fluid" id="nav">
        <Link to="/">
          <div className="navbar-brand" style={{ marginLeft: "20vh" }}>
            <h2>ecoBin</h2>
          </div>
        </Link>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            {!isAuthenticated ? unauthenticatedNavBar() : authenticatedNavBar()}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

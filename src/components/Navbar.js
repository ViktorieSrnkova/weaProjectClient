import React, { useState, useEffect, Fragment } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./css/Navbar.css";
import { Button } from "./Button";
import useAuth from "../hooks/useAuth";
import useLogout from "../hooks/useLogout";

const Navbar = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();
  const logout = useLogout();

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const clickHandler = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => {
    setClick(false);
  };

  const showButtonHandler = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButtonHandler();
  }, []);

  window.addEventListener("resize", showButtonHandler);

  const signOut = async () => {
    await logout();
    navigate("/login");
    closeMobileMenu();
  };

  const authLinks = (
    <Fragment>
      <>
        <li className="nav-item">
          <Link
            to="/weaProjectClient"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            TODO LIST
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-links-mobile" onClick={signOut}>
            SIGN OUT
          </Link>
        </li>
      </>
    </Fragment>
  );

  const guestLinks = (
    <>
      <li className="nav-item">
        <Link
          to="/login"
          className="nav-links-mobile"
          onClick={closeMobileMenu}
        >
          SIGN IN
        </Link>
      </li>
    </>
  );

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link
            to="/weaProjectClient"
            className="navbar-logo"
            onClick={closeMobileMenu}
          >
            Todo List
          </Link>
          <div className="menu-icon" onClick={clickHandler}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {auth.user ? authLinks : guestLinks}
          </ul>
          {button && !auth?.user && (
            <Button buttonStyle="btn--outline">SIGN IN</Button>
          )}
          {button && auth?.user && (
            <Button onClick={signOut} buttonStyle="btn--outline">
              SIGN OUT
            </Button>
          )}
        </div>
      </nav>
    </>
  );
};
export default Navbar;

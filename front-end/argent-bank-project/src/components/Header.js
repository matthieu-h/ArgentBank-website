import React from "react";
import { NavLink } from "react-router-dom";
import { home, signIn } from "../routes";

const Header = () => {
  return (
    <div>
      <nav className="main-nav">
        <NavLink to={home} className="main-nav-logo">
          <img
            className="main-nav-logo-image"
            src="/img/argentBankLogo.png"
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        <div>
          <NavLink to={signIn} className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Header;

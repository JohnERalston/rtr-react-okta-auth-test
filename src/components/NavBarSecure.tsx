import React, { FC, useContext } from "react";
import NavBar from "react-bootstrap/NavBar";
import { Link } from "react-router-dom";
import { IEmptyProps } from "../models/IEmptyProps";
import { WhenMemberOfAny, AuthContext, IAuthContext } from "rtr-react-okta-auth";

const NavBarSecure: FC<IEmptyProps> = props => {
  const { login, logout, isAuthenticated, userDisplayName } = useContext<
    IAuthContext
  >(AuthContext);

  return (
    <NavBar bg="primary" variant="dark">
      <div className="container">
        <Link to="/" className="btn btn-primary">
          Home Page
        </Link>

        <WhenMemberOfAny groups={["standard", "admin"]}>
          <Link to="/standard" className="btn btn-primary">
            Standard Page
          </Link>
        </WhenMemberOfAny>
        <WhenMemberOfAny groups={["admin"]}>
          <Link to="/admin" className="btn btn-primary">
            Admin Page
          </Link>
        </WhenMemberOfAny>

        <NavBar.Toggle />
        <NavBar.Collapse className="justify-content-end">
          {!isAuthenticated && (
            <NavBar.Text>
              <span>Welcome Guest!</span>{" "}
              <button onClick={login} className="btn btn-link btnAlign">
                Login
              </button>
            </NavBar.Text>
          )}
          {isAuthenticated && (
            <NavBar.Text>
              <span>{userDisplayName}</span>{" "}
              <button className="btn btn-link btnAlign" onClick={logout}>
                Logout
              </button>
            </NavBar.Text>
          )}
        </NavBar.Collapse>
      </div>
    </NavBar>
  );
};

export default NavBarSecure;

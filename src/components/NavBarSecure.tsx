import React, { FC, useContext } from "react";
import NavBar from "react-bootstrap/NavBar";
import { Link } from "react-router-dom";
import { IEmptyProps } from "../models/IEmptyProps";
import {
  WhenMemberOfAny,
  AuthContext,
  IAuthContext,
  When
} from "@rent-the-runway/rtr-react-okta-auth";
import { getPermissions, permissions } from "../permissionsProvider";

interface Props {
  place: string;
}

const NavBarSecure: FC<Props> = ({ place }) => {
  const { login, logout, isAuthenticated, userDisplayName } = useContext<
    IAuthContext
  >(AuthContext);

  const { groups } = useContext<IAuthContext>(AuthContext);

  function hasPermission(permission: string) {
    const permissions = getPermissions(groups);
    return permissions.includes(permission);
  }

  const homeClazz = place === "home" ? "nav-link active" : "nav-link";
  const standardClazz = place === "standard" ? "nav-link active" : "nav-link";
  const adminClazz = place === "admin" ? "nav-link active" : "nav-link";
  const promoClazz = place === "promo" ? "nav-link active" : "nav-link";
  const orderClazz = place === "order" ? "nav-link active" : "nav-link";

  return (
    <div>
      <h5 className="mt-3 text-warning">Secure Navbar</h5>
      <span>
        These buttons are locked out via RBAC
      </span>

      <NavBar bg="primary" variant="dark">
        <div className="container">
          <ul className="nav">
            <li className="nav-item">
              <Link to="/" className={homeClazz}>
                Home Page
              </Link>
            </li>

            <WhenMemberOfAny groups={["standard", "admin"]}>
              <li className="nav-item">
                <Link to="/standard" className={standardClazz}>
                  Standard Page
                </Link>
              </li>
            </WhenMemberOfAny>
            
            <WhenMemberOfAny groups={["admin"]}>
              <li className="nav-item">
                <Link to="/admin" className={adminClazz}>
                  Admin Page
                </Link>
              </li>
            </WhenMemberOfAny>

            <When isTrue={() => hasPermission(permissions.canViewOrder)}>
              <li className="nav-item">
                <Link to="/view-order" className={orderClazz}>
                  canViewOrder
                </Link>
              </li>
            </When>

            <When isTrue={() => hasPermission(permissions.canIssuePromoCode)}>
              <li className="nav-item">
                <Link to="/issue-promo-code" className={promoClazz}>
                  canIssuePromoCode
                </Link>
              </li>
            </When>
          </ul>

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
    </div>
  );
};

export default NavBarSecure;

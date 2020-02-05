import React, { SFC } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Link } from "react-router-dom";
import { IEmptyProps } from "../models/IEmptyProps";
import Navbar from "react-bootstrap/NavBar";

interface Props {
  place: string;
}

const NavButtonsUnsecure: SFC<Props> = ({place}) => {


  const homeClazz = place === "home" ? "nav-link active" : "nav-link";
  const standardClazz = place === "standard" ? "nav-link active" : "nav-link";
  const adminClazz = place === "admin" ? "nav-link active" : "nav-link";
  const promoClazz = place === "promo" ? "nav-link active" : "nav-link";
  const orderClazz = place === "order" ? "nav-link active" : "nav-link";


  return (
    <div>
      <h5 className="mt-3 text-warning">Unsecure Navbar</h5>
      <span>For demo purposes, these buttons are always available. They are not locked out via RBAC</span>
      
      <Navbar bg="primary" variant="dark">
        <div className="container">
  
          <ul className="nav" aria-label="Basic example">
            <li className="nav-item">
              <Link to="/" className={homeClazz}>
                Home Page
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/standard" className={standardClazz}>
                Standard Page
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin" className={adminClazz}>
                Admin Page
              </Link>
            </li>
            
            <li className="nav-item">
              <Link to="/view-order" className={orderClazz}>
                canViewOrder
              </Link>
            </li>
          
            <li className="nav-item">
              <Link to="/issue-promo-code" className={promoClazz}>
                canIssuePromoCode
              </Link>
            </li>
            
          </ul>
        </div>
      </Navbar>
    </div>
  );
};

export default NavButtonsUnsecure;

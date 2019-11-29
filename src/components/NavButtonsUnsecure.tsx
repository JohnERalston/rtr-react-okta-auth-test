import React, { SFC } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Link } from "react-router-dom";
import { IEmptyProps } from "../models/IEmptyProps";

const NavButtonsUnsecure: SFC<IEmptyProps> = props => {
  return (
    <Jumbotron>
      <h3 className="text-warning">Unsecure</h3>
      <p>For demo purpose, these buttons are always available. They are not locked out via RBAC</p>
      <ButtonGroup aria-label="Basic example">
        <Link to="/" className="btn btn-secondary">
          Home Page
        </Link>
        <Link to="/standard" className="btn btn-secondary">
          Standard Page
        </Link>
        <Link to="/admin" className="btn btn-secondary">
          Admin Page
        </Link>
      </ButtonGroup>
    </Jumbotron>
  );
};

export default NavButtonsUnsecure;

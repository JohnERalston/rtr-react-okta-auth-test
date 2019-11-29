import React, { FC } from "react";
import { IEmptyProps } from "../models/IEmptyProps";
import Card from "react-bootstrap/Card";

const Admin: FC<IEmptyProps> = props => {
  return (
    <Card bg="danger" text="white">
      <Card.Header>Admin Area</Card.Header>
      <Card.Body>
        <Card.Title>Warning Sharp Tools!</Card.Title>
        <Card.Text>
          This page is where some serious damage can be done!
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Admin;

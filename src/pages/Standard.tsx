import React, { FC } from "react";
import { IEmptyProps } from "../models/IEmptyProps";
import Card from "react-bootstrap/Card";

const Standard: FC<IEmptyProps> = props => {
  return (
    <Card bg="info" text="white">
      <Card.Header>Standard Area</Card.Header>
      <Card.Body>
        <Card.Title>Where benign work happens</Card.Title>
        <Card.Text>
          This page is open to standard users upwards
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Standard;

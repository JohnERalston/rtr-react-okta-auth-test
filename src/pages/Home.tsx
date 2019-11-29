import React, { FC } from "react";
import { IEmptyProps } from "../models/IEmptyProps";
import Card from "react-bootstrap/Card";

const Home: FC<IEmptyProps> = props => {
  return (
    <Card bg="success" text="white">
      <Card.Header>Home</Card.Header>
      <Card.Body>
        <Card.Title>Welcome!</Card.Title>
        <Card.Text>
          This page is open to the public, unrestricted
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Home;

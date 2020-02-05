import React from "react";
import Card from "react-bootstrap/Card";
import Navigation from "../components/Navigation";

interface Props {}

const ViewOrder: React.FC<Props> = () => {
  return (
    <div>
      <Navigation place="order" />
      <Card bg="info" text="white">
        <Card.Header>View Order</Card.Header>
        <Card.Body>
          <Card.Title>Requires Permission</Card.Title>
          <Card.Text>viewOrder</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ViewOrder;

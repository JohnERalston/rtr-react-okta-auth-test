import React from "react";
import Card from "react-bootstrap/Card";
import Navigation from "../components/Navigation";

interface Props {}

const IssuePromoCode: React.FC<Props> = () => {
  return (
    <div>
      <Navigation place="promo" />
      <Card bg="info" text="white">
        <Card.Header>Issue Promo Code</Card.Header>
        <Card.Body>
          <Card.Title>Requires Permission</Card.Title>
          <Card.Text>canIssuePromoCode</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default IssuePromoCode;

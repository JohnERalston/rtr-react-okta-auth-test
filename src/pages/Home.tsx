import React, { FC, useContext } from "react";
import { IEmptyProps } from "../models/IEmptyProps";
import Card from "react-bootstrap/Card";
import { useWhen, IAuthContext, AuthContext, When } from "@rent-the-runway/rtr-react-okta-auth";
import { permissions, getPermissions } from "../permissionsProvider";
import Navigation from "../components/Navigation";

const Home: FC<IEmptyProps> = props => {
  const { when } = useWhen();
  const { groups } = useContext<IAuthContext>(AuthContext);

  const canIssueRefund = canRefund();

  function issueRefund() {
    if(!canRefund()) return;
    alert("issueing refund");
  }

  return (
    <div>
      <Navigation place="home" />
      <Card bg="success" text="white">
        <Card.Header>Home</Card.Header>
        <Card.Body>
          <Card.Title>Welcome!</Card.Title>
          <div>
            <Card.Text>This page is open to the public, unrestricted</Card.Text>
  
            <h4>
              The below button is only for users who have the permission
              'canRefund'
            </h4>
            <When isTrue={() => true} >
              <button
                className="btn btn-primary"
                onClick={issueRefund}
              >
                Refund
              </button>
            </When>
            <When isTrue={() => !true} >
              <button
                className="btn btn-primary"
              >
                Refund 
              </button>
            </When>
          </div>
        </Card.Body>
      </Card>
    </div>
  );

  function canRefund() {
    return when(() => hasPermission(permissions.canRefund));

    function hasPermission(permission: string) {
      const permissions = getPermissions(groups);
      return permissions.includes(permission);
    }
  }
};

export default Home;

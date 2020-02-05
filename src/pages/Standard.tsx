import React, { FC, useContext } from "react";
import { IEmptyProps } from "../models/IEmptyProps";
import Card from "react-bootstrap/Card";
import { useWhen, IAuthContext, AuthContext } from "@rent-the-runway/rtr-react-okta-auth";
import { getPermissions, permissions } from "../permissionsProvider";
import Navigation from "../components/Navigation";

const Standard: FC<IEmptyProps> = props => {
  const { when } = useWhen();
  const { groups } = useContext<IAuthContext>(AuthContext);

  const canIssueRefund = canRefund();

  function issueRefund() {
    alert('issueing refund');
  }

  return (
    <div>
      <Navigation place="standard" />
      <Card bg="info" text="white">
        <Card.Header>Standard Area</Card.Header>
        <Card.Body>
          <Card.Title>Where benign work happens</Card.Title>
        <div>
          <Card.Text>
            This page is open to standard users upwards
          </Card.Text>
  
          <h4>The below button is only for users who have the permission 'canRefund'</h4>
          <button disabled={!canIssueRefund} className="btn btn-primary" onClick={issueRefund} >Refund</button>
  
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

export default Standard;

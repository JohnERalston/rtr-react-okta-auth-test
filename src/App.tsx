import React, { FC, useContext } from "react";
import { IEmptyProps } from "./models/IEmptyProps";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Security, ImplicitCallback } from "@okta/okta-react";
import NavButtonsSecure from "./components/NavBarSecure";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Standard from "./pages/Standard";
import ViewOrder from "./pages/ViewOrder";
import NavButtonsUnsecure from "./components/NavButtonsUnsecure";
import {
  AuthContext,
  IAuthContext,
  AuthContextProvider,
  useAuthContextState,
  RouteWhenMemberOfAny,
  RouteWhenHasClaim,
  withAuthAwareness,
  RouteWhenHasAnyClaims,
  RouteWhenHasAllClaims,
  RouteWhen
} from "@rent-the-runway/rtr-react-okta-auth";

import OKTA_CONfIG from "./OKTA-CONSTANTS-REQUIRED";
import { getPermissions, permissions } from "./permissionsProvider";
import IssuePromoCode from "./pages/IssuePromoCode";

const authCallbackUrl = "/implicit/callback";
const config = {
  issuer: `https://dev-${OKTA_CONfIG.issuerId}.okta.com/oauth2/default`,
  redirectUri: `${window.location.origin}${authCallbackUrl}`,
  clientId: OKTA_CONfIG.clientId,
  pkce: true
};

const AppInner: FC<IEmptyProps> = () => {
  const authContextState = useContext<IAuthContext>(AuthContext);
  const availableGroups = authContextState.groups.join(", ");
  const availablePermissions = getPermissions(authContextState.groups).join(
    ", "
  );

  function hasPermission(permission: string) {
    const permissions = getPermissions(authContextState.groups);
    return permissions.includes(permission);
  }

  return (
    <div className="mb-5">
      
      <div className="container">

      <div className="border round p-1 mb-1">GROUPS: {availableGroups}</div>
        <div className="border round p-1 mb-1">
          PERMISSIONS: {availablePermissions}
        </div>

        <Route path="/" exact={true} component={Home} />

        <RouteWhenMemberOfAny
          groups={["standard", "admin"]}
          path="/standard"
          exact={true}
          component={Standard}
        />
        <RouteWhenMemberOfAny
          groups={["admin"]}
          path="/admin"
          exact={true}
          component={Admin}
        />

        <RouteWhen
          isTrue={() => hasPermission(permissions.canViewOrder)}
          path="/view-order"
          exact={true}
          component={ViewOrder}
        />

        <RouteWhen
          isTrue={() => hasPermission(permissions.canIssuePromoCode)}
          path="/issue-promo-code"
          exact={true}
          component={IssuePromoCode}
        />
      </div>
    </div>
  );
};

const AuthApp = withAuthAwareness(AppInner);

const App: FC<IEmptyProps> = props => {
  const authContextState = useAuthContextState();

  return (
    <AuthContextProvider value={authContextState}>
      <Router>
        <Security {...config}>
          <AuthApp {...props} />
          <Route path={authCallbackUrl} component={ImplicitCallback} />
        </Security>
      </Router>
    </AuthContextProvider>
  );
};

export default App;

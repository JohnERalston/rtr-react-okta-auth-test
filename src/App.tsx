import React, { FC, useContext } from "react";
import { IEmptyProps } from "./models/IEmptyProps";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { Security, ImplicitCallback } from "@okta/okta-react";
import NavButtonsSecure from "./components/NavBarSecure";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Standard from "./pages/Standard";
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
  RouteWhenHasAllClaims
} from "rtr-react-okta-auth";

import OKTA_CONfIG from './OKTA-CONSTANTS-REQUIRED';

const authCallbackUrl = "/implicit/callback";
const config = {
  issuer: `https://dev-${OKTA_CONfIG.issuerId}.okta.com/oauth2/default`,
  redirectUri: `${window.location.origin}${authCallbackUrl}`,
  clientId: OKTA_CONfIG.clientId,
  pkce: true
};

const AppInner: FC<IEmptyProps> = () => {
  const authContextState = useContext<IAuthContext>(AuthContext);
  const groups = authContextState.groups.join(", ");
  const Redir = function() {
    return <Redirect to="/yieks" />;
  }

  return (
    <>
      <NavButtonsSecure />
      <div className="container">
        <div>GROUPS: {groups}</div>
        <NavButtonsUnsecure />
        <Route path="/" exact={true} component={Home} />
        <RouteWhenMemberOfAny
          groups={["standard", "admin"]}
          path="/standard"
          exact={true}
          component={Standard}
        />
        {/* <RouteWhenMemberOfAny
          groups={["admin"]}
          path="/admin"
          exact={true}
          component={Admin}
        /> */}
        <RouteWhenHasAllClaims
          claims={["CanDoA"]}
          path="/admin"
          exact={true}
          component={Admin}
        />
      </div>
    </>
  );
};

const AuthApp = withAuthAwareness(AppInner, );

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

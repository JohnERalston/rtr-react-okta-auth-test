
## What
A create react app which demonstrates how to use `rtr-react-okta-auth` [here](https://github.com/RentTheRunway/rtr-react-okta-auth)

Enter the okta info specific to the Okta app in `OKTA-CONSTANTS-REQUIRED.tsx`

This example assumes that the Okta token is returning a scope called `groups`. This is a list of the Okta-user-groups the user is assigned to.

The code assumes the following group names:
`standard` and `admin`

It additionally assumes claims `CanDoA` and `CanDoB`

\
How to setup Okta is detailed in the docs for `rtr-react-okta-auth`

This app is a `create-react-app` app.

## The App
The same nav menu items are presented twice.
1. In the main nav bar, the nav items are hidden correctly as per the user-okta-groups (authorization) to which the authenticated user is assigned.
2. In the area below the nav bar, the same links are presented again but this time they're always rendered irrespective of authentication or authorization..
3. Clicking on them demonstrates what happens when an unauthenticated or unauthorized user exercises the links/routes.

### Groups
```JSX
<RouteWhenMemberOfAny
    groups={["standard", "admin"]}
    path="/admin"
    exact={true}
    component={Standard}
/>
```
```JSX
<RouteWhenMemberOfAll
    groups={["standard", "admin"]}
    path="/admin"
    exact={true}
    component={Standard}
/>
```
```JSX
<WhenMemberOfAny groups={["standard", "admin"]}>
    <div>Rendered only when user is authenticated and is a member of "standard" OR "admin"</div>
</WhenMemberOfAny>
```
```JSX
<WhenMemberOfAll groups={["standard", "admin"]}>
    <div>Rendered only when user is authenticated and is a member of "standard" AND "admin"</div>
</WhenMemberOfAll>
```

### Claims
Tweak the code to do this using claims
```JSX
<RouteWhenHasClaim
    claims={"CanDoA"}
    path="/admin"
    exact={true}
    component={Admin}
/>
```
```JSX
<RouteWhenHasAllClaims
    claims={["CanDoA", "CanDoB"]}
    path="/admin"
    exact={true}
    component={Admin}
/>
```
```JSX
<RouteWhenHasAnyClaims
    claims={["CanDoA", "CanDoB"]}
    path="/admin"
    exact={true}
    component={Admin}
/>
```
```JSX
<WhenHasClaim claim="CanDoA">
    <div>Will be rendered only when the user is authenticated and has a claim called "CanDoA"</div>
</WhenHasClaim>
```
```JSX
<WhenHasAnyClaims claims={["CanDoA", "CanDoB"]}>
    <div>Will be rendered only when user is authenticated and has claims called "CanDoA" OR "CanDoB"</div>
</WhenHasClaims>
```
```JSX
<WhenHasAllClaims claims={["CanDoA", "CanDoB"]}>
    <div>Will be rendered only when user is authenticated and has claims called "CanDoA" AND "CanDoB"</div>
</WhenHasAllClaims>
```
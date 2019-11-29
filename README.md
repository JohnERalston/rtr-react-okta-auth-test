
## What
A create react app which demonstrates how to use `rtr-react-okta-auth`

Enter the okta info specific to the Okta app in `OKTA-CONSTANTS-REQUIRED.tsx`

This example assumes that the Okta token is returning a scope called `groups`. This is a list of the Okta-user-groups the user is assigned to.

Furthermore, the code assumes the following group names:
`standard` and `admin`

How to setup Okta is detailed in the docs for `rtr-react-okta-auth`

This app is a `create-react-app` app.

## The App
The same nav menu items are presented twice.
1. In the main nav bar, the nav items are hidden correctly as per the user-okta-groups (authorization) to which the authenticated user is assigned.
2. In the area below the nav bar, the same links are presented again but this time they're always rendered irrespective of authentication or authorization..
3. Clicking on them demonstrates what happens when an unauthenticated or unauthorized user exercies the links/routes.


import React from "react";
import NavButtonsSecure from "./NavBarSecure";
import NavButtonsUnsecure from "./NavButtonsUnsecure";

interface Props {
  place: string;
}

const Navigation: React.FC<Props> = ({ place }) => {
  return (
    <div>
      <NavButtonsSecure place={place} />
      
        <NavButtonsUnsecure place={place} />
      
      <hr />
      <div className="container">Navigation is Above // Pages are Below</div>
      <hr />
    </div>
  );
};

export default Navigation;

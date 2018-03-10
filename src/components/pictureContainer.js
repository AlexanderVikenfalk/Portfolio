import React from "react";

export default function() {
  return (
    <div className="box picture">
      {" "}
      <img
        src={process.env.PUBLIC_URL + "/resources/images/portraitBig.png"}
        alt="portrait Alexander Vikenfalk"
      />
    </div>
  );
}

import React from "react";

import TextContainer from "./textContainer.js";

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

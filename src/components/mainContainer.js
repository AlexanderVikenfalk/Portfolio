import React from "react";

import HeaderContainer from "./headerContainer.js";
import PictureContainer from "./pictureContainer.js";
import Overlay from "./overlay.js";
import BackgroundOnSmall from "./backgroundOnSmall.js";
import TextContainer from "./textContainer.js";
import FooterContainer from "./footerContainer.js";

export default function() {
  return (
    <div className="wrapper">
      <HeaderContainer />
      <PictureContainer />
      <Overlay />
      <BackgroundOnSmall />
      <TextContainer />
      <FooterContainer />
    </div>
  );
}

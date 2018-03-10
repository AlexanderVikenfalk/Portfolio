import React from "react";

import BackgroundOnSmall from "./backgroundOnSmall.js";
import FooterContainer from "./footerContainer.js";
import HeaderContainer from "./headerContainer.js";
import Overlay from "./overlay.js";
import PictureContainer from "./pictureContainer.js";
import SidebarContainer from "./sidebarContainer.js"
import TextContainer from "./textContainer.js";

export default function() {
  return (
    <div className="wrapper">
  <SidebarContainer />
      <HeaderContainer />
      <PictureContainer />
      <BackgroundOnSmall />
      <TextContainer />
      <FooterContainer />
      <Overlay />
    </div>
  );
}

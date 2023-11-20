import React from "react";
import { useNavigate } from "react-router-dom";
import uuid from "react-uuid";

import * as St from "../styledComponents/StyledHeader";
import theme from "../styledComponents/theme/theme";
function Header() {
  const characters = theme.character;
  const navigate = useNavigate();

  console.log("Header:", "Render");
  return (
    <St.LayoutHeader>
      <St.LayoutNavBar>
        <St.LayoutLogoContainer onClick={() => navigate()}>
          <St.LayoutLogoImg />
        </St.LayoutLogoContainer>
        <St.LayoutBox>
          <St.LayoutSearchIcon />
          {characters.map((text) => (
            <St.LayoutItem key={uuid()}>{text}</St.LayoutItem>
          ))}
        </St.LayoutBox>
      </St.LayoutNavBar>
    </St.LayoutHeader>
  );
}

export default React.memo(Header);

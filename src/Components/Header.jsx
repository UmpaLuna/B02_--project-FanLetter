import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import uuid from "react-uuid";
// StyledComponent
import * as St from "../styledComponents/StyledHeader";
function Header() {
  const fanLetterData = useSelector((state) => state.fanLetterData);
  const characters = fanLetterData.utility.characters;
  const navigate = useNavigate();
  console.log("Header:", "Render");
  return (
    <St.LayoutHeader>
      <St.LayoutNavBar>
        <St.LayoutLogoContainer onClick={() => navigate("/")}>
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

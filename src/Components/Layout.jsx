import React from "react";
import StLayoutHeader, {
  StLayoutLogoContainer,
  StLayoutLogoImg,
} from "../styledComponents/StyledLayout";

function Layout() {
  return (
    <StLayoutHeader>
      <StLayoutLogoContainer>
        <StLayoutLogoImg />
      </StLayoutLogoContainer>
    </StLayoutHeader>
  );
}

export default Layout;

import React from "react";

import {
  StLayoutHeader,
  StLayoutLogoContainer,
  StLayoutLogoImg,
  StLayoutBox,
  StLayoutItem,
  StLayoutSearchIcon,
  StLayoutNavBar,
  StLayoutFoo,
  StLayoutFooContainer,
  StLayoutFooNoticeContainer,
  StLayoutFooNoticeItem,
  StLayoutFooBottom,
  StLayoutFooMain,
  StLayoutFooLogoBox,
  StLayoutFooLogoImg,
} from "../styledComponents/StyledLayout";

function Layout({ children }) {
  console.log(children);
  return (
    <>
      <StLayoutHeader>
        <StLayoutNavBar>
          <StLayoutLogoContainer>
            <StLayoutLogoImg />
          </StLayoutLogoContainer>
          <StLayoutBox>
            <StLayoutSearchIcon />
            <StLayoutItem>Dragon 보루</StLayoutItem>
            <StLayoutItem>Di지몬?</StLayoutItem>
            <StLayoutItem>내 마음체크</StLayoutItem>
            <StLayoutItem>루팡소녀</StLayoutItem>
          </StLayoutBox>
        </StLayoutNavBar>
      </StLayoutHeader>
      {children}
      <StLayoutFoo>
        <StLayoutFooContainer>
          <StLayoutFooNoticeContainer>
            <StLayoutFooNoticeItem color="#000" fontSize="20">
              모든 저작권은 Tooniverse에게
            </StLayoutFooNoticeItem>
            <StLayoutFooNoticeItem>
              손오공 언제 철들래;; 치치에게 감사해라
            </StLayoutFooNoticeItem>
            <StLayoutFooNoticeItem>
              어쨋건 내 유년시절 감사
            </StLayoutFooNoticeItem>
          </StLayoutFooNoticeContainer>
          <StLayoutFooBottom>
            <StLayoutFooMain>
              <StLayoutFooLogoBox>
                <StLayoutFooLogoImg />
              </StLayoutFooLogoBox>
            </StLayoutFooMain>
          </StLayoutFooBottom>
        </StLayoutFooContainer>
      </StLayoutFoo>
    </>
  );
}

export default Layout;

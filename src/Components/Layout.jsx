import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import uuid from "react-uuid";
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
  StLayoutFooAddr,
  StLayoutFooAddrList,
  StLayoutFooAddrListItem,
  StLayoutFooSpan,
  StLayoutFooStrong,
  StLayoutFooCopyRight,
  StLayoutFooCopyParagraph,
  StLayoutFooMediaBox,
  StLayoutFooSns,
  StLayoutFooLogoInstagram,
  StLayoutFooLogoFacebook,
  StLayoutFooLogoYoutube,
  StLayoutFooLogoTwitter,
} from "../styledComponents/StyledLayout";
import {
  useCustomDataActions,
  useCustomDataValue,
} from "../context/ContextAPI";

function Layout({ children }) {
  const navigate = useNavigate();
  const actionsWithData = useCustomDataActions();
  const { characters } = useCustomDataValue();
  const fooTitleArr = [
    "모든 저작권은 Tooniverse에게..",
    "손오공 언제 철들래;;; 치치에게 감사해라",
    "어쨋거나 내 유년시절 그대들에게 감사",
  ];
  const getLocalStorageItem = () => {
    const getData = localStorage.getItem("Tooniverse");
    const parseData = JSON.parse(getData);
    return parseData;
  };
  useEffect(() => {
    console.log("Layout useEffect :", "render");
    const getItem = getLocalStorageItem();
    if (getItem === null) return actionsWithData.utility.setLocalStorageData();

    actionsWithData.utility.initialSetValue(getItem);
  }, []);
  return (
    <>
      <StLayoutHeader>
        <StLayoutNavBar>
          <StLayoutLogoContainer onClick={() => navigate("/")}>
            <StLayoutLogoImg />
          </StLayoutLogoContainer>
          <StLayoutBox>
            <StLayoutSearchIcon />
            {characters.map((text) => (
              <StLayoutItem key={uuid()}>{text}</StLayoutItem>
            ))}
          </StLayoutBox>
        </StLayoutNavBar>
      </StLayoutHeader>

      {children}

      <StLayoutFoo>
        <StLayoutFooContainer>
          <StLayoutFooNoticeContainer>
            {fooTitleArr.map((text, i) =>
              i === 0 ? (
                <StLayoutFooNoticeItem key={uuid()} color="#000" fontSize="20">
                  {text}
                </StLayoutFooNoticeItem>
              ) : (
                <StLayoutFooNoticeItem key={uuid()}>
                  {text}
                </StLayoutFooNoticeItem>
              )
            )}
          </StLayoutFooNoticeContainer>
          <StLayoutFooBottom>
            <StLayoutFooMain>
              <StLayoutFooLogoBox>
                <StLayoutFooLogoImg />
              </StLayoutFooLogoBox>

              <StLayoutFooAddr>
                <StLayoutFooAddrList>
                  <StLayoutFooAddrListItem>
                    <StLayoutFooSpan>
                      시청자 상담실 (편성 문의 및 시청자 의견) :
                      <StLayoutFooStrong> 080-080-0780 </StLayoutFooStrong>
                    </StLayoutFooSpan>
                  </StLayoutFooAddrListItem>
                </StLayoutFooAddrList>

                <StLayoutFooAddrList>
                  <StLayoutFooAddrListItem>
                    <StLayoutFooSpan>
                      (주)씨제이이엔엠 대표이사 : 구창근, 윤상현
                    </StLayoutFooSpan>
                  </StLayoutFooAddrListItem>
                  <StLayoutFooAddrListItem>
                    <StLayoutFooSpan>
                      <StLayoutFooStrong $underline="true">
                        사업자정보확인
                      </StLayoutFooStrong>
                    </StLayoutFooSpan>
                  </StLayoutFooAddrListItem>
                </StLayoutFooAddrList>

                <StLayoutFooAddrList>
                  <StLayoutFooAddrListItem>
                    <StLayoutFooSpan>
                      본점 : (06761) 서울시 서초구 과천대로 870-13
                    </StLayoutFooSpan>
                  </StLayoutFooAddrListItem>
                  <StLayoutFooAddrListItem>
                    <StLayoutFooSpan>
                      사업장 : (03926) 서울시 마포구 상암산로 66
                    </StLayoutFooSpan>
                  </StLayoutFooAddrListItem>
                  <StLayoutFooAddrListItem $pseudo="true">
                    <StLayoutFooSpan>
                      사업자 등록번호 : 106-81-51510
                    </StLayoutFooSpan>
                  </StLayoutFooAddrListItem>
                  <StLayoutFooAddrListItem $pseudo="true">
                    <StLayoutFooSpan>
                      개인정보 보호책임자 : 강봉관
                    </StLayoutFooSpan>
                  </StLayoutFooAddrListItem>
                </StLayoutFooAddrList>
                <StLayoutFooCopyRight>
                  <StLayoutFooCopyParagraph>
                    ⓒ CJ ENM. All Rights Reserved.
                  </StLayoutFooCopyParagraph>
                </StLayoutFooCopyRight>

                {/* footer sns logo */}
                <StLayoutFooMediaBox>
                  <StLayoutFooSns>
                    <StLayoutFooLogoInstagram />
                  </StLayoutFooSns>
                  <StLayoutFooSns>
                    <StLayoutFooLogoFacebook />
                  </StLayoutFooSns>
                  <StLayoutFooSns>
                    <StLayoutFooLogoYoutube />
                  </StLayoutFooSns>
                  <StLayoutFooSns>
                    <StLayoutFooLogoTwitter />
                  </StLayoutFooSns>
                </StLayoutFooMediaBox>
                {/* footer sns logo */}
              </StLayoutFooAddr>
            </StLayoutFooMain>
          </StLayoutFooBottom>
        </StLayoutFooContainer>
      </StLayoutFoo>
    </>
  );
}

export default Layout;

// const setLocalStorageItem = () => {
//   localStorage.setItem("Tooniverse", JSON.stringify(lists));
// };

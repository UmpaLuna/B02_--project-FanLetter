import styled from "styled-components";
import {
  BsSearch,
  BsInstagram,
  BsFacebook,
  BsYoutube,
  BsTwitter,
} from "react-icons/bs";

console.log("StyledLayout");
export const StLayoutHeader = styled.header`
  color: #333;
`;

export const StLayoutLogoContainer = styled.div`
  padding: 0.5rem 1rem;
  height: 100%;
  width: 140px;
  cursor: pointer;
  &:hover {
    transition: all 0.5s;
    filter: brightness(0.5);
  }
  ${({ theme: { mediaQuery } }) => {
    return mediaQuery.md`
    width: 180px;
  `;
  }}
`;
export const StLayoutNavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem 1.2rem;
  ${({ theme: { mediaQuery } }) => mediaQuery.lg`
  max-width: 1366px;
  margin-left: auto;
  margin-right: auto;
  `}
`;
export const StLayoutBox = styled.ul`
  display: flex;
  height: 100%;
  align-items: center;
  gap: 0.8rem;
  padding: 0 1rem;
`;

export const StLayoutItem = styled.li`
  display: none;
  height: 100%;
  font-size: 1.4rem;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  padding: 1.5rem 1rem;
  cursor: pointer;
  &:hover {
    transition-property: background-color, color;
    transition-duration: 0.4s;
    background-color: #00aeef;
    color: #fff;
    border-radius: 12px;
  }
  ${({ theme: { mediaQuery } }) => {
    return mediaQuery.md`
    display: block;
  `;
  }}
`;
export const StLayoutSearchIcon = styled(BsSearch)`
  font-size: 24px;
  color: #00aeef;
  cursor: pointer;
  &:hover {
    transition: all 0.3s;
    color: #333;
  }
  ${({ theme: { mediaQuery } }) => mediaQuery.md`
  font-size : 26px;
  margin-right: 2.6rem;
  `}
`;

export const StLayoutFoo = styled.footer`
  background-color: #06ace9;
`;
export const StLayoutFooContainer = styled.div``;
export const StLayoutFooNoticeContainer = styled.ul`
  padding: 3.4rem 2.6rem 2.5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  color: #fff;
  line-height: 1.4;
  gap: 1rem;
  ${({ theme: { mediaQuery } }) => mediaQuery.md`
  flex-wrap : nowrap;
  gap: 10px;
  justify-content : space-between;
  max-width: 1366px;
  margin : 0 auto;
  `}
`;

export const StLayoutFooNoticeItem = styled.li`
  color: ${(props) => props.color};
  font-weight: bold;
  font-size: ${(props) => props.fontSize || 14}px;
`;

export const StLayoutFooBottom = styled.div`
  ${({ theme: { imgSrc } }) =>
    `background-image : url(${process.env.PUBLIC_URL + imgSrc.fooMb})`};
  background-repeat: repeat-x;
  ${({ theme: { mediaQuery } }) => mediaQuery.lg`

    ${({ theme: { imgSrc } }) =>
      `
      background-image : url(${process.env.PUBLIC_URL + imgSrc.fooPc})
    `}
  `}
`;
export const StLayoutFooMain = styled.div`
  padding: 0 16px;
  ${({ theme: { mediaQuery } }) => mediaQuery.md`
    max-width: 1366px;
    margin : 0 auto;
  `}
`;

export const StLayoutFooLogoBox = styled.div`
  max-width: 280px;
  margin-top: 12px;
  ${({ theme: { mediaQuery } }) => mediaQuery.md`margin-top:24px`}
  ${({ theme: { mediaQuery } }) => mediaQuery.lg`margin-top:36px`}
`;

export const StLayoutFooLogoImg = styled.img.attrs(({ theme: { imgSrc } }) => ({
  src: `${process.env.PUBLIC_URL + imgSrc.fooLogo}`,
}))`
  display: inline-block;
  width: 148px;
  height: 38px;
`;

export const StLayoutFooAddr = styled.div`
  margin-top: 20px;
`;
export const StLayoutFooAddrList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  line-height: 1.5;
  > :first-child {
    width: 100%;
  }
  ${({ theme: { mediaQuery } }) => mediaQuery.md`flex-wrap: nowrap;
  >:first-child {width: auto}`}
`;
export const StLayoutFooAddrListItem = styled.li`
  margin-top: 2px;
  font-size: 1.2rem;
  position: relative;
  ${(props) =>
    props.$pseudo &&
    `
    margin-left: 8px;
    padding-left: 9px;
    &::before {
    content: "";
    display: block;
    position: absolute;
    background-color: rgba(255, 255, 255, 0.3);
    top: 6px;
    left: 0px;
    width: 1px;
    height: 10px;
    }
  `}
`;
export const StLayoutFooSpan = styled.span`
  color: ${(props) => (props.white && `#fff`) || `rgba(255, 255, 255, 0.6)`};
`;
export const StLayoutFooStrong = styled.strong`
  color: #fff;
  text-decoration: ${(props) => props.$underline && `underline`};
  letter-spacing: -0.01rem;
`;

export const StLayoutFooCopyRight = styled(StLayoutFooAddr)`
  margin-top: 2.4rem;
  padding-bottom: 1rem;
`;
export const StLayoutFooCopyParagraph = styled(StLayoutFooSpan)`
  font-size: 1.4rem;
  color: #fff;
`;

export const StLayoutFooMediaBox = styled(StLayoutFooAddrList)`
  flex-wrap: nowrap;
  line-height: 1.3;
  & > :first-child {
    width: auto;
  }
  ${({ theme: { mediaQuery } }) => mediaQuery.lg`
    margin-top: 12px;
    gap: 0.4rem;
  `}
`;
export const StLayoutFooSns = styled.li`
  padding: 0.8rem 0.6rem;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    transition: all 0.5s;
    color: #fff;
  }
`;

const snsLogo = [BsInstagram, BsFacebook, BsYoutube, BsTwitter];

export const StLayoutFooLogoInstagram = styled(BsInstagram)`
  font-size: 24px;
`;
export const StLayoutFooLogoFacebook = styled(BsFacebook)`
  font-size: 24px;
`;
export const StLayoutFooLogoYoutube = styled(BsYoutube)`
  font-size: 24px;
`;
export const StLayoutFooLogoTwitter = styled(BsTwitter)`
  font-size: 24px;
`;

// attrs는 객체를 반환 해줘야 하므로 => 후에는 (),소괄호로 감싸준 중괄호로 반환 해야함
// 그런 후
export const StLayoutLogoImg = styled.img.attrs(({ theme: { imgSrc } }) => ({
  src: `${process.env.PUBLIC_URL + imgSrc.logo}`,
}))``;

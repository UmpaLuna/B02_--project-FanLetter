import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

export const StLayoutHeader = styled.header`
  color: #333;
`;

export const StLayoutLogoContainer = styled.div`
  padding: 0.5rem 1rem;
  height: 100%;
  width: 140px;
  cursor: pointer;
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
  /* display: none; */
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
  /* ${({ theme: { mediaQuery } }) => {
    return mediaQuery.md`
    display: block;
  `;
  }} */
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
export const StLayoutFooContainer = styled.div`
  padding: 2rem 0;
  ${({ theme: { mediaQuery } }) => mediaQuery.lg`
    max-width: 1366px;
    margin : 0 auto;
  `}
`;
export const StLayoutFooNoticeContainer = styled.ul`
  padding: 1.4rem 1.6rem 2.5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  color: #fff;
  line-height: 1.4;
  gap: 1rem;
  ${({ theme: { mediaQuery } }) => mediaQuery.md`
  flex-wrap : nowrap;
  gap: 0;
  justify-content : space-between;
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
`;

export const StLayoutFooLogoBox = styled.div`
  max-width: 280px;
`;

// export default StLayoutHeader;
export const StLayoutFooLogoImg = styled.img.attrs(({ theme: { imgSrc } }) => ({
  src: `${process.env.PUBLIC_URL + imgSrc.fooLogo}`,
}))`
  display: inline-block;
  width: 148px;
  height: 38px;
`;

// attrs는 객체를 반환 해줘야 하므로 => 후에는 (),소괄호로 감싸준 중괄호로 반환 해야함
// 그런 후
export const StLayoutLogoImg = styled.img.attrs(({ theme: { imgSrc } }) => ({
  src: `${process.env.PUBLIC_URL + imgSrc.logo}`,
}))``;

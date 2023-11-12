import styled from "styled-components";

const StLayoutHeader = styled.header`
  height: 40px;
  color: #333;
`;

export const StLayoutLogoContainer = styled.div`
  padding: 0.5rem 1rem;
  height: 100%;
  img {
    width: 120px;
    height: 100%;
  }
  ${(props) => console.log(props)}
`;

// attrs는 객체를 반환 해줘야 하므로 => 후에는 (),소괄호로 감싸준 중괄호로 반환 해야함
// 그런 후
export const StLayoutLogoImg = styled.img.attrs(({ theme: { imgSrc } }) => ({
  src: `${process.env.PUBLIC_URL + imgSrc.logo}`,
}))``;

export default StLayoutHeader;

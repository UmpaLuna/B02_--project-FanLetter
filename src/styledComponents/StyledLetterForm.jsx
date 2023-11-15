import styled from "styled-components";

export const StFanLetterContainer = styled.div`
  max-width: 768px;
  padding: 1rem;
  margin: 20px auto;
  margin-bottom: 30px;
  ${({ theme: { mediaQuery } }) => mediaQuery.lg`
    max-width: 1200px;
  `};
`;

export const StFanLetterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: -15px;
  text-align: center;
  justify-content: center;
`;

export const StFanLetter = styled.div`
  flex: 0 0 auto;
  width: calc(25% - (calc(15 / 3) * 2));
  margin: 0 calc(15 / 3) rem;
  padding: 0.5rem 2rem 1.5rem 2rem;
  border-radius: 1rem;
  display: flex;
  align-items: flex-start;
  gap: 14px;
  cursor: pointer;
  text-align: left;
  line-height: 1;
  align-items: center;
  &:hover {
    background-color: #06ace9;
  }
  &:hover * {
    color: #fff;
  }
`;

export const StComment = {
  Avatar: styled.img.attrs(({ theme: { imgSrc } }) => ({
    src: `${process.env.PUBLIC_URL + imgSrc.comment}`,
  }))`
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 50%;
  `,
  Author: styled.p`
    font-size: 1.8rem;
    font-weight: bold;
    padding: 0.5rem 0;
  `,
  Date: styled.span`
    font-size: 1.2rem;
  `,
  Text: styled.p`
    padding: 1rem 0;
    font-size: 1.6rem;
  `,
  Div: styled.div``,
};

export const StNothingLetter = styled.div`
  text-align: center;
  line-height: 1.4;
`;
export const StNothingLetterParagraph = styled.div`
  max-width: 330px;
  margin: 0 auto;
  font-size: 1.4rem;
  background-color: #00aeef;
  padding: 1.6rem 1rem;
  color: #fff;
  border-radius: 14px;
  ${({ theme: { mediaQuery } }) => mediaQuery.md`
    width: 330px;
  `}
`;

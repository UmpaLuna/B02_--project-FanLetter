import styled from "styled-components";

export const StFanLetterContainer = styled.div`
  max-width: 768px;
  padding: 4rem;
  margin: 20px auto;
  ${({ theme: { mediaQuery } }) => mediaQuery.lg`
    max-width: 1200px;
  `}
`;

export const StFanLetterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: -15px;
  text-align: center;
`;

export const StFanLetter = styled.div`
  flex: 0 0 auto;
  width: calc(25% - (calc(15 / 3) * 2));
  margin: 0 calc(15 / 3) rem;
  padding: 0.5rem 2rem 1.5rem 2rem;
  border-radius: 1rem;
  cursor: pointer;
`;

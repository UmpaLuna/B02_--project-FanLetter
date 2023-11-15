import styled from "styled-components";
import { StComment } from "./StyledLetterForm";
export const StDetailContainer = styled.div`
  width: 400px;
  margin: 60px auto;
  background-color: #00aeef;
  padding: 2.4rem 2.6rem;
  border-radius: 12px;
  ${({ theme: { mediaQuery } }) => mediaQuery.lg`
        width: 760px;
    `}
  >:first-child {
    padding: 0 1rem;
  }
  > div {
    padding: 1rem;
  }
  p,
  span {
    display: block;
    padding: 0.5rem;
  }
`;
export const StDetail = { ...StComment };

import React from "react";
import {
  StFanLetterContainer,
  StFanLetterWrapper,
  StFanLetter,
} from "../styledComponents/StyledLetterForm";

function LetterList({ list }) {
  return (
    <StFanLetterContainer>
      <StFanLetterWrapper>
        {list === undefined ? <h2>있어요</h2> : <h2>없어요</h2>}
      </StFanLetterWrapper>
    </StFanLetterContainer>
  );
}

export default LetterList;

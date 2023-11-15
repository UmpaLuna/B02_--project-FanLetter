import React from "react";
import {
  StFanLetterContainer,
  StFanLetterWrapper,
  StFanLetter,
  StNothingLetter,
  StNothingLetterParagraph,
  StComment,
} from "../styledComponents/StyledLetterForm";

function LetterList({ lists, tab, theme }) {
  const listArr = lists[theme.character[tab]];
  const doShowList = () => {
    return listArr.map((item) => {
      return (
        <StFanLetter>
          <StComment.Div>
            <StComment.Avatar />
          </StComment.Div>
          <StComment.Div>
            <StComment.Div>
              <StComment.Author>{item.name}</StComment.Author>
              <StComment.Date>{item.date}</StComment.Date>
            </StComment.Div>
            <StComment.Text>{item.text}</StComment.Text>
          </StComment.Div>
        </StFanLetter>
      );
    });
  };

  return (
    <StFanLetterContainer>
      {listArr === undefined ? (
        <StNothingLetter>
          <StNothingLetterParagraph>
            그대가 처음이네요.. <br />
            낭만 가득한 편지한통 써보세요
          </StNothingLetterParagraph>
        </StNothingLetter>
      ) : (
        <StFanLetterWrapper>{doShowList()}</StFanLetterWrapper>
      )}
    </StFanLetterContainer>
  );
}

export default React.memo(LetterList);

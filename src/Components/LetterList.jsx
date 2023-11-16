import React from "react";
import {
  StFanLetterContainer,
  StFanLetterWrapper,
  StFanLetter,
  StNothingLetter,
  StNothingLetterParagraph,
  StComment,
} from "../styledComponents/StyledLetterForm";
import uuid from "react-uuid";

function LetterList({ lists, tab, theme, navigate }) {
  const listArr = lists[theme.character[tab]];
  const navigateDetailPage = (id) => {
    console.log(id);
    navigate(`/detail/${id}`);
  };
  const doShowList = () => {
    return listArr.map((item) => {
      return (
        <StFanLetter
          key={uuid()}
          onClick={() => navigateDetailPage(`${item.target}/${item.id}`)}
        >
          <StComment.Div $img>
            <StComment.Avatar />
          </StComment.Div>
          <StComment.Div $paragraph>
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

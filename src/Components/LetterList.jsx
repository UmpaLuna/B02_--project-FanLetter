import React from "react";
import uuid from "react-uuid";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  StFanLetterContainer,
  StFanLetterWrapper,
  StFanLetter,
  StNothingLetter,
  StNothingLetterParagraph,
  StComment,
} from "../styledComponents/StyledLetterForm";

function LetterList() {
  console.log("LetterList : ", "Render");

  //Reducer
  const { tabReducer, fanLetterData } = useSelector((state) => state);
  const characters = fanLetterData.utility.characters;

  // Component
  const listArr = fanLetterData.value[characters[tabReducer]];
  console.log(fanLetterData.value);
  const navigate = useNavigate();
  const navigateDetailPage = (id) => {
    navigate(`/detail/${id}`);
  };

  const DoShowList = () => {
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
        <StFanLetterWrapper>{DoShowList()}</StFanLetterWrapper>
      )}
    </StFanLetterContainer>
  );
}

export default React.memo(LetterList);

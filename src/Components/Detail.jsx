import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { StDetailContainer, StDetail } from "../styledComponents/StyledDetail";
import { StInput } from "../styledComponents/StyledForm";
function Detail({ lists, setLocalStorageItem }) {
  const { member, id } = useParams();

  const target = lists[member].filter((el) => el.id === id);
  const [upDate, setUpdate] = useState(false);
  const onClickUpdateComment = () => {
    setUpdate(!upDate);
  };
  console.log("Detail :", "Render");
  return (
    <StDetailContainer>
      <StDetail.Div>
        <StDetail.Avatar />
      </StDetail.Div>
      <StDetail.Div>
        <StDetail.Div>
          <StDetail.Author>name : {target[0].name}</StDetail.Author>
          <StDetail.Date>{target[0].date}</StDetail.Date>
        </StDetail.Div>
        {!upDate ? (
          <StDetail.Text>내용 : {target[0].text}</StDetail.Text>
        ) : (
          <StInput as="textarea" value={target[0].text} />
        )}
        <button onClick={onClickUpdateComment}>업뎃</button>
      </StDetail.Div>
    </StDetailContainer>
  );
}

export default Detail;

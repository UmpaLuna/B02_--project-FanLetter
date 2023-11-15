import React from "react";
import { useParams } from "react-router-dom";
import { StDetailContainer, StDetail } from "../styledComponents/StyledDetail";
function Detail({ lists }) {
  const { member, id } = useParams();

  const target = lists[member].filter((el) => el.id === id);
  console.log(target);
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
        <StDetail.Text>내용 : {target[0].text}</StDetail.Text>
      </StDetail.Div>
    </StDetailContainer>
  );
}

export default Detail;

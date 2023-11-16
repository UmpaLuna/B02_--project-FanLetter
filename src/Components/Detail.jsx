import React, { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  StDetailContainer,
  StEditButton,
} from "../styledComponents/StyledDetail";
import { StInput } from "../styledComponents/StyledForm";
import { StComment as StDetail } from "../styledComponents/StyledLetterForm";
import { useCustomDataActions } from "../context/ContextAPI";

function Detail() {
  const { member, id } = useParams();
  const [edit, setEdit] = useState(false);
  const navigate = useNavigate();
  const editText = useRef();
  const actionsWidthData = useCustomDataActions();

  const target = actionsWidthData.filteringMember(member, id);
  const onClickEditComment = () => {
    setEdit(!edit);
  };
  const onClickUpdateComment = () => {
    console.log({ member, id });
    actionsWidthData.HandleEdit.useUpdateComment(editText, { member, id });
    setEdit(!edit);
  };
  const onClickRemoveComment = () => {
    actionsWidthData.HandleEdit.useRemoveComment({ member, id });
    navigate("/");
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
        {!edit ? (
          <StDetail.Text $detail>내용 : {target[0].text}</StDetail.Text>
        ) : (
          <StInput
            as="textarea"
            maxLength={100}
            defaultValue={target[0].text}
            ref={editText}
          />
        )}
        {!edit ? (
          <>
            <StEditButton.Edit onClick={onClickEditComment}>
              수정
            </StEditButton.Edit>
            <StEditButton.Remove onClick={onClickRemoveComment}>
              삭제
            </StEditButton.Remove>
          </>
        ) : (
          <StEditButton.Update onClick={onClickUpdateComment}>
            업뎃
          </StEditButton.Update>
        )}
      </StDetail.Div>
    </StDetailContainer>
  );
}

export default Detail;

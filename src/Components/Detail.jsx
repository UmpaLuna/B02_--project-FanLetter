import React, { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  StDetailContainer,
  StEditButton,
} from "../styledComponents/StyledDetail";
import { StInput } from "../styledComponents/StyledForm";
import { StComment as StDetail } from "../styledComponents/StyledLetterForm";
import { useCustomContex } from "../context/ContextAPI";

function Detail() {
  const { lists, setLists, setLocalStorageItem } = useCustomContex();
  const { member, id } = useParams();
  const [edit, setEdit] = useState(false);
  const navigate = useNavigate();
  const editText = useRef();

  const target = lists[member].filter((el) => el.id === id);
  const onClickEditComment = () => {
    setEdit(!edit);
  };
  const onClickUpdateComment = () => {
    if (editText.current.defaultValue === editText.current.value)
      return alert("수정안됨");
    const findedItemIndex = lists[member].findIndex(
      (finded) => finded.id === id
    );
    lists[member][findedItemIndex].text = editText.current.value;
    setLists((prev) => ({ ...prev }));
    setEdit(!edit);
  };
  const onClickRemoveComment = () => {
    const findedItemIndex = lists[member].findIndex(
      (finded) => finded.id === id
    );
    lists[member].splice(findedItemIndex, 1);
    setLists((prev) => ({ ...prev }));
    setLocalStorageItem();
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

import React, { useRef, useId, memo } from "react";
import {
  StForm,
  StFormContainer,
  StButton,
  StInputLabel,
  StInputContainer,
  StInput,
} from "../styledComponents/StyledForm";
import uuid from "react-uuid";

function Form({ theme, lists, setLists, setLocalStorageItem }) {
  const character = theme.character;
  const formRef = useRef({});
  const inputLabelNameId = useId();
  const inputLabelTextId = useId();
  const selectLabelId = useId();
  console.log("Form : Render");

  const checkValidForm = () => {
    const name = formRef.name.value;
    const text = formRef.text.value;

    if (name.trim() === "") return;
    if (text.trim() === "") return;
    setFanLetterData(name, text);
  };
  const setFanLetterData = (checkedName, checkedText) => {
    if (lists[formRef.target.value] === undefined) {
      lists[formRef.target.value] = [];
    }
    console.log(lists);
    const letter = {
      id: uuid(),
      name: checkedName,
      text: checkedText,
      date: new Date(),
    };
    lists[formRef.target.value].shift(letter);
    setLists({ ...lists });
    setLocalStorageItem();

    // formRef.name.value = "";
    // formRef.text.value = "";
  };
  return (
    <StFormContainer>
      <StForm ref={formRef}>
        <StInputContainer>
          <StInputLabel htmlFor={inputLabelNameId}>nickName</StInputLabel>
          <StInput
            ref={(ref) => {
              formRef["name"] = ref;
            }}
            id={inputLabelNameId}
            placeholder="20자만"
          />
        </StInputContainer>
        <StInputContainer>
          <StInputLabel htmlFor={inputLabelTextId}>Letter</StInputLabel>
          <StInput
            ref={(ref) => (formRef["text"] = ref)}
            id={inputLabelTextId}
            as="textarea"
            maxLength={100}
            placeholder="100자만"
          />
        </StInputContainer>
        <StInputContainer>
          <StInputLabel htmlFor={selectLabelId} $select>
            누구에게 보낼건가요??
          </StInputLabel>
          <StInput
            ref={(ref) => (formRef["target"] = ref)}
            as="select"
            id={selectLabelId}
            defaultValue="드래곤볼"
          >
            {character.map((item) => (
              <StInput key={uuid()} as="option" value={item}>
                {item}
              </StInput>
            ))}
          </StInput>
        </StInputContainer>
        <StButton onClick={checkValidForm}>보내기</StButton>
      </StForm>
    </StFormContainer>
  );
}

export default memo(Form);

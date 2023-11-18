import React, { useRef, useId, memo } from "react";
import uuid from "react-uuid";
import {
  StForm,
  StFormContainer,
  StButton,
  StInputLabel,
  StInputContainer,
  StInput,
} from "../styledComponents/StyledForm";
import {
  useCustomTabActionsContext,
  useCustomDataValue,
  useCustomDataActions,
} from "../context/ContextAPI";
import { useDispatch, useSelector } from "react-redux";
import { handleTabWithPayload } from "../reudx/modules/tabReducer";
function Form() {
  console.log("Form : Render");

  // ContextAPI
  const tab = useCustomTabValueContext();
  const tabActions = useCustomTabActionsContext();
  const { lists, characters } = useCustomDataValue();
  const actionsWidthData = useCustomDataActions();

  // Reducer
  const dispatch = useDispatch();

  const formRef = useRef({});
  const inputLabelNameId = useId();
  const inputLabelTextId = useId();
  const selectLabelId = useId();

  const checkValidForm = () => {
    const name = formRef.name;
    const text = formRef.text;

    if (name.value.trim() === "") return;
    if (text.value.trim() === "") return;

    setFanLetterData(name, text);
  };
  const setFanLetterData = () => {
    if (lists[formRef.target.value] === undefined) {
      lists[formRef.target.value] = [];
    }
    actionsWidthData.HandleEdit.useUpdateLists(formRef);
  };
  return (
    <StFormContainer>
      <StForm>
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
            onChange={
              //tabActions.eventChangeTab
              dispatch(handleTabWithPayload)
            }
          >
            {characters.map((item, i) => (
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

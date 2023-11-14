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

function Form({ lists, setList }) {
  let options = ["드래곤볼", "천사소녀네티", "신의괴도잔느", "디지몬", "단비"];
  const formRef = useRef({});
  const inputLabelNameId = useId();
  const inputLabelTextId = useId();
  const selectLabelId = useId();
  console.log("Form : Render");
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
            {options.map((item) => (
              <StInput key={uuid()} as="option" value={item}>
                {item}
              </StInput>
            ))}
          </StInput>
        </StInputContainer>
        <StButton>보내기</StButton>
      </StForm>
    </StFormContainer>
  );
}

export default memo(Form);

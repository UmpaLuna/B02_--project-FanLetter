import React, { memo } from "react";
import uuid from "react-uuid";

import {
  StNavContainer,
  StNavigateItem,
} from "../styledComponents/StyledNavigate";

import theme from "../styledComponents/theme/theme";
import { useDispatch, useSelector } from "react-redux";
import { changeTabNumber } from "../redux/modules/tabReducer";
function NavigateBar() {
  console.log("NaviageBar :", "Render");

  // Redux
  const { tabReducer } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <StNavContainer>
      {Object.keys(theme.imgSrc.mainImg).map((item, idx) => {
        return (
          <StNavigateItem
            onClick={() => {
              dispatch(changeTabNumber(idx));
            }}
            $isActive={tabReducer}
            $idx={idx}
            key={uuid()}
          >
            {item}
          </StNavigateItem>
        );
      })}
    </StNavContainer>
  );
}

export default memo(NavigateBar);

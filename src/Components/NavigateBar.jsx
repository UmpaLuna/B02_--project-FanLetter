import React, { memo } from "react";
import uuid from "react-uuid";

import {
  StNavContainer,
  StNavigateItem,
} from "../styledComponents/StyledNavigate";
import {
  useCustomTabActionsContext,
  useCustomTabValueContext,
} from "../context/ContextAPI";
import theme from "../styledComponents/theme/theme";
import { useDispatch, useSelector } from "react-redux";
import { changeTabNumber } from "../reudx/modules/tabReducer";
function NavigateBar() {
  console.log("NaviageBar :", "Render");
  // contextAPI
  const tabActions = useCustomTabActionsContext();
  const tab = useCustomTabValueContext();

  // Redux
  const { tabReducer } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <StNavContainer>
      {Object.keys(theme.imgSrc.mainImg).map((item, idx) => {
        return (
          <StNavigateItem
            onClick={() => {
              // tabActions.changeTab(idx);
              dispatch(changeTabNumber(idx));
            }}
            $isActive={
              // tab
              tabReducer
            }
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

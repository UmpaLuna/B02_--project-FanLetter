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

function NavigateBar() {
  console.log("NaviageBar :", "Render");

  const tabActions = useCustomTabActionsContext();
  const tab = useCustomTabValueContext();
  return (
    <StNavContainer>
      {Object.keys(theme.imgSrc.mainImg).map((item, idx) => {
        return (
          <StNavigateItem
            onClick={() => {
              tabActions.changeTab(idx);
            }}
            $isActive={tab}
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

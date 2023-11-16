import React, { memo } from "react";
import uuid from "react-uuid";

import {
  StNavContainer,
  StNavigateItem,
} from "../styledComponents/StyledNavigate";
import {
  useCustomContex,
  useCustomTabActionsContext,
  useCustomTabValueContext,
} from "../context/ContextAPI";

function NavigateBar() {
  console.log("NaviageBar :", "Render");

  const { theme } = useCustomContex();
  const actions = useCustomTabActionsContext();
  const tab = useCustomTabValueContext();
  return (
    <StNavContainer>
      {Object.keys(theme.imgSrc.mainImg).map((item, idx) => {
        return (
          <StNavigateItem
            onClick={() => {
              actions.changeTab(idx);
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

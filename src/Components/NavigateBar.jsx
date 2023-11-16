import React, { memo } from "react";
import uuid from "react-uuid";

import {
  StNavContainer,
  StNavigateItem,
} from "../styledComponents/StyledNavigate";
import { useCustomContex, useCustomTabContext } from "../context/ContextAPI";

function NavigateBar() {
  console.log("NaviageBar :", "Render");

  const { theme } = useCustomContex();
  const [tab, setTab] = useCustomTabContext();
  const handleClickTab = (idx) => {
    setTab(idx);
  };

  return (
    <StNavContainer>
      {Object.keys(theme.imgSrc.mainImg).map((item, idx) => {
        return (
          <StNavigateItem
            onClick={() => {
              handleClickTab(idx);
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

import React, { memo } from "react";
import {
  StNavContainer,
  StNavigateItem,
} from "../styledComponents/StyledNavigate";
import uuid from "react-uuid";

function NavigateBar({ theme, tab, setTab }) {
  console.log("NaviageBar :", "Render");
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
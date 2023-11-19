import React, { memo } from "react";
import uuid from "react-uuid";

import * as St from "../styledComponents/StyledNavigate";

import { useDispatch, useSelector } from "react-redux";
import { changeTabNumber } from "../redux/modules/tabReducer";
function NavigateBar() {
  console.log("NaviageBar :", "Render");

  // Redux
  const fanLetterData = useSelector((state) => state.fanLetterData);
  const tabReducer = useSelector((state) => state.tabReducer);
  const dispatch = useDispatch();
  const tabListsArr = fanLetterData.utility.characters;

  return (
    <St.NavContainer>
      {tabListsArr.map((item, idx) => {
        return (
          <St.NavigateItem
            onClick={() => {
              dispatch(changeTabNumber(idx));
            }}
            $isActive={tabReducer}
            $idx={idx}
            key={uuid()}
          >
            {item}
          </St.NavigateItem>
        );
      })}
    </St.NavContainer>
  );
}

export default memo(NavigateBar);

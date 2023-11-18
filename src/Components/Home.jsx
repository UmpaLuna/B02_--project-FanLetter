import React, { useEffect, useRef, useMemo } from "react";
import uuid from "react-uuid";

import { StMain, StMainDivImg } from "../styledComponents/StyledHome";
import Form from "./Form";
import LetterList from "./LetterList";
import NavigateBar from "./NavigateBar";
import { TabContextProvider, useCustomDataValue } from "../context/ContextAPI";
function Home() {
  console.log("Home :", "Render");
  const mainRef = useRef([]);
  const { characters } = useCustomDataValue();

  useEffect(() => {
    console.log("Home의 useEffect :", "mount || update");
    const moveSlide = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * 5);
      for (let i = 0; i < mainRef.current.length; i++) {
        mainRef.current[i].style.opacity = 0;
      }
      mainRef.current[randomIndex].style.opacity = 1;
    }, 2000);
    // unmount
    return () => {
      console.log("Home의  :", "unmount,clearFunction");
      clearInterval(moveSlide);
    };
  }, []);

  return (
    <>
      {/* navBar 클릭할 때마다 Home에서 전달한 state 값이 변경되므로 
     리렌더링 된다. 따라서 slide효과도 새롭게 reset 되므로 useMemo로 값을 기억해주어 해결?? 함 */}
      {useMemo(() => {
        return (
          <StMain>
            {characters.map((url, i) => {
              return (
                <StMainDivImg
                  ref={(el) => (mainRef.current[i] = el)}
                  key={uuid()}
                  $bgUrl={url}
                  $first={i === 0 && "true"}
                />
              );
            })}
          </StMain>
        );
      }, [characters])}

      {/* <TabContextProvider>
        <NavigateBar />
        <Form />
        <LetterList />
      </TabContextProvider> */}

      {/* Reducer */}
      <NavigateBar />
      <Form />
      <LetterList />
    </>
  );
}

export default React.memo(Home);

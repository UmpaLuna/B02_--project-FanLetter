import React, { useEffect, useRef, useState, useMemo } from "react";
import uuid from "react-uuid";
import { StMain, StMainDivImg } from "../styledComponents/StyledHome";
import Form from "./Form";
import LetterList from "./LetterList";
import NavigateBar from "./NavigateBar";

function Home({ theme, lists, setLists, setLocalStorageItem }) {
  console.log("Home :", "Render");
  const mainRef = useRef([]);
  const character = theme.character;
  const [tab, setTab] = useState(0);

  useEffect(() => {
    console.log("Home의 useEffect :", "mount || update");

    const moveSlide = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * 4);
      for (let i = 0; i < mainRef.current.length; i++) {
        mainRef.current[i].style.opacity = 0;
      }
      mainRef.current[randomIndex].style.opacity = 1;
    }, 2000);
    // unmount
    return () => {
      console.log("Home의 useEffect :", "unmount,clearFunction");
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
            {character.map((url, i) => {
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
      }, [character])}
      <NavigateBar theme={theme} tab={tab} setTab={setTab} />
      <Form
        theme={theme}
        lists={lists}
        setLists={setLists}
        setTab={setTab}
        setLocalStorageItem={setLocalStorageItem}
      />
      <LetterList lists={lists} theme={theme} tab={tab} />
    </>
  );
}

export default React.memo(Home);

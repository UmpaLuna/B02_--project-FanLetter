import React, { useCallback, useEffect, useState } from "react";
import GlobalStyle from "./styledComponents/GlobalStyle.js";
import Router from "./shared/Router.jsx";

function App() {
  console.log("App :", "Render");
  const [lists, setLists] = useState({});
  const [tab, setTab] = useState(0);

  const getLocalStorageItem = () => {
    const getData = localStorage.getItem("Tooniverse");
    const parseData = JSON.parse(getData);
    return parseData;
  };

  const setLocalStorageItem = useCallback(() => {
    return localStorage.setItem("Tooniverse", JSON.stringify(lists));
  }, [lists]);

  useEffect(() => {
    console.log("useEffect :", "render");
    const getItem = getLocalStorageItem();
    console.log(getItem);
    if (getItem === undefined || getItem === null) return setLocalStorageItem();
    else {
      return setLists(getItem);
    }
  }, []);
  console.log(lists);
  return (
    <>
      <GlobalStyle />
      <Router
        lists={lists}
        setLists={setLists}
        tab={tab}
        setTab={setTab}
        setLocalStorageItem={setLocalStorageItem}
      />
    </>
  );
}

export default App;

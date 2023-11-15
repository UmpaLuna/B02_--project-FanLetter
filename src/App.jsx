import React, { useEffect, useState } from "react";
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

  const setLocalStorageItem = () => {
    localStorage.setItem("Tooniverse", JSON.stringify(lists));
  };

  useEffect(() => {
    console.log("useEffect :", "render");
    const getItem = getLocalStorageItem();

    if (getItem === undefined || getItem === null) setLocalStorageItem();
    else {
      setLists(getLocalStorageItem());
    }
  }, []);

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

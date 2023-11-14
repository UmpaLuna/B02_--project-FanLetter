import React, { useEffect, useState } from "react";
import GlobalStyle from "./styledComponents/GlobalStyle.js";
import Router from "./shared/Router.jsx";

function App() {
  console.log("App :", "Render");
  const [lists, setLists] = useState({});
  const [tab, setTab] = useState(0);
  const getLocalStorageItem = () => {
    const getItem = localStorage.getItem("Tooniverse");
    if (getItem === null) return false;
    return JSON.stringify(getItem);
  };

  useEffect(() => {
    console.log("useEffect :", "render");

    const getItem = getLocalStorageItem();
    if (!getItem)
      return localStorage.setItem("Tooniverse", JSON.stringify(lists));
    if (getItem !== null) return setLists(getLocalStorageItem());
  }, [lists]);

  return (
    <>
      <GlobalStyle />
      <Router lists={lists} setLists={setLists} tab={tab} setTab={setTab} />
    </>
  );
}

export default App;

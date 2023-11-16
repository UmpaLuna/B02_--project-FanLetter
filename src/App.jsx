import React, { useCallback, useEffect, useState } from "react";
import GlobalStyle from "./styledComponents/GlobalStyle.js";
import Router from "./shared/Router.jsx";
import { MockStoreContext } from "./context/ContextAPI.js";
import { ThemeProvider } from "styled-components";

import theme from "./styledComponents/theme/theme";
function App() {
  console.log("App :", "Render");
  const [lists, setLists] = useState({});
  // const [tab, setTab] = useState(0);

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
    if (getItem === null) return setLocalStorageItem();
    setLists(getItem);
  }, []);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <MockStoreContext.Provider
          value={{ setLocalStorageItem, lists, setLists, theme }}
        >
          <Router />
        </MockStoreContext.Provider>
      </ThemeProvider>
    </>
  );
}

export default App;

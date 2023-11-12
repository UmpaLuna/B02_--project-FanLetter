import React, { useEffect, useState } from "react";

import GlobalStyle from "./styledComponents/GlobalStyle.js";

import Router from "./shared/Router.jsx";
import Layout from "./Components/Layout.jsx";
import { ThemeProvider } from "styled-components";
import theme from "./styledComponents/theme/theme.js";
function App() {
  console.log("App :", "Render");
  const [lists, setLists] = useState({});
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
      <ThemeProvider theme={theme}>
        <Layout />
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;

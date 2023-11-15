import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../Components/Detail";
import Home from "../Components/Home";
import Layout from "../Components/Layout";
import { ThemeProvider } from "styled-components";
import theme from "../styledComponents/theme/theme";

const Router = ({ lists, setLists, tab, setTab, setLocalStorageItem }) => {
  console.log("Router :", "Render");
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Layout>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  theme={theme}
                  lists={lists}
                  setLists={setLists}
                  tab={tab}
                  setTab={setTab}
                  setLocalStorageItem={setLocalStorageItem}
                />
              }
            />
            <Route path="detail/:id" element={<Detail />} />
            <Route path="*" element={<h1>404 찾을수 없으셈</h1>} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Router;

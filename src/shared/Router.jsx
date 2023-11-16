import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../Components/Detail";
import Home from "../Components/Home";
import Layout from "../Components/Layout";
import { LocalDataProvider } from "../context/ContextAPI";

const Router = () => {
  console.log("Router :", "Render");

  return (
    <BrowserRouter>
      <LocalDataProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path={`detail/:member/:id`} element={<Detail />} />
            <Route path="*" element={<h1>404 찾을수 없으셈</h1>} />
          </Routes>
        </Layout>
      </LocalDataProvider>
    </BrowserRouter>
  );
};

export default Router;

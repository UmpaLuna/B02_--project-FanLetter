import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../Components/Detail";
import Home from "../Components/Home";

const Router = ({ theme }) => {
  console.log("Router :", "Render");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home theme={theme} />} />
        <Route path="detail/:id" element={<Detail theme={theme} />} />
        <Route path="*" element={<h2>404</h2>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

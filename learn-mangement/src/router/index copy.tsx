//组件形式实现路由


import Home from "@/views/Home";
import About from "@/views/About";
import App from "@/App";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App></App>}>
                <Route path="/" element={<Navigate to="/Home"/>}></Route>
                <Route path="/Home" element={<Home></Home>}></Route>
                <Route path="/About" element={<About></About>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
);

export default Router;

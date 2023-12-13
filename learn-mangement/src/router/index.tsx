import React, { lazy } from "react";
import Home from "@/views/Home";
// import About from "@/views/About";
import { Navigate } from "react-router-dom";

const withLoadingComponent = (comp: JSX.Element) => (
    <React.Suspense fallback={<div>Loading</div>}>{comp}</React.Suspense>
);

//懒加载外面要包裹一层loading的加载组件
const About = lazy(() => import("@/views/About"));
const Page1 = lazy(() => import("@/views/Page1"));
const Page2 = lazy(() => import("@/views/Page2"));


const routes = [
    {
        path: "/",
        element: <Navigate to="/Page1" />
    },
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "/Page1",
                element: withLoadingComponent(<Page1 />)
            },
            {
                path: "/Page2",
                element: withLoadingComponent(<Page2 />)
            },
            {
                path: "/Page3/Tom",
                element: withLoadingComponent(<About />)
            }
        ],
    },
    {
        path: "*",
        element: <Navigate to="/Page1" />
    }

];

export default routes;

import React, { lazy } from "react";
import Home from "@/views/Home";
// import About from "@/views/About";
import { Navigate } from "react-router-dom";



const withLoadingComponent=(comp:JSX.Element)=>(
    <React.Suspense fallback={<div>Loading</div>}>
            {comp}
        </React.Suspense>
)

//懒加载外面要包裹一层loading的加载组件
const About =lazy(()=>import("@/views/About"))
const routes=[
    {
        path:'/',
        element:<Navigate to="/Home"/>
    },
    {
        path:'/Home',
        element: <Home></Home>
    },
    {
        path:'/About',
        element:withLoadingComponent(<About />)
    }
]


export default routes
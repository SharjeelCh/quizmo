import React from "react";
import Tabbar from "../Components/Tabbar";
import { Outlet, useLocation } from "react-router-dom";

function Main() {
 const location = useLocation();

 const hideTabbarPaths = [
  "/Login",
  "/Signup",
  "/Multi-choice",
  "/Rankings",
  "/True,False",
 ];

 const shouldHideTabbar = hideTabbarPaths.includes(location.pathname);

 return (
  <div className="main-container bg-app-bg px-22 md:px-24 lg:px-26 sm:px-22">
   <div className="h-full max-w-screen flex flex-col">
    {!shouldHideTabbar && <Tabbar />}
    <div className="flex-1 main-content">
     <Outlet />
    </div>
   </div>
  </div>
 );
}

export default Main;

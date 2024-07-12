import React from "react";
import Tabbar from "../Components/Tabbar";
import { Outlet } from "react-router-dom";

function Main() {
  return (
    <div className="flex-wrap bg-app-bg max-w-screen h-screen px-22 md:px-24 lg:px-26 sm:px-22">
      <div className="h-full max-w-screen flex flex-col">
        <Tabbar />
        <div className="flex-1 main-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Main;

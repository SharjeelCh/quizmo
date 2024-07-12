import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Tabbar from "../Components/Tabbar";
import Quizzes from "./Quizzes";
import Main from "./Main";
import Home from "./Home";
import Layout from "./Layout";
function NotFound() {
  return <h1>404 Not Found</h1>;
}

export default function Navigation() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/Quizzes" element={<Quizzes />} />
      </Route>
      <Route element={<NotFound />} />
    </Routes>
  );
}

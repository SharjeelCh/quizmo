import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Tabbar from "../Components/Tabbar";
import Quizzes from "./Quizzes";
import Main from "./Main";
import Home from "./Home";
import Layout from "./Layout";
import Login from "./Login";
import Signup from "./Signup";
import QuizPage from "./QuizPage";
function NotFound() {
  return <h1>404 Not Found</h1>;
}

export default function Navigation() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/QuizPage" element={<QuizPage />} />
        <Route path="/Quizzes" element={<Quizzes />} />
      </Route>
      <Route element={<NotFound />} />
    </Routes>
  );
}

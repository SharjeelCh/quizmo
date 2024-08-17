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
import { QuizMulti } from "./QuizMulti";
import Rankings from "./Rankings";
import Contact from "./Contact";
import AboutUs from "./About Us";
import { QuizTrue_False } from "./True,False";
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
    <Route path="/Multi-choice" element={<QuizMulti />} />
    <Route path="/Quizzes" element={<Quizzes />} />
    <Route path="/Rankings" element={<Rankings />} />
    <Route path="/Contact" element={<Contact />} />
    <Route path="/About Us" element={<AboutUs />} />
    <Route path="True,False" element={<QuizTrue_False />} />
   </Route>
   <Route element={<NotFound />} />
  </Routes>
 );
}

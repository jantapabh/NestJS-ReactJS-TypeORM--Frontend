import React, { useState, useEffect, Component } from "react";
import "./App.css";
import { Course } from "./interfaces";
import CourseItem from "./components/CourseItem";
import NewCourseForm from "./components/NewCourseForm";
import CoursesService  from './services/CoursesService'
import LoginForm from "./components/LoginForm";
import About from "./components/About";
import CourseReview from "./components/CourseReview";

const App = () => {

  return (
    <div className="App">
      <CourseReview />
      <LoginForm />
      <About />
    </div>
  );
};

export default App;

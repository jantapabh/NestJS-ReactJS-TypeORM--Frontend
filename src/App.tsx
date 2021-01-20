import React, { useState, useEffect, Component } from "react";
import "./App.css";
import { Course } from "./interfaces";
import CourseItem from "./components/CourseItem";
import NewCourseForm from "./components/NewCourseForm";

const App = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [formVisible, setFormVisble] = useState<boolean>(false);
  const [ newCoursesNumber, setNewCourseNumber] = useState<string>('22222')
  const [ newCoursesTitle, setNewCourseTitle] = useState<string>('2365')

  const toggleForm = () => {
    setFormVisble(true);
  };

  
  useEffect(() => {
    fetch("http://localhost:3001/courses")
      .then((res) => res.json())
      .then((courses) => {
        console.log(courses);
        setCourses(courses);
      });
   
  }, []);

  return (
    <div className="App">
      <ul>
        {courses.map((item) => (
          <CourseItem key={item.id} course={item} />
        ))}
      </ul>
      <button onClick={toggleForm}>New Course</button>
      {formVisible && (
        <NewCourseForm />
      )}
    </div>
  );
};

export default App;

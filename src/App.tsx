import React, { useState, useEffect, Component } from "react";
import "./App.css";
import { Course } from "./interfaces";
import CourseItem from "./components/CourseItem";
import NewCourseForm from "./components/NewCourseForm";
import { fetchCourses }  from './services/coursesService'

const App = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [formVisible, setFormVisble] = useState<boolean>(false);
  const [newCoursesNumber, setNewCourseNumber] = useState<string>("22222");
  const [newCoursesTitle, setNewCourseTitle] = useState<string>("2365");

  const toggleForm = () => {
    setFormVisble(true);
  };

  const fetchCourse = () => {
   fetchCourses()
  };

  const handleNewCourse = (course: Course) => {
    fetchCourse();
    setFormVisble(false);
  };
 
  useEffect(() => {
    fetchCourse();
  }, [courses]);

  return (
    <div className="App">
      <ul>
        {courses.map((item) => (
          <CourseItem key={item.id} course={item} />
        ))}
      </ul>
      <button onClick={toggleForm}>New Course</button>
      {formVisible && <NewCourseForm onNewCourseCreated={handleNewCourse} />}
    </div>
  );
};

export default App;

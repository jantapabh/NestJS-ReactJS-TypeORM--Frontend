import React, { useState, useEffect, Component } from "react";
import { Course } from "../interfaces";
import CourseItem from "./CourseItem";
import NewCourseForm from "./NewCourseForm";
import CoursesService  from '../services/CoursesService'
import LoginForm from "./LoginForm";
import About from "./About";

const CourseReview= () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [formVisible, setFormVisble] = useState<boolean>(false);
  const [newCoursesNumber, setNewCourseNumber] = useState<string>("22222");
  const [newCoursesTitle, setNewCourseTitle] = useState<string>("2365");

  const toggleForm = () => {
    setFormVisble(true);
  };

  const fetchCourse = () => {

    CoursesService.fetchCourses()
    .then(courses => {
      setCourses(courses)
    })

  };

  const handleNewCourse = (course: Course) => {
    fetchCourse();
    setFormVisble(false);
  };
 
  useEffect(() => {
    fetchCourse();
  }, [courses]);

  return (
    <div className="CourseReview">
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

export default CourseReview;

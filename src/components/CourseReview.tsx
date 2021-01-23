import React, { useState, useEffect, Component } from "react";
import { Course } from "../interfaces";
import CourseItem from "./CourseItem";
import NewCourseForm from "./NewCourseForm";
import CoursesService from "../services/CoursesService";
import LoginForm from "./LoginForm";
import About from "./About";
import AuthService from "../services/AuthService";
import { Redirect} from 'react-router-dom'

const CourseReview = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [formVisible, setFormVisble] = useState<boolean>(false);
  const [isUserLogIn, setUserLogin] = useState<boolean>(false);

  useEffect(() => {
    setUserLogin(AuthService.isUserLoggedIn());
  }, []);

  const toggleForm = () => {
    setUserLogin(AuthService.isUserLoggedIn());
    setFormVisble(true);
  };

  const fetchCourse = () => {
    CoursesService.fetchCourses().then((courses) => {
      setCourses(courses);
    });
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
      {(formVisible && isUserLogIn ) &&
      <NewCourseForm onNewCourseCreated={handleNewCourse} />
      }
      {
          (formVisible && (!isUserLogIn)) &&
        <Redirect to="/login" />
      }
    </div>
  );
};

export default CourseReview;

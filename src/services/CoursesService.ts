import React, {useEffect} from 'react'
import { Course, Review } from "../interfaces";
import { baseUrl } from "../config/const";

// Get All Data course
async function fetchCourses(): Promise<Course[]> {
  const result = await fetch(`${baseUrl}/courses`);
  const courses = result.json();
  return courses;
}


// create Course and Save Course
async function createCourse(newCourse: Course): Promise<Course | null> {
  const res = await fetch(`${baseUrl}/courses`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newCourse),
  });
  const saveNewCourse: Course = await res.json();
  if (saveNewCourse.id !== undefined) {
    return saveNewCourse;
  } else {
    return null;
  }
}

//สำหรับ fetch Review
async function fetchReview(courseId: string): Promise<Review[]> {
  const result = await fetch(`${baseUrl}/courses/${courseId}/reviews`);
  const review = await result.json();
  return review;
}

//สำหรับ save comment
async function saveReview(newReview: Review, courseId: string): Promise<Review | null> {
  const res = await fetch(`${baseUrl}/courses/${courseId}/reviews`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newReview),
  });
  const saveNewReview: Review = await res.json();
  if (saveNewReview.id !== undefined) {
    return saveNewReview;
  } else {
    return null;
  }
}



export default {
  fetchCourses,
  createCourse,
  fetchReview,
  saveReview
};

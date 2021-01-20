import { Course } from "../interfaces";
import { baseUrl } from '../config/const';

async function fetchCourses(): Promise<Course[]> {
  const result = await fetch(`${baseUrl}/courses`);
  const courses = result.json();
  return courses;
}

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

export default {
  fetchCourses,
  createCourse
};

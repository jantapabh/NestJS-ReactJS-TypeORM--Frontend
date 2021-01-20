import { Course } from "../interfaces";

export async function fetchCourses(): Promise<Course[]> {
  const result = await fetch("http://localhost:3001/courses");
  const courses = result.json();
  return courses;
}

import React, { useState } from "react";
import { Course, Review } from "../interfaces";
import CoursesService from "../services/CoursesService";

type CourseItemProps = {
  course: Course;
};

const CourseItem = (props: CourseItemProps) => {
  const course = props.course;

  const [reviewVisible, setReviewsVisible] = useState<boolean>(false);
  const [review, setReview] = useState<Review[]>([]);

  const handleReviewToggle = () => {
    if (!reviewVisible) {
      if (course.id) {
        CoursesService.fetchReview(course.id);
        setReviewsVisible(true);
      }
    } else {
      setReviewsVisible(false);
    }
  };

  return (
    <li>
      {course.number} {course.title}
      &nbsp; &nbsp; &nbsp;<button onClick={handleReviewToggle}>Toggle</button>
      {reviewVisible && <ul></ul>}
    </li>
  );
};

export default CourseItem;

import React, { useState } from "react";
import { Course, Review } from "../interfaces";
import CoursesService from "../services/CoursesService";

type CourseItemProps = {
  course: Course;
};

const CourseItem = (props: CourseItemProps) => {
  const course = props.course;

  const [reviewVisible, setReviewsVisible] = useState<boolean>(false);
  const [reviews, setReview] = useState<Review[]>([]);

  const handleReviewToggle = () => {
    if (!reviewVisible) {
      if (course.id) {
        CoursesService.fetchReview(course.id)
        .then(reviews => {
            setReview(reviews)
            setReviewsVisible(true);
            console.log(reviews);
            
        })
      }
    } else {
      setReviewsVisible(false);
    }
  };

  return (
    <li>
      {course.number} {course.title}
      &nbsp; &nbsp; &nbsp;<button onClick={handleReviewToggle}>
          {
              reviewVisible ? 'Hidden Reviews' : 'Show Reviews'
          }
      </button>
      {reviewVisible &&
       <ul>{reviews.map(review => (
          <li>{review.comment} ({review.score})</li>
      ))}
       {reviews.length === 0 && 
            (
                <li>No Result</li>
            )
      } 
     </ul>
}
    </li>
  );
    }

export default CourseItem;

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
  const [newReviewComments, setNewReviewComments] = useState<string>('');
  const [newReviewScore, setNewReviewScore] = useState<number>(1);

  const handleReviewToggle = () => {
    if (!reviewVisible) {
      if (course.id) {
        CoursesService.fetchReview(course.id).then((reviews) => {
          setReview(reviews);
          setReviewsVisible(true);
          console.log(reviews);
        });
      }
    } else {
      setReviewsVisible(false);
    }
  };

  const newReviewScoreOptions = [1,2,3,4,5];

  const handleReviewSave = () => {
     
    const newReviews: Review = {
        comment: newReviewComments,
        score: newReviewScore
    };

    CoursesService.saveReview(newReviews, course.id)

  }

  return (
    <li>
      {course.number} {course.title}
      &nbsp; &nbsp; &nbsp;
      <button onClick={handleReviewToggle}>
        {reviewVisible ? "Hidden Reviews" : "Show Reviews"}
      </button>
      {reviewVisible && (
        <div>
          <ul>
            {reviews.map((review) => (
              <li>
                {review.comment} ({review.score})
              </li>
            ))}
            {reviews.length === 0 && <li>No Result</li>}
          </ul>
          <b>New review: </b>
          <br />
          Comments: <input value={newReviewComments} onChange={(e) => {setNewReviewComments(e.target.value)}} />
          &nbsp;
          <select value={newReviewScore}
          onChange={(e) => {setNewReviewScore(parseInt(e.target.value))}}>
              {
                  newReviewScoreOptions.map(item => (
                      <option value={item}>{item}</option>
                  ))
              }
          </select>
          &nbsp;
          <button onClick={handleReviewSave}>Save</button>
        </div>
      )}
    </li>
  );
};

export default CourseItem;

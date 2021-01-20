import React, { useState, useEffect } from "react";
import { Course } from "../interfaces";

//สร้าง props สำหรับส่งไปยัง App
type NewCourseFormProps = {
  onNewCourseCreated?: (newCourse: Course) => void;
};

const NewCourseForm = (props: NewCourseFormProps) => {
  const [newCoursesNumber, setNewCourseNumber] = useState<number>(0);
  const [newCoursesTitle, setNewCourseTitle] = useState<string>("2365");

  const handleCoursesNumberChange = (e: any) => {
    setNewCourseNumber(e.target.value);
  };

  const handleCoursesTitleChange = (e: any) => {
    setNewCourseTitle(e.target.value);
  };

  const handleSave = () => {
    const newCourse = {
      number: newCoursesNumber,
      title: newCoursesTitle,
    };

    fetch("http://localhost:3001/courses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCourse),
    })
      .then((res) => res.json())
      .then((saveNewCourse) => {
        if (saveNewCourse.id !== undefined) {
          if (props.onNewCourseCreated !== undefined) {
            props.onNewCourseCreated(saveNewCourse);
            alert("Save Finish");
          }
        } else {
          alert("Save Error");
        }
      });
  };

  return (
    <div>
      Number :{" "}
      <input value={newCoursesNumber} onChange={handleCoursesNumberChange} />
      <br />
      Title :{" "}
      <input value={newCoursesTitle} onChange={handleCoursesTitleChange} />
      <br />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default NewCourseForm;

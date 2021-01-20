import React, { useState, useEffect } from "react";

type NewCourseForm = {};

const NewCourseForm = () => {
  const [newCoursesNumber, setNewCourseNumber] = useState<number>(0);
  const [newCoursesTitle, setNewCourseTitle] = useState<string>("2365");

  const handleCoursesNumberChange = (e: any) => {
    setNewCourseNumber(e.target.value);
  };

  const handleCoursesTitleChange = (e: any) => {
    setNewCourseTitle(e.target.value);
  };

  const handleSave = () => {
    alert("Finish!!!!");
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
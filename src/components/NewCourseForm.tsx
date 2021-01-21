import React, { useState, useEffect } from "react";
import { Course } from "../interfaces";
import CoursesService from "../services/CoursesService";
import { Formik, Form, Field, ErrorMessage } from "formik";

//สร้าง props สำหรับส่งไปยัง App
type NewCourseFormProps = {
  onNewCourseCreated?: (newCourse: Course) => void;
};

const NewCourseForm = (props: NewCourseFormProps) => {
  // const [newCoursesNumber, setNewCourseNumber] = useState<string>("22222");
  // const [newCoursesTitle, setNewCourseTitle] = useState<string>("2365");

  // const handleCoursesNumberChange = (e: any) => {
  //   setNewCourseNumber(e.target.value);
  // };

  // const handleCoursesTitleChange = (e: any) => {
  //   setNewCourseTitle(e.target.value);
  // };

  // const handleSave = () => {
  //   const newCourse = {
  //     number: newCoursesNumber,
  //     title: newCoursesTitle,
  //   };

  //   CoursesService.createCourse(newCourse).then((saveNewCourse) => {
  //     if (saveNewCourse !== null) {
  //       if (props.onNewCourseCreated !== undefined) {
  //         props.onNewCourseCreated(saveNewCourse);
  //         alert("Save Finish");
  //       }
  //     } else {
  //       alert("Save Error");
  //     }
  //   });
  // };

  return (
    <div>
      <h1>Any place in your app!</h1>
      <Formik
        initialValues={{ newCoursesNumber: "", newCoursesTitle: "" }}
        validate={(values) => {
          const errors: any = {};
          if (values.newCoursesTitle === "") {
            errors.newCourseTitle = "Course Title Not Validate";
          }
          if (values.newCoursesNumber === "") {
            errors.newCourseNumber = "Course Number Not Validate";
          } else if (!/^[0-9]+$/.test(values.newCoursesNumber)) {
            errors.newCourseNumber = "Course Number Format Error";
          }
          return errors;
        }}
        onSubmit={(values, actions) => {
          const newCourse = {
            number: values.newCoursesNumber,
            title: values.newCoursesTitle,
          };
          CoursesService.createCourse(newCourse).then((saveNewCourse) => {
            if (saveNewCourse !== null) {
              if (props.onNewCourseCreated !== undefined) {
                props.onNewCourseCreated(saveNewCourse);
                alert("Save Finish");
              }
            } else {
              alert("Save Error");
            }
            actions.setSubmitting(false);
          });
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            Number: <Field type="input" name="newCourseNumber" />
            <ErrorMessage name="newCourseNumber" component="div" />
            <br />
            Title: <Field type="input" name="newCourseTitle" />
            <ErrorMessage name="newCourseTitle" component="div" />
            <br />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default NewCourseForm;

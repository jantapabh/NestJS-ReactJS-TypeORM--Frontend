import React, { useState, useEffect } from "react";
import { Course } from "../interfaces";
import CoursesService from "../services/CoursesService";
import { Formik, Form, Field, ErrorMessage } from "formik";

//สร้าง props สำหรับส่งไปยัง App
type NewCourseFormProps = {
  onNewCourseCreated?: (newCourse: Course) => void;
};

const NewCourseForm = (props: NewCourseFormProps) => {

  return (
    <div>
      <Formik
        initialValues={{ newCourseNumber: "", newCourseTitle: "" }}
        validate={(values) => {
          const errors: any = {};

          if (values.newCourseTitle === "") {
            errors.newCourseTitle = "Course Title Not Validate";
          }
          
          if (values.newCourseNumber === "") {
            errors.newCoursesNumber = "Course Number Not Validate";
          } else if (!/^[0-9]+$/.test(values.newCourseNumber)) {
            errors.newCourseNumber = "Course Number Format Error";
          }
          return errors;
        }}
        onSubmit={(values, actions) => {
          const newCourse = {
            number: values.newCourseNumber,
            title: values.newCourseTitle,
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

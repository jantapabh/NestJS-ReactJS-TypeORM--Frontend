import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import AuthService from "../services/AuthService";
import { useHistory } from "react-router-dom";

type LoginFormProps = {
  loginCallback?: () => void;
};

const LoginForm = (props: LoginFormProps) => {
  const [errorLogin, setErrorLogin] = useState<any>("");
  const history = useHistory();
  return (
    <div className="LoginForm">
      <Formik
        initialValues={{ username: "", password: "" }}
        validate={(values) => {
          const errors: any = {};
          if (values.username === "") {
            errors.username = "Invalid username";
          }
          if (values.password === "") {
            errors.password = "Invalid Password";
          }
          return errors;
        }}
        onSubmit={async (values, actions) => {
          const result = await AuthService.loginUser(
            values.username,
            values.password
          );
          if (!result) {
            setErrorLogin("Login Error");
          } else {
            setErrorLogin("");
            if (props.loginCallback) {
              props.loginCallback();
            }
            history.push("/");
          }
          console.log(result);
          actions.setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            {errorLogin && <div>{errorLogin}</div>}
            <br />
            Login :
            <Field type="input" name="username" />
            <ErrorMessage name="username" component="div" />
            <br />
            Password :
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <br />
            <button disabled={isSubmitting}>Login</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;

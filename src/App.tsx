import React from "react";
import "./App.css";
import { Course } from "./interfaces";
import LoginForm from "./components/LoginForm";
import About from "./components/About";
import CourseReview from "./components/CourseReview";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/" className="Text-underline">Home</Link></li>
            <li><Link to="/login" className="Text-underline">Login</Link></li>
            <li><Link to="/about" className="Text-underline">About</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/login" component={LoginForm}>
            <LoginForm />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <CourseReview />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;

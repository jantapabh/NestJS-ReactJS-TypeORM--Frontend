import React, { useEffect, useState } from "react";
import "./App.css";
import { Course } from "./interfaces";
import LoginForm from "./components/LoginForm";
import About from "./components/About";
import CourseReview from "./components/CourseReview";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import AuthService from "./services/AuthService";

const App = () => {
  const [username, setUsername] = useState<string | null>(null);

  // setUsername(localStorage.username)

  useEffect(() => {
    setUsername(AuthService.getUsername());
  }, []);


  const handleUserLogin = () => {
    setUsername(AuthService.getUsername())
  }

  const logout = () => {
    AuthService.logoutUser()
    setUsername(null)
  }

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/" className="Text-underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/login" className="Text-underline">
                Login
              </Link>
            </li>
            <li>
              <Link to="/about" className="Text-underline">
                About
              </Link>
            </li>
            <li> <button onClick={logout}>Logout</button></li>
            {username && <li>USER : {username}</li>}
          </ul>
        </nav>
        <Switch>
          <Route path="/login" loginCallBack={handleUserLogin}>
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

import React, {useState, useEffect} from 'react';
import './App.css';
import Axios from 'axios';
import { Course } from './interfaces';
import CourseItem from './components/CourseItem';


const App = () => {

  const [courses, setCourses ] = useState<Course[]>([]);
  
  useEffect(() => {

   fetch('http://localhost:3001/courses')
   .then(res => res.json())
   .then( courses=> {
     console.log(courses);
     setCourses(courses)
   })
    
  }, [])

  return (
    <div className="App">
      <ul>
      {courses.map((item) => (
        
        <CourseItem key={item.id} course={item} />
  
      ))}
        </ul>
    </div>
  );
}

export default App;

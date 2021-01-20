import React, {useState, useEffect} from 'react';
import './App.css';
import Axios from 'axios';


const App = () => {

  const [courses, setCourses ] = useState('Hi Jantapa')
  
  useEffect(() => {

   Axios.get('http://localhost:3001/courses')
   .then(res => res.data)
   .then( obj => {
     console.log(obj);
   })
    
  }, [courses])

  return (
    <div className="App">
      <h1>{courses}</h1>
    </div>
  );
}

export default App;

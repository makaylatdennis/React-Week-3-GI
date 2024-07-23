import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ToDoContainer from './container';
import './index.css';
import TaskDetails from './taskdetails';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path="/" element={<ToDoContainer />} />
          <Route path="/task" element={<TaskDetails />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

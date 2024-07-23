import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import { useLocation } from 'react-router-dom';

const TaskDetails = () => {
// const location = useLocation()
//   const {task} = location.state
console.log(task)
return (
    <div>
      <h2>{task.task}</h2>
    </div>
  );
};

export default TaskDetails;

import React from 'react';
import classes from "./subforms.module.scss";
import CircularCheckboxGroup from '../FormComponents/CircularCheckboxGroup';

function Mcq() {
  return (
    <div className={classes.questionContainer}>
         <div className={classes.questionHeading}>
            MCQ <span>*</span>
         </div>
         <div>
         <CircularCheckboxGroup />
         </div>
    </div>
  )
}

export default Mcq
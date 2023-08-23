import React from 'react';
import classes from "./subforms.module.scss";
import { Input } from '@mui/material';

function ShortAnswer() {
  return (
    <div className={classes.questionContainer}>
         <div className={classes.questionHeading}>
         Short Answer <span>*</span>
         </div>
         <div>
         <Input 
          className={classes.shortAnswerInput} 
          placeholder="Your Answer" />
         </div>
         </div>
  )
}

export default ShortAnswer
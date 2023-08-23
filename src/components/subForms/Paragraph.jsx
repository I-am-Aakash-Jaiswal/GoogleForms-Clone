import React from 'react';
import classes from "./subforms.module.scss";
import { Input } from '@mui/material';

function Paragraph() {
  return (
    <div className={classes.questionContainer}>
         <div className={classes.questionHeading}>
         Paragraph <span>*</span>
         </div>
         <Input
          className={classes.paragraphAnswerInput} 
          placeholder="Your Answer" 
          multiline 
          />
         </div>
  )
}

export default Paragraph
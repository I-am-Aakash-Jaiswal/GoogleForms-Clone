import React from 'react';
import classes from "./subforms.module.scss";
import Linear from '../FormComponents/Linear';

function LinearScale() {
  return (
    <div className={classes.questionContainer}>
         <div className={classes.questionHeading}>
         Linear Scale <span>*</span>
         </div>
         <div className={classes.linearScaleWrapper}>
         <div className={classes.range}>Worst</div>
         <Linear/>
         <div className={classes.range}>Best</div>
        </div>
        </div>
  )
}

export default LinearScale
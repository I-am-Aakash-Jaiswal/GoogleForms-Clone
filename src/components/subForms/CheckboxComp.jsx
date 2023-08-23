import React, { useState } from 'react';
import classes from "./subforms.module.scss";
import { Checkbox, FormControlLabel, FormGroup, Container } from '@mui/material';
import CheckboxComponent from '../FormComponents/CheckBoxComponent';


function CheckboxComp() {
  
        const [checkedItems, setCheckedItems] = useState({ option1: false, option2: false, option3: false });
      
        const handleChange = (event) => {
          setCheckedItems({
            ...checkedItems,
            [event.target.name]: event.target.checked,
          });
        };
      
  return (
    <div className={classes.questionContainer}>
         <div className={classes.questionHeading}>
         Checkbox <span>*</span>
         </div>
         <CheckboxComponent/>
         </div>
  )
}

export default CheckboxComp;
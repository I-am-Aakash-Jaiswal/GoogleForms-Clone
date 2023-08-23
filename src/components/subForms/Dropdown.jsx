import React, { useState } from 'react';
import classes from "./subforms.module.scss";
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

function Dropdown() {
    const [selectedOption, setSelectedOption] = useState('Choose');

    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };

  return (
    <div className={classes.questionContainer}>
         <div className={classes.questionHeading}>
         Drop down <span>*</span>
         </div>
         <FormControl className={classes.dropdown}>
      <Select
        value={selectedOption}
        onChange={handleOptionChange}
        className={classes.selectDropDown}
      >
        <MenuItem value="Choose">Choose</MenuItem>
        <MenuItem value="option1">Option 1</MenuItem>
        <MenuItem value="option2">Option 2</MenuItem>
        <MenuItem value="option3">Option 3</MenuItem>
      </Select>
    </FormControl>
         </div>
    
  )
}

export default Dropdown
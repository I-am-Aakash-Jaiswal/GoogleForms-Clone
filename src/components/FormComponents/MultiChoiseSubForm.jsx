import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import classes from "../subForms/subforms.module.scss";
const MultiChoiceSubForms = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className={classes.eachRowLabel}>
      <FormControl component="fieldset" className={classes.FormControlClass}>
        <RadioGroup
          row
          aria-label="options"
          name="options"
          value={selectedValue}
          onChange={handleRadioChange} 
        className={classes.rowGroup}
        >
          <FormControlLabel
           className={classes.eachLabel}
            value="option1"
            control={<Radio />}
          />
          <FormControlLabel
           className={classes.eachLabel}
            value="option2"
            control={<Radio />}
          />
          <FormControlLabel
           className={classes.eachLabel}
            value="option3"
            control={<Radio />}
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default MultiChoiceSubForms;

import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import classes from "../subForms/subforms.module.scss";
import { FormGroup } from '@mui/material';
const TickboxSubForm = () => {
    const [checkedItems, setCheckedItems] = useState({ option1: false, option2: false, option3: false });

    const handleCheckboxChange = (event) => {
      setCheckedItems({
        ...checkedItems,
        [event.target.name]: event.target.checked,
      });
    };

  return (
    <div className={classes.eachRowLabel}>
      <FormControl component="fieldset" className={classes.FormControlClass}>
      <FormGroup row   className={classes.rowGroup}>
          <FormControlLabel
           className={classes.eachLabel}
            value="option1"
            control={<Checkbox checked={checkedItems.option1} onChange={handleCheckboxChange} name="option1" />}
          />
          <FormControlLabel
           className={classes.eachLabel}
            value="option2"
            control={<Checkbox checked={checkedItems.option2} onChange={handleCheckboxChange} name="option2" />}
          />
          <FormControlLabel
           className={classes.eachLabel}
            value="option3"
            control={<Checkbox checked={checkedItems.option3} onChange={handleCheckboxChange} name="option3" />}
          />
        </FormGroup>
      </FormControl>
    </div>
  );
};

export default TickboxSubForm;

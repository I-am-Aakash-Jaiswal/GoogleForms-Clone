import React, { useState } from 'react';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import "../subForms/subforms.module.scss"
const CheckboxComponent = () => {
  const [checkedItems, setCheckedItems] = useState({ option1: false, option2: false, option3: false });

  const handleCheckboxChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={<Checkbox checked={checkedItems.option1} onChange={handleCheckboxChange} name="option1" />}
        label="Option 1"
      />
      <FormControlLabel
        control={<Checkbox checked={checkedItems.option2} onChange={handleCheckboxChange} name="option2" />}
        label="Option 2"
      />
      <FormControlLabel
        control={<Checkbox checked={checkedItems.option3} onChange={handleCheckboxChange} name="option3" />}
        label="Option 3"
      />
    </FormGroup>
  );
};

export default CheckboxComponent;

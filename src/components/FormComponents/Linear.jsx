import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';

const Linear = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <FormControl component="fieldset">
        <RadioGroup
          row
          aria-label="options"
          name="options"
          value={selectedValue}
          onChange={handleRadioChange} 
  
        >
          <FormControlLabel
            labelPlacement ="top"
            value="option1"
            control={<Radio />}
            label="1"
          />
          <FormControlLabel
            labelPlacement ="top"
            value="option2"
            control={<Radio />}
            label="2"
          />
          <FormControlLabel
            labelPlacement ="top"
            value="option3"
            control={<Radio />}
            label="3"
          />
                  <FormControlLabel
            labelPlacement ="top"
            value="option4"
            control={<Radio />}
            label="4"
          />
                  <FormControlLabel
            labelPlacement ="top"
            value="option5"
            control={<Radio />}
            label="5"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default Linear;

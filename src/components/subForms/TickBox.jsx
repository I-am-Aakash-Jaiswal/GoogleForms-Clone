import React, { useState } from 'react';
import classes from "./subforms.module.scss";
import TickboxSubForm from '../FormComponents/TickboxSubForm';

function TickBox() {
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
            Tick Box Grid <span>*</span>
        </div>
        <div className={classes.multiChoiceMainContent}>
                <div className={classes.headingRow}>
                    <div></div>
                <div>
                    Column 1 
                </div>
                <div>
                    Column 2
                </div>
                <div>
                    Column 3
                </div>
                </div>
                <div className={classes.rows}>
                <div>Row 1</div>
                <TickboxSubForm/>
                </div>
                <div className={classes.rows}>
                <div>Row 2</div>
                <TickboxSubForm />
                </div>
                <div className={classes.rows}>
                <div>Row 3</div>
                <TickboxSubForm />
                </div>      

             </div>
    </div>
  )
}

export default TickBox
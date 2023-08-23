import React from "react";
import classes from "./subforms.module.scss";
import MultiChoiceSubForms from "../FormComponents/MultiChoiseSubForm"
import { FormControlLabel, Radio } from "@mui/material";
const MultiChoice =() =>{
    return (
        <div className={classes.questionContainer}>
             <div className={classes.questionHeading}>
                Multi Choice Grid <span>*</span>
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
                <MultiChoiceSubForms/>
                </div>
                <div className={classes.rows}>
                <div>Row 2</div>
                <MultiChoiceSubForms />
                </div>
                <div className={classes.rows}>
                <div>Row 3</div>
                <MultiChoiceSubForms />
                </div>      

             </div>
            
        </div>
    )
}

export default MultiChoice;
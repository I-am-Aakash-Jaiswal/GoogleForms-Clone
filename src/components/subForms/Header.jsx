import React from 'react'
import classes from "./subforms.module.scss";
import CloudDoneOutlinedIcon from '@mui/icons-material/CloudDone';

function Header() {
  return (
    <div className={classes.header}>
        <div className={classes.banner}></div>
        <div className={classes.heading}>Assignment Task</div>
        <div className={classes.line1}></div>
        <div className={classes.headerBody}>
            <div className={classes.bodyHeading}>
                <div className={classes.bodyleft}>
                <p className={classes.email}>j.akash0303@gmail.com<button className={classes.switchAcc} 
                onClick={()=>{
                 alert("Cannot change email")
                }}>Switch accounts</button></p>

                </div>
                <div className={classes.bodyRight}> 
                <CloudDoneOutlinedIcon style={{color: "#5f6368"}}/>
                </div>
            </div>
            <div className={classes.bodyContent}>
                The name and photo associated with your Google Account will be recorded when you upload files and submit this form. Your email address is not part of your response.
            </div>
        </div>
        <div className={classes.line1}></div>
        <div className={classes.footer}>
            <p className={classes.required}>* Indicates required question</p>
        </div>
    </div>
  )
}

export default Header
import React from 'react'
import classes from "./subforms.module.scss";
import { Button, LinearProgress } from '@mui/material';

function Footer() {
  return (
    <div className={classes.mainFooterContainer}>
        <div className={classes.mainFooterHeading}>
            <Button variant="contained" className={classes.submitButton}>Submit
            </Button>
                <div className={classes.pageNoIndicator}>
                <div  className={classes.pageNoProgress} ></div>
                <p> Page 1 of 1</p>
                </div>
            <Button variant= "text" className={classes.clearFormButton}>Clear Form</Button>
        </div>
        <div className={classes.mainFooterBody}>
        <div className={classes.neverSubmitPassword}>
            Never submit passwords through Google Forms
        </div>
        <div className={classes.thisContent}>
        This content is neither created nor endorsed by Google. <a href="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfj-lonvcKnXZz3cbydIaCqYtK7a4-g8pqsICFg7_sGGcODJQ/reportabuse?source=https://docs.google.com/forms/d/e/1FAIpQLSfj-lonvcKnXZz3cbydIaCqYtK7a4-g8pqsICFg7_sGGcODJQ/viewform">Report Abuse</a> - <a href="https://policies.google.com/terms">Terms of Service</a> - <a href="https://policies.google.com/privacy">Privacy Policy</a>
        </div>
        </div>
        <div className={classes.mainFooterFooter}>
            <p>Google <span>Forms</span></p>
        </div>
    </div>
  )
}

export default Footer
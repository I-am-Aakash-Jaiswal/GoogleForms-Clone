import React, { useState } from 'react';
import classes from "./subforms.module.scss";
import { Button, Typography } from '@mui/material';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };
  return (
    <div className={classes.questionContainer}>
         <div className={classes.questionHeading}>
         File Upload <span>*</span>
         </div>
         <div>
      <input
        style={{ display: 'none' }} // Hide the input element
        id="file-upload"
        type="file"
        onChange={handleFileChange}
      />
      <label htmlFor="file-upload">
        <Button variant="outlined"  className={classes.fileUploadButton}>
        <FileUploadOutlinedIcon className={classes.fileUploadIcon}/>
          Add File
        </Button>
      </label>
    </div>
        </div>
  )
}

export default FileUpload
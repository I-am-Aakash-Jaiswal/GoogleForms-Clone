import React, { useState } from 'react';
import classes from './subforms.module.scss';
import { Button } from '@mui/material';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    console.log('Selected file:', file);
  };

  return (
    <div className={classes.questionContainer}>
      <div className={classes.questionHeading}>
        File Upload <span>*</span>
      </div>
      <div>
        <input
          style={{ display: 'none' }}
          id="file-upload"
          type="file"
          accept=".pdf,.docx" // Specify allowed file types
          onChange={handleFileChange}
        />
        <label htmlFor="file-upload">
          <Button variant="outlined" component="span" className={classes.fileUploadButton}>
            <FileUploadOutlinedIcon className={classes.fileUploadIcon} />
            Add File
          </Button>
        </label>
      </div>
    </div>
  );
}

export default FileUpload;

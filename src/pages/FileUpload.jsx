import React, { useState } from 'react';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };


  return (
    <div style={{marginLeft:"520px"}}>
      <h1>File Upload</h1>
      <input type="file" onChange={handleFileChange} accept="image/*, video/*" />
      <h4>*Choose Image/Vidoe file for uploading</h4>
      {file && (
        <div>
          <h2>Preview:</h2>
          {file.type.startsWith('image/') ? (
            <img src={preview} alt="Uploaded" style={{ maxWidth: '100%', maxHeight: '400px' }} />
          ) : (
            <video controls style={{ maxWidth: '100%', maxHeight: '400px' }}>
              <source src={preview} type={file.type} />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      )}
    </div>
  );
};

export default FileUpload;

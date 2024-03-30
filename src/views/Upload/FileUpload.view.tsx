import React, { useState } from 'react';

const FileUpload = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event: any) => {
    const files = event.target.files;
    setSelectedFiles(files);
  };

  const handleUpload = () => {
    // Implement your file upload logic here
    // You can use FormData to send files to the server
    const formData = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append('files', selectedFiles[i]);
    }

    // Example: Send formData to the server using fetch
    fetch('https://tracker.oggyinu.com/api/v1/upload/multi', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response from the server
        console.log(data);
      })
      .catch(error => {
        // Handle error
        console.error('Error uploading files:', error);
      });
  };

  return (
    <div>
      <input
        type="file"
        multiple
        onChange={handleFileChange}
      />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default FileUpload;
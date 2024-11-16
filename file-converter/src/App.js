import React, { useState } from 'react';
import './index.css';

const App = () => {
  const [fileSelected, setFileSelected] = useState(false);
  const [fileName, setFileName] = useState('');

  const triggerFileUpload = () => {
    document.getElementById('fileInput').click();
  };

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setFileSelected(true);
      setFileName(event.target.files[0].name);
    }
  };

  const handleDelete = () => {
    setFileSelected(false);
    setFileName('');
  };

  return (
    <main>
      {/* First Screen - File Selection */}
      {!fileSelected ? (
        <section id="converter-interface">
          <div id="background">
            <img src="/images/1.png" alt="Background" />
          </div>
          <div id="rectangle" onClick={triggerFileUpload}></div>
          <input
            type="file"
            id="fileInput"
            style={{ display: 'none' }}
            accept=".txt, .csv, .json"
            onChange={handleFileChange}
          />
          <div id="title">
            <img src="/images/Ultimate File Converter (3).png" alt="Ultimate File Converter" />
          </div>
        </section>
      ) : (
        // Second Screen - File Selected
        <section id="second-screen">
          <div className="second-background">
            <img src="/images/2.png" alt="Background" />
          </div>
          <div className="group-6">
            <img src="/images/image.png" alt="Image 1" />
            <p className="demo-text">{fileName}</p>
          </div>
          <div className="delete-icon" onClick={handleDelete}>
            <img src="/images/delete-icon.png" alt="Delete Icon" />
          </div>
          <div className="rectangle-16"></div>
          <div className="rectangle-17"></div>
          <div className="title-image">
            <img src="/images/Ultimate File Converter (3).png" alt="Ultimate File Converter" />
          </div>
        </section>
      )}
    </main>
  );
};

export default App;

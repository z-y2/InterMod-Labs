import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
    

export const Home = () => {

  const navigate = useNavigate()

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

  const handleConvert = () => {
    navigate("/convert");
  };

  return (
    <main>

      {!fileSelected ? (
        <section id="converter-interface">
          <div id="background">
            <img src="/images/start_page.png" alt="Background" />
          </div>
          <div id="rec_file_input" onClick={triggerFileUpload}></div>
          <input
            type="file"
            id="fileInput"
            style={{ display: 'none' }}
            accept=".txt, .csv, .json, .png, .jpg, .jpeg, .heic"
            onChange={handleFileChange}
          />
          <div id="title">
            <img src="/images/bottom1.png" alt="Ultimate File Converter" />
          </div>
        </section>
      ) : (
        <section id="second-screen">
          <div className="second-background">
            <img src="/images/file_selection.png" alt="Background" />
          </div>
          <div className="file-name-container">
          <p className="demo-text">{fileName}</p>
          </div>
          <div className="delete-icon" onClick={handleDelete}>
            <img src="/images/delete_icon.png" alt="Delete Icon" />
          </div>
          <div className="rectangle-16"></div>
          <div className="rectangle-17"></div>
          <div className="title-image">
            <img src="/images/bottom1.png" alt="Ultimate File Converter" />
          </div>
          <div id="rec_convert_button" onClick={handleConvert}></div>
        </section>
      )}
    </main>
  );
}
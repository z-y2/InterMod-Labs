import React, { useState } from "react";
import { useNavigate } from "react-router-dom"

export const Home = () => {

  const navigate = useNavigate()

  const [fileNames, setFileNames] = useState([]);

  const triggerFileUpload = () => {
    document.getElementById('fileInput').click();
  };

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      const selectedFileNames = Array.from(event.target.files).map(file => file.name);
      setFileNames(selectedFileNames);
      navigate("/convert", { state: { fileNames: selectedFileNames } });
    }
  };

  return (
    <main>
      <section id="converter-interface">
        {/*TODO: replace with table*/}
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
      </section>
      <div id="title">
        <img src="/images/bottom1.png" alt="Ultimate File Converter" />
      </div>
    </main>
  );
}

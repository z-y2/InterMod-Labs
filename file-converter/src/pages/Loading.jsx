import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom"


export const Loading = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { state } = location;
  const { files } = state || {};


  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/download", { state: { files } });
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate, files]);

  return (
    <main>
      <section id="converter-interface">
        <div id="background">
          <img src="/images/basic_background.png" alt="Background" />
        </div>
      </section>

      <div id="title">
        <img src="/images/bottom2.png" alt="Ultimate File Converter" />
      </div>

      <div id="files-container">
        {files.map((file, index) => (
          <div key={index} className="file-item">
            <div className="file-icon">
              <img src="/images/document_icon.png" alt="File icon" />
            </div>
            <div className="file-details">
              <p>
                <strong>{file.name}</strong> ({file.extension})
              </p>
              <div className="progress-bar-container">
                <div
                  className="progress-bar"
                  style={{ animationDelay: `${index * 0.5}s` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </main>
  );

};


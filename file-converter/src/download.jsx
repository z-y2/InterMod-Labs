import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom"
    

export const Download = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { state } = location;
    const { files } = state || {};

    const handleConvertAgain = () => {
        navigate("/Home");
    }

    useEffect(() => {
        console.log(files);
    });

    return (
        <main>
            <section id="converter-interface">
                <div id="background">
                    <img src="/images/basic_background.png" alt="Background" />
                </div>
            </section>

            <div id="title">
                <img src="/images/bottom3.png" alt="Ultimate File Converter" />
            </div>

            <div id="files-container">
                {files.map((file, index) => (
                    <div key={index} className="file-item2">
                        <div className="file-conversion-row">
                            <div className="file-details">
                                <p>
                                    <strong>{file.name}</strong>
                                </p>
                                <div className="file-icon">
                                    <img src="/images/document_icon.png" alt="File icon" />
                                </div>
                            </div>

                            <div className="arrow">
                                <img src="/images/arrow.png" alt="Arrow" />
                            </div>

                            <div className="file-details">
                                <p>
                                    <strong>{file.name.split(".")[0] + file.extension}</strong> 
                                </p>
                                <div className="file-icon2">
                                    <img src="/images/document_icon.png" alt="After file icon" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="button-divider">
                    <button className="download-all-button">Download All</button>
                    <button className="download-all-button" onClick={handleConvertAgain}>Convert Again</button>
                </div>
            </div>

            
        </main>
    );
};

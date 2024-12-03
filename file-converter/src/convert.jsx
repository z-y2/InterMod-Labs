import React, { useState, useMemo} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const Convert = () => {
  const navigate = useNavigate();
  const location = useLocation();


  const [fileNames, setFileNames] = useState(location.state?.fileNames || []);

  const [batchMode, setBatchMode] = useState(false);

  const [selectedExtensions, setSelectedExtensions] = useState(
    fileNames.reduce((acc, fileName) => {
      acc[fileName] = ''; 
      return acc;
    }, {})
  );

  const [selectedCompression, setSelectedCompressions] = useState(
    fileNames.reduce((acc, fileName) => {
      acc[fileName] = false; 
      return acc;
    }, {})
  );

  const allExtensionsSelected = useMemo(() => {
    return fileNames.every(fileName => selectedExtensions[fileName][0] !== '');
  }, [fileNames, selectedExtensions]);

  const handleDelete = (file) => {
    setFileNames(fileNames.filter((name) => name !== file));
    setSelectedExtensions(prev => {
        const newExtensions = {...prev};
        delete newExtensions[file];
        return newExtensions;
    });
  }

  const handleConvert = () => {
    navigate("/loading", { 
        state: { 
          files: fileNames.map(fileName => ({
            name: fileName,
            extension: selectedExtensions[fileName],
            isCompressed: selectedCompression[fileName],
            batchMode: batchMode,
          }))
        } 
    });
  }

  const handleAddFile = (event) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const newFileNames = Array.from(files).map((file) => file.name);
      setFileNames((prevFileNames) => [...prevFileNames, ...newFileNames]);
    
        setSelectedExtensions(prev => {
            const newExtensions = {...prev};
            newFileNames.forEach(fileName => {
              newExtensions[fileName] = '';
            });
            return newExtensions;
        });
    }

    event.target.value = '';
  }

  const triggerFileUpload = () => {
    document.getElementById('fileInput').click();
  };

  const handleExtensionChange = (fileName, extension) => {
    setSelectedExtensions(prev => ({
      ...prev,
      [fileName]: extension
    }));
  };

  const handleCompressionChange = (fileName) => {
    setSelectedCompressions(prev => ({
      ...prev,
      [fileName]: !prev[fileName],
    }));
  };

  const handleBatchToggle = () => {
    setBatchMode(prev => !prev);
    console.log(batchMode);
  };

  return (
    <main>
        <section id='converter-interface'>
            <div id='background'>
                <img src="/images/choose_type_base.png" alt="Background"/>
            </div>
        </section>

        {!allExtensionsSelected ? (
            <div className='grey_arrow'>
                <img src='/images/arrow_grey.png' alt="Grey Arrow" />
            </div>
        ):(
            <div className="convert_rectangle" onClick={handleConvert}></div>
        )}


        <div className='blue_square'>
            <img src='/images/blue_square.png' alt="Blue square" />
        </div>


        <div className="file-name-container">
          <ul>
            {fileNames.map((fileName, index) => (
                <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
                    <span>{fileName}
                        <img 
                            src="/images/delete_icon.png" 
                            alt="Delete Icon" 
                            onClick={() => handleDelete(fileName)}
                            style={{
                                marginLeft: '10px',
                                cursor: 'pointer',
                                width: '20px', 
                                height: '20px',
                            }}
                            />
                    </span>
                    
                </li>
            ))}
          </ul>
        </div>
        <div className="drop_down_container">

          <div className="toggle-container">
            <div className="toggle-labels">
              <span className={batchMode ? "label-left" : ""}>Individual</span>
            </div>

            <label className="toggle-switch">
              <input type="checkbox" checked={batchMode} onChange={handleBatchToggle} />
              <span className="slider"></span>
            </label>
            
            <div className="toggle-labels">
              <span className={!batchMode ? "label-right" : ""}>Batch</span>
            </div>

          </div>


          {!batchMode ? (
            fileNames.map((fileName, index) => (
              <div key={index} className="file-extension-item">
                <label htmlFor={`extension-select-${index}`}>
                  {fileName}
                </label>

                <div className="checkbox-container">
                  <select
                    id={`extension-select-${index}`}
                    value={selectedExtensions[fileName]}
                    onChange={(e) => handleExtensionChange(fileName, e.target.value)}
                    className="file-extension-select"
                  >
                    <option value="" disabled>Select File Extension</option>
                    <option value=".jpg">.jpg</option>
                    <option value=".png">.png</option>
                    <option value=".pdf">.pdf</option>
                    <option value=".jpeg">.jpeg</option>
                  </select>

                  <input
                    type="checkbox"
                    id={`compress-${index}`} 
                    name={`compress-${index}`} 
                    onChange={() => handleCompressionChange(fileName)}
                  />
                  <label htmlFor={`compress-${index}`}>Compress</label>  {/* Match label to unique checkbox id */}
                </div>
              </div>
            ))
          ) : null }


        </div>
        <div className="rectangle-17" onClick={triggerFileUpload}></div>
            <input
                type="file"
                id="fileInput"
                style={{ display: 'none' }}
                accept=".txt, .csv, .json, .png, .jpg, .jpeg, .heic"
                onChange={handleAddFile}
            />
        <div id="title">
            <img src="/images/bottom1.png" alt="Ultimate File Converter" />
        </div>

    </main>
  );
};
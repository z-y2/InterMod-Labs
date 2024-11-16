import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Convert = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>New Page</h1>
      {/* Add a back button if needed */}
      <button onClick={() => navigate('/')}>
        Go Back
      </button>
    </div>
  );
};
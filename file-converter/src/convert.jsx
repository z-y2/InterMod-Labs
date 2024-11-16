import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Convert = () => {
  const navigate = useNavigate();

  return (
    <main>
        <button onClick={() => navigate('/')}>
        Go Back
        </button>
        <section id='converter-interface'>
            <div id='background'>
                <img src="/images/choose_type_base.png" alt="Background"/>
            </div>
        </section>
        <div className='grey_arrow'>
            <img src='/images/arrow_grey.png' alt="Grey Arrow" />
        </div>
        <div className='blue_square'>
            <img src='/images/blue_square.png' alt="Blue square" />
        </div>

    </main>
  );
};
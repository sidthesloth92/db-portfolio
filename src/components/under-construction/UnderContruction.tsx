import React from 'react';

/**
 * The under construction animation on the landing page.
 */
const UnderConstruction: React.FC = () => {
  return (
    <>
      <div className="uc-container">
        <div className="cat">
          <div className="head">
            <div className="ear-container">
              <div className="ear--left"></div>
              <div className="ear--right"></div>
            </div>
            <div className="eye-container">
              <div className="eye--left"></div>
              <div className="eye--right"></div>
            </div>
            <div className="nose"></div>
          </div>
          <div className="body"></div>
          <div className="hand--left"></div>
          <div className="hand--right"></div>
        </div>
        <div className="lap lap--left">
          <div className="lid"></div>
          <div className="keyboard"></div>
        </div>
        <div className="lap lap--center">
          <div className="lid"></div>
        </div>
        <div className="lap lap--right">
          <div className="lid"></div>
          <div className="keyboard"></div>
        </div>
      </div>
    </>
  );
};

export default UnderConstruction;

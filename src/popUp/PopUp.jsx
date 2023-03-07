import React, { useState, useEffect } from 'react';
import './style.css';

function Popup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('popup-open');
    } else {
      document.body.classList.remove('popup-open');
    }
  }, [isOpen]);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Pop-up</button>
      {isOpen && (
        <div className="popup">
          <h1>Pop-up Content</h1>
          <button onClick={() => setIsOpen(false)}>Close Pop-up</button>
        </div>
      )}
    </div>
  );
}

export default Popup;







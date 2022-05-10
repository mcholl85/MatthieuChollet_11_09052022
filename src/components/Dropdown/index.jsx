import { useState } from 'react';
import arrowOpen from '../../assets/img/arrow_open.png';
import arrowClose from '../../assets/img/arrow_close.png';

function Dropdown({ title, paragraph }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="dropdown">
      <div className="dropdown__heading" onClick={() => setIsOpen(!isOpen)}>
        <div className="dropdown__heading__title medium">{title}</div>
        {isOpen ? (
          <img src={arrowOpen} alt="open arrow" />
        ) : (
          <img src={arrowClose} alt="close arrow" />
        )}
      </div>
      {isOpen && <div className="dropdown__paragraph">{paragraph}</div>}
    </div>
  );
}

export default Dropdown;

import { useState } from 'react';
import arrowPrevious from '../../assets/img/arrow_previous.png';
import arrowNext from '../../assets/img/arrow_next.png';

function Carrousel({ pictures }) {
  const [index, updateIndex] = useState(0);

  return (
    <section className="carrousel">
      <button
        className="carrousel__next"
        onClick={() =>
          index === pictures.length - 1
            ? updateIndex(0)
            : updateIndex(index + 1)
        }
      >
        <img src={arrowNext} alt="next button" />
      </button>
      <button
        className="carrousel__prev"
        onClick={() =>
          index === 0
            ? updateIndex(pictures.length - 1)
            : updateIndex(index - 1)
        }
      >
        <img src={arrowPrevious} alt="previous button" />
      </button>
      <img
        className="carrousel__picture"
        src={pictures[index]}
        alt="Carrousel room"
      />
    </section>
  );
}

export default Carrousel;

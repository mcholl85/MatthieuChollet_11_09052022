import ratingEmpty from '../../assets/img/star_empty.png';
import ratingFull from '../../assets/img/star_full.png';

function Rate({ rating }) {
  return (
    <div className="rate">
      {[...Array(rating)].map((x, i) => (
        <img
          className="rate__star"
          key={`Full${i}`}
          src={ratingFull}
          alt="full star"
        />
      ))}
      {[...Array(5 - rating)].map((x, i) => (
        <img
          className="rate__star"
          key={`Empty${i}`}
          src={ratingEmpty}
          alt="empty star"
        />
      ))}
    </div>
  );
}

export default Rate;

import { Link } from 'react-router-dom';

function Article({ id, picture, title }) {
  return (
    <Link className="block" to={`/room/${id}`}>
      <figure className="room">
        <img className="room__image" src={picture} alt={title} />
        <figcaption className="room__title medium">{title}</figcaption>
      </figure>
    </Link>
  );
}

export default Article;

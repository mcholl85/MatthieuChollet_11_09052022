import { Link } from 'react-router-dom';

function Article({ id, picture, title }) {
  return (
    <Link className="block" to={`/room/${id}`}>
      <figure className="article">
        <img className="article__image" src={picture} alt={title} />
        <figcaption className="article__title medium">{title}</figcaption>
      </figure>
    </Link>
  );
}

export default Article;

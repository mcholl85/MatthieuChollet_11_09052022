import Article from '../../components/Article';
import Banner from '../../assets/img/Banner.png';
import Rooms from '../../datas/logements.json';

function Home() {
  return (
    <main className="main">
      <section className="banner">
        <img className="banner__image" src={Banner} alt="Banner Home" />
        <h1 className="banner__title medium">Chez vous, partout et ailleurs</h1>
      </section>
      <section className="gallery">
        {Rooms.map((room) => (
          <Article
            key={`${room.id}`}
            id={room.id}
            picture={room.pictures[0]}
            title={room.title}
          />
        ))}
      </section>
    </main>
  );
}

export default Home;

import { useParams } from 'react-router-dom';
import Error from '../../components/Error';
import Rooms from '../../datas/logements.json';
import Carrousel from '../../components/Carrousel';
import Tags from '../../components/Tags';
import Rate from '../../components/Rate';
import Infos from '../../components/Infos';
import Host from '../../components/Host';
import Dropdown from '../../components/Dropdown';

function Room() {
  const { idRoom } = useParams();
  const room = Rooms.find((room) => room.id === idRoom);

  return room ? (
    <main className="room">
      <div>
        <Carrousel pictures={room.pictures} />
        <section className="room__header">
          <div>
            <Infos title={room.title} location={room.location} />
            <Tags tags={room.tags} />
          </div>
          <div className="room__header__hosting">
            <Host name={room.host.name} picture={room.host.picture} />
            <Rate rating={parseInt(room.rating)} />
          </div>
        </section>
        <section className="room__dropdowns">
          <Dropdown title="Description" paragraph={room.description} />
          <Dropdown
            title="Équipements"
            paragraph={room.equipments.join('\n')}
          />
        </section>
      </div>
    </main>
  ) : (
    <Error />
  );
}

export default Room;

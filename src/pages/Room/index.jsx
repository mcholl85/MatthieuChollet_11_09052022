import { useParams } from 'react-router-dom';
import Error from '../../components/Error';
import Rooms from '../../datas/logements.json';
import Carrousel from '../../components/Carrousel';

function Room() {
  const { idRoom } = useParams();

  function getRoomById() {
    return Rooms.find((room) => room.id === idRoom);
  }

  return (
    <main id="room">
      {getRoomById() ? (
        <div>
          <Carrousel pictures={getRoomById().pictures} />
        </div>
      ) : (
        <Error />
      )}
    </main>
  );
}

export default Room;

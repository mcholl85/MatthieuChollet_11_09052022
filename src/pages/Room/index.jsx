import { useParams } from 'react-router-dom';
import Error from '../../components/Error';
import Rooms from '../../datas/logements.json';

function Room() {
  const { idRoom } = useParams();

  function getRoomById() {
    return Rooms.find((room) => room.id === idRoom);
  }

  return <main>{getRoomById() ? <h1>{idRoom}</h1> : <Error />}</main>;
}

export default Room;

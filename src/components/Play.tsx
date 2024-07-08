import { useMetronome } from '../context/Metronome';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';

function Play() {
  const { isRunning } = useMetronome();

  return (
    <FontAwesomeIcon
      icon={isRunning ? faPause : faPlay}
      className='self-center rounded-full text-center text-2xl w-6 p-2 transition duration-300 hover:bg-gray-300'
    />
  );
}

export default Play;

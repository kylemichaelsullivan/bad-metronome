import { useMetronome } from '../context/Metronome';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';

function Play() {
	const { isRunning } = useMetronome();

	return (
		<FontAwesomeIcon
			icon={isRunning ? faPause : faPlay}
			className='Play w-6 self-center rounded-full p-2 text-center text-2xl transition duration-300 hover:bg-gray-300'
		/>
	);
}

export default Play;

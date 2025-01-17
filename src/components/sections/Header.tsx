import { useMetronome } from '../../context/Metronome';

import Title from '../Title';
import Play from '../Play';

function Header() {
	const { isRunning, toggleIsRunning } = useMetronome();

	return (
		<header
			className='Header flex h-20 cursor-pointer items-center justify-center gap-1 border-b-2 border-black p-2'
			title={`Click to ${isRunning ? 'Stop' : 'Start'}`}
			onClick={toggleIsRunning}
		>
			<Title />
			<Play />
		</header>
	);
}

export default Header;

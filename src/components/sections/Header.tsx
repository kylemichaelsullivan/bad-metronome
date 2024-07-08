import { useMetronome } from '../../context/Metronome';

import Title from '../Title';
import Play from '../Play';

function Header() {
  const { isRunning, toggleIsRunning } = useMetronome();

  return (
    <header
      className='Header flex justify-center gap-1 cursor-pointer items-center border-black border-b-2 h-20 p-2'
      title={`Click to ${isRunning ? 'Stop' : 'Start'}`}
      onClick={toggleIsRunning}
    >
      <Title />
      <Play />
    </header>
  );
}

export default Header;

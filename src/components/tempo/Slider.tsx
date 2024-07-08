import Range from './Range';
import BPM from './BPM';

function Slider() {
  return (
    <div className='Slider flex gap-2 w-full p-2'>
      <Range />
      <BPM />
    </div>
  );
}

export default Slider;

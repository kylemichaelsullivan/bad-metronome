import Range from './Range';
import BPM from './BPM';

function Slider() {
	return (
		<div className='Slider flex w-full gap-2 p-2'>
			<Range />
			<BPM />
		</div>
	);
}

export default Slider;

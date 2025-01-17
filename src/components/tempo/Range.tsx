import { useMetronome } from '../../context/Metronome';

function Range() {
	const { bpm, handleBpmChange } = useMetronome();

	return (
		<input
			type='range'
			className='flex-1 cursor-pointer'
			name='BPM'
			min={5}
			max={250}
			step={5}
			title='Select Tempo'
			onChange={(e) => handleBpmChange(parseInt(e.target.value))}
			value={bpm}
			id='bpm-slider'
		/>
	);
}

export default Range;

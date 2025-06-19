import { useMetronome } from '../../context/Metronome';
import { bpm_min, bpm_max } from '../../defaults';

function BPM() {
	const { bpm, handleBpmChange } = useMetronome();
	return (
		<input
			type='number'
			className='BPM w-16 border border-black p-1'
			name='bpm-number'
			min={bpm_min}
			max={bpm_max}
			step={1}
			onChange={e => handleBpmChange(parseInt(e.target.value))}
			value={bpm}
			aria-label='Beats Per Minute'
			id='bpm-number'
		/>
	);
}

export default BPM;

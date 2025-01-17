import { useEffect, useState } from 'react';

import { useMetronome } from '../context/Metronome';

function Flasher() {
	const { bpm, isRunning, startIsRunning, setBpm } = useMetronome();
	const [isLit, setIsLit] = useState(false);
	const [taps, setTaps] = useState<number[]>([]);

	const averagesDenominator = 3; // lower: easier to set; higher: more timestamps
	const pulse = (60 / bpm) * 1000; // the metronome's period (in ms)

	const beep = () => {
		const context = new AudioContext();
		const o = context.createOscillator();
		o.type = 'sine';
		o.connect(context.destination);
		o.start();
		setTimeout(() => {
			o.stop();
		}, 100);
	};

	const flash = () => {
		setIsLit(true);
		setTimeout(() => {
			setIsLit(false);
		}, 100);
	};

	const beat = () => {
		beep();
		flash();
	};

	const moreThanASecond = (t: number) => t > 1000;
	const clearTaps = () => setTaps([]);

	const tryAverage = () => {
		const diffs = [];
		taps.splice(0, taps.length - (averagesDenominator ?? 3));

		if (taps.length > 1) {
			for (let i = 0; i <= taps.length - 2; i++) {
				const diff: number = +taps[i + 1] - +taps[i];
				if (moreThanASecond(diff)) {
					clearTaps();
				} else {
					diffs.push(diff);
					diffs.splice(0, diffs.length - 2);
					setBpm(
						Math.round(
							60000 /
								(diffs.reduce((accumulator, value) => accumulator + value, 0) /
									diffs.length),
						),
					);
				}
			}
		}
	};

	function handleMouseDown() {
		taps.push(Date.now());
		startIsRunning();
		setTaps(taps);
		tryAverage();
	}

	useEffect(() => {
		const interval = setInterval(() => {
			if (isRunning) {
				beat();
			}
		}, pulse);

		return () => clearInterval(interval);
	}, [isRunning, bpm]);

	return (
		<button
			type='button'
			className={`Flasher${
				isLit ? 'is-lit' : ''
			} h-14 w-14 cursor-pointer rounded-full border border-black hover:ring-2`}
			title='Tap Tempo'
			onMouseDown={handleMouseDown}
		></button>
	);
}

export default Flasher;

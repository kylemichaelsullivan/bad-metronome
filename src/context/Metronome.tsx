import {
	useState,
	useEffect,
	createContext,
	useContext,
	type Dispatch,
	type MouseEventHandler,
	type ReactNode,
	type SetStateAction,
} from 'react';

import { bpm_min, bpm_max } from '../defaults';

type MetronomeContextType = {
	bpm: number;
	isRunning: boolean;
	toggleIsRunning: MouseEventHandler<HTMLElement>;
	startIsRunning: () => void;
	handleBpmChange: (updated: number) => void;
	setBpm: Dispatch<SetStateAction<number>>;
};

const MetronomeContext = createContext<MetronomeContextType | undefined>(
	undefined,
);

type MetronomeProviderProps = {
	children: ReactNode;
};

export const MetronomeProvider = ({ children }: MetronomeProviderProps) => {
	const GETbpm = new URLSearchParams(window.location.search).get('bpm');

	const [bpm, setBpm] = useState(GETbpm ? parseFloat(GETbpm) : 120);
	const [isRunning, setIsRunning] = useState(false);

	const toggleIsRunning = () => setIsRunning(!isRunning);
	const startIsRunning = () => setIsRunning(true);
	const stopIsRunning = () => setIsRunning(false);

	const handleBpmChange = (updated: number) => {
		stopIsRunning();
		setBpm(updated);
	};

	useEffect(() => {
		const handleKeyUp = (e: KeyboardEvent) => {
			if (e.key === ' ' || e.key === 'Enter') {
				toggleIsRunning();
			} else if (e.key === 'Escape') {
				stopIsRunning();
			} else if (
				e.key === 'ArrowLeft' ||
				e.key === 'ArrowRight' ||
				e.key === 'ArrowUp' ||
				e.key === 'ArrowDown'
			) {
				let newBpm = bpm;
				if (e.key === 'ArrowLeft') {
					newBpm = bpm - 5 >= bpm_min ? bpm - 5 : bpm_min;
				} else if (e.key === 'ArrowRight') {
					newBpm = bpm + 5 <= bpm_max ? bpm + 5 : bpm_max;
				} else if (e.key === 'ArrowUp') {
					newBpm = bpm + 1 <= bpm_max ? bpm + 1 : bpm_max;
				} else if (e.key === 'ArrowDown') {
					newBpm = bpm - 1 >= bpm_min ? bpm - 1 : bpm_min;
				}
				handleBpmChange(newBpm);
			}
		};

		window.addEventListener('keyup', handleKeyUp);

		return () => {
			window.removeEventListener('keyup', handleKeyUp);
		};
	}, [bpm, isRunning]);

	return (
		<MetronomeContext.Provider
			value={{
				bpm,
				isRunning,
				toggleIsRunning,
				startIsRunning,
				handleBpmChange,
				setBpm,
			}}
		>
			{children}
		</MetronomeContext.Provider>
	);
};

export const useMetronome = (): MetronomeContextType => {
	const context = useContext(MetronomeContext);
	if (!context) {
		throw new Error('useMetronome must be used within a <MetronomeProvider />');
	}
	return context;
};

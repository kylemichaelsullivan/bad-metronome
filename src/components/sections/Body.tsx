import Flasher from '../Flasher';
import Slider from '../tempo/Slider';

function Body() {
	return (
		<main className='Body mx-auto flex max-w-screen-xl flex-col items-center justify-evenly p-4'>
			<Flasher />
			<Slider />
		</main>
	);
}

export default Body;

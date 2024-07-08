import Flasher from '../Flasher';
import Slider from '../tempo/Slider';

function Body() {
  return (
    <main className='Body flex flex-col justify-evenly items-center p-4'>
      <Flasher />
      <Slider />
    </main>
  );
}

export default Body;

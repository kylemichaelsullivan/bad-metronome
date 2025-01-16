import Flasher from '../Flasher';
import Slider from '../tempo/Slider';

function Body() {
  return (
    <main className='Body flex flex-col justify-evenly items-center max-w-screen-xl p-4 mx-auto'>
      <Flasher />
      <Slider />
    </main>
  );
}

export default Body;

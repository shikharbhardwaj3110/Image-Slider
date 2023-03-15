import './App.css';
import Slider from './components/Slider/Slider';
import images from './data.json'

function App() {

  console.log(images)

  return (
    <div className='app py-5'>
      <div className='slider-container container'>
        <Slider images={images} />
      </div>
    </div>
  );
}

export default App;

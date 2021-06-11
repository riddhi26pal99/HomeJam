import './App.css';
import HeroSlider from './Components/HeroSlider/HeroSlider';
import Navbar from './Components/Navbar/Navbar';
import Review from './Components/Reviews/Review';
import UpcomingShow from './Components/UpcomingShows/UpcomingShow';

function App() {
  return (
    <div className="App showcase ">
      <div className="showcase__top">
        <Navbar />
        <HeroSlider />
      </div>

      <UpcomingShow />
      <Review />
    </div>
  );
}

export default App;

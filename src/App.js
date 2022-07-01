import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/main.scss';
import Header from './components/common/Header';
import FeaturedSection from './components/pages/FeaturedSection';
import HeroSlider from './components/pages/HeroSlider';
function App() {
  return (
    <>
      <Header />
      <HeroSlider/>
      <FeaturedSection/>
    </>
  );
}

export default App;

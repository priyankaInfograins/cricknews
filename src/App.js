import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/main.scss';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Main from './components/pages/Main';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LiveScore from './components/pages/LiveScore';
import Gallery from './components/pages/Gallery';
import Team from './components/pages/Team';
import News from './components/pages/News';
import MatchSchedule from './components/pages/MatchSchedule';
function App() {
  return (
    <>
     <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about_us" element={<AboutUs />} />
          <Route path="/contact_us" element={<ContactUs />} />
          <Route path="/live_score" element={<LiveScore/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/team" element={<Team/>} />
          <Route path="/news" element={<News/>} />
          <Route path="/match_schedule" element={<MatchSchedule/>} />
         
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

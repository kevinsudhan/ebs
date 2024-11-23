import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Carousel />
        <Services />
        <WhyChooseUs />
      </div>
    </Router>
  );
}

export default App;

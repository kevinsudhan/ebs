import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PersonalLoan from './pages/PersonalLoan';
import HealthInsurance from './pages/HealthInsurance';
import EmiCalculator from './pages/EmiCalculator';
import ChatbotButton from './components/ChatbotButton';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personal-loan" element={<PersonalLoan />} />
          <Route path="/health-insurance" element={<HealthInsurance />} />
          <Route path="/emi-calculator" element={<EmiCalculator />} />
        </Routes>
        <ChatbotButton />
      </div>
    </Router>
  );
}

export default App;

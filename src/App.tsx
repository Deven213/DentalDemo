import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

// Placeholder for Gallery if not yet created, or create it next
const Gallery = () => <div className="container" style={{ padding: '5rem 0' }}><h1>Gallery Coming Soon</h1></div>;

function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/treatments" element={<Services />} /> {/* Reusing Services for now */}
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer style={{ backgroundColor: '#222', color: '#fff', padding: '2rem 0', textAlign: 'center' }}>
          <div className="container">
            <p>&copy; 2026 DentalCare Clinic. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;

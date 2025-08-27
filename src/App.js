import React from 'react'; 
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Doctors from './pages/Doctors';
import News from './pages/News';
import Appointment from './pages/Appointment';
import Index from './pages/Index';
import {BrowserRouter , Routes, Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/news" element={<News />} />
        <Route path="/index" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
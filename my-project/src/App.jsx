import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './components/Products/Products';
import Dana from './components/Products/Dana';
import Kuzu from './components/Products/Kuzu';
import Tavuk from './components/Products/Tavuk'; 
import Sakatat from './components/Products/Sakatat'; 
import Hero from './components/Hero';
import Mission from './components/Mission';
import Contact from './components/Contact'; // İletişim bileşenini import ettik
import AnimatedImage from './components/AnimatedImage'; 
import "./styles.css"


function App() {
  return (
    <Router>
      <AnimatedImage /> {/* AnimatedImage bileşeni buraya eklendi */}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/products" element={<Products />} /> 
        <Route path="/dana" element={<Dana />} />
        <Route path="/kuzu" element={<Kuzu />} /> 
        <Route path="/tavuk" element={<Tavuk />} /> 
        <Route path="/sakatat" element={<Sakatat />} /> 
        <Route path="/contact" element={<Contact />} /> {/* İletişim sayfası */}
      </Routes>
    </Router>
  );
}

export default App;

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import ContactoPage from './pages/ContactoPage';
import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import ServiciosPage from './pages/ServiciosPage';
import GaleriaPage from './pages/GaleriaPage';
import NovedadesPage from './pages/NovedadesPage';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>

        <Nav />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/nosotros" element={<NosotrosPage />} />
            <Route path="/servicios" element={<ServiciosPage />} />
            <Route path="/galeria" element={<GaleriaPage />} />
            <Route path="/novedades" element={<NovedadesPage />} />
            <Route path="/contacto" element={<ContactoPage />} />
          </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

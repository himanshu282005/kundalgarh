import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import SeasonDetails from './pages/SeasonDetails';
import Gallery from './pages/Gallery';
import About from './pages/About';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-white selection:bg-amber-500 selection:text-slate-950">
      <Navbar />
      <main className={`flex-1 ${isHome ? '' : 'pt-16 sm:pt-20'}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/season/:seasonId" element={<SeasonDetails />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppContent />
    </BrowserRouter>
  );
}

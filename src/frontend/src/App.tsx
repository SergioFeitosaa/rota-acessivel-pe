import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Needs } from './pages/Needs';
import { Preferences } from './pages/Preferences';
import { RoutesPage } from './pages/Routes';

function App() {
  return (
    <BrowserRouter>
      <div className="w-full h-screen bg-rota-light overflow-hidden text-rota-text font-sans selection:bg-rota-accent/30">
        <div className="max-w-md mx-auto h-full relative shadow-xl overflow-hidden bg-rota-light">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/necessidades" element={<Needs />} />
            <Route path="/preferencias" element={<Preferences />} />
            <Route path="/roteiros" element={<RoutesPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

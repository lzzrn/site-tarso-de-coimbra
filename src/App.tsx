import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { VLibras } from './components/VLibras';
import { Home } from './pages/Home';
import { CentroEducacional } from './pages/CentroEducacional';
import { Academico } from './pages/Academico';
import { NoticiasEventos } from './pages/NoticiasEventos';
import { Contato } from './pages/Contato';

function App() {
  return (
    <Router>
      <VLibras />
      <div className="relative min-h-screen flex flex-col overflow-hidden">
        {/* Background decorativo */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50/50" />
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-300/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
          <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-blue-100/40 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        </div>

        {/* Pattern overlay sutil */}
        <div className="fixed inset-0 -z-10 pattern-grid opacity-50" />

        <Header />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/centro-educacional" element={<CentroEducacional />} />
            <Route path="/academico" element={<Academico />} />
            <Route path="/noticias-e-eventos" element={<NoticiasEventos />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

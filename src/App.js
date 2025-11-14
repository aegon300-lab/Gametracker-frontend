import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import BibliotecaJuegos from './components/BibliotecaJuegos';
import FormularioJuego from './components/FormularioJuego';
import EstadisticasPersonales from './components/EstadisticasPersonales';

function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: 12 }}>
        <Link to="/" style={{ marginRight: 10 }}>Biblioteca</Link>
        <Link to="/nuevo" style={{ marginRight: 10 }}>Agregar</Link>
        <Link to="/estadisticas">Estadísticas</Link>
      </nav>
      <Routes>
        <Route path="/" element={<BibliotecaJuegos />} />
        <Route path="/nuevo" element={<FormularioJuego />} />
        <Route path="/estadisticas" element={<EstadisticasPersonales />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

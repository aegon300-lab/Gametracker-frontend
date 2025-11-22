import React, { useEffect, useState } from 'react';
import API from '../services/api';
import TarjetaJuego from './TarjetaJuego';

export default function BibliotecaJuegos() {
  const [juegos, setJuegos] = useState([]);

  useEffect(() => {
    API.get('/juegos').then(res => setJuegos(res.data)).catch(console.error);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Mi Biblioteca</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12 }}>
        {juegos.map(j => <TarjetaJuego key={j._id} juego={j} />)}
      </div>
    </div>
  );
}
//comit 3.1
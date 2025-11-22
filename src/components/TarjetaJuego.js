import React from 'react';

export default function TarjetaJuego({ juego }) {
  return (
    <div style={{ background: '#fff', padding: 12, borderRadius: 8, boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}>
      <img src={juego.portada || 'https://via.placeholder.com/200x120'} alt={juego.titulo} style={{ width: '100%', height: 120, objectFit: 'cover', borderRadius: 6 }} />
      <h3>{juego.titulo}</h3>
      <p>{juego.plataforma} • {juego.genero}</p>
      <p>{juego.horasJugadas || 0} hrs</p>
    </div>
  );
}
// comit 3.2

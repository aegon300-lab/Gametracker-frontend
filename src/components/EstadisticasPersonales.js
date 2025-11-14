import React, { useEffect, useState } from 'react';
import API from '../services/api';

export default function EstadisticasPersonales() {
  const [data, setData] = useState({ total: 0, completados: 0, horas: 0 });

  useEffect(() => {
    API.get('/juegos').then(res => {
      const juegos = res.data;
      const total = juegos.length;
      const completados = juegos.filter(j => j.completado).length;
      const horas = juegos.reduce((acc, j) => acc + (j.horasJugadas || 0), 0);
      setData({ total, completados, horas });
    }).catch(console.error);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Estadísticas</h2>
      <p>Total: {data.total}</p>
      <p>Completados: {data.completados}</p>
      <p>Horas jugadas: {data.horas}</p>
    </div>
  );
}

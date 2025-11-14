import React, { useState } from 'react';
import API from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function FormularioJuego() {
  const [form, setForm] = useState({ titulo: '', plataforma: '', genero: '', horasJugadas: 0, portada: '' });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/juegos', form);
      navigate('/');
    } catch (err) { console.error(err); alert('Error al guardar'); }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: 20, maxWidth: 600 }}>
      <h2>Agregar juego</h2>
      <input name="titulo" placeholder="Título" onChange={handleChange} value={form.titulo} required />
      <br />
      <input name="plataforma" placeholder="Plataforma" onChange={handleChange} value={form.plataforma} />
      <br />
      <input name="genero" placeholder="Género" onChange={handleChange} value={form.genero} />
      <br />
      <input name="horasJugadas" type="number" placeholder="Horas jugadas" onChange={handleChange} value={form.horasJugadas} />
      <br />
      <input name="portada" placeholder="URL portada" onChange={handleChange} value={form.portada} />
      <br />
      <button type="submit">Guardar</button>
    </form>
  );
}

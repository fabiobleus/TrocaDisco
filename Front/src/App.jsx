import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './componentes/footer';
import './App.css';

function App() {
  return (
    <div>
      {/* Cabeçalho ou outros componentes globais */}
      <h1>Bem-vindo ao Troca Disco</h1>
      <Outlet />
      {/* Rodapé */}
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './componentes/footer';
import './App.css';
import MagicSquare from './css/componentsResponsive';

function App() {
  return (
    <div>
      {/* Cabeçalho ou outros componentes globais */}
      <h1>Bem-vindo ao Troca Disco</h1>
      <Outlet />
      {/* Rodapé */}
      <Footer />
      <MagicSquare squareSize={{md:200, sm:100, xs:50}}/>
    </div>
  );
}

export default App;

// Foot
import React from 'react';
import './../componentes/footer.css'


function Footer() {
  return (
    <footer className="bg-light text-white mt-5">
      <div className="container-fluid bg-light text-white py-5">
        <div className="row">
          <div className="col-md-6">  
            <h5 className='colorName'>Troca Disco</h5>
            <p className='colorParagrafo'>Seu site favorito para trocar  discos em geral.</p>
          </div>

          
          <div className="col-md-3">
            <h5 className='colorLinks'>Links Rápidos</h5>
            <ul className="list-unstyled">
              <li><a className="colorLinks2" href="#"style={{ textDecoration: 'none'}}>Início</a></li>
              <li><a className="colorLinks2" href="#"style={{ textDecoration: 'none'}}>Produtos</a></li>
              <li><a className= "colorLinks2" href="#"style={{ textDecoration: 'none'}}>Sobre nós</a></li>
              <li><a className="colorLinks2" href="#"style={{ textDecoration: 'none'}}>Contato</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className='colorRedes'>Redes Sociais</h5>
            <ul className="list-unstyled ">
              <li><a className="colorRedes2" href="#"style={{ textDecoration: 'none'}}>Facebook</a></li>
              <li><a className="colorRedes2" href="#"style={{ textDecoration: 'none'}}>Twitter</a></li>
              <li><a className="colorRedes2" href="#"style={{ textDecoration: 'none'}}>Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="text-center  text-body py-3">
        <p>&copy; {new Date().getFullYear()} Troca Disco. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;


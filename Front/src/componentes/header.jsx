import './header.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import  logotipo  from '/src/assets/logotipo.png'
import  logotipo  from '/src/assets/logotipo.png'
const Header = () => {

  const navigate = useNavigate();
  const [searchTitle, setSearchTitle] = useState({
    titleProduct: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchTitle({
      ...searchTitle,
      [name]: value
    });
    console.log(searchTitle.titleProduct)
  };
  const onSubmitValue = (e) => {
    e.preventDefault();
    if (!searchTitle.titleProduct) {
      return
    }
    handleSubmit(e);
  };
  const handleSubmit = async (e) => {
    try {
      navigate('/search/' + searchTitle.titleProduct)
    }
    catch {

    };
  }
  return (
    <div className="container-fluid bg-primary">
      {/* <nav className="navbar navbar-expand-lg navbar-primary"> */}
      <nav className="header">
       
        <div className="container bg-primary">
          <Link className="navbar-brand" href="#">
          <img src={logotipo} width="172" height="172" alt="logo" />
          </Link>

          <form className="form-inline ml-auto" onSubmit={onSubmitValue} >
            <div className='procuraProdutos'>
              <input className="form-control mr-sm-1" type="text" placeholder="Procura pelos títulos" name="titleProduct" onChange={handleChange} value={searchTitle.titleProduct} />
            </div>

            <button className="btn btn-primary my-1 my-sm-0 ml-2" type='button' disabled={!searchTitle.titleProduct} onClick={handleSubmit}>Buscar</button>
          </form>

          <div className='buttons'>
            <Link to={"/register-user"}>
              <span className="btn btn-primary ml-2" >Cadastrar-se</span>
            </Link>

            <Link to={"/login-user"}>
              <span className="btn btn-primary ml-2">Entrar</span>
            </Link>
          </div>
        </div>
        <div className='container-fluid bg-primary'>
          <div className='nav navbar-expand-lg navbar-light bg-primary '>
            <ul className="nav navbar-expand navbar-prima bg-primary container">
              <li className="nav-item" >
                <a className="nav-link active" href="/" style={{ color: 'white' }}>Pagina inicial</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href=".#" style={{ color: 'white' }} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categorias
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="/category/vinil" reloadDocument="true">Vinil</Link></li>
                  <li><Link className="dropdown-item" to="/category/cd" reloadDocument="true">CD</Link></li>
                  <li><Link className="dropdown-item" to="/category/dvd" reloadDocument="true">DVD</Link></li>
                  <li><Link className="dropdown-item" to="/category/fita" reloadDocument="true">Fita Cassete</Link></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" style={{ color: 'white' }} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Itens Colecionaveis
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/category/Revistas">Revistas</a></li>
                  <li><a className="dropdown-item" href="/category/Livros">Livros de musica</a></li>

                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/create-product" style={{ color: 'white' }} >Anuncie</a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );




}

export default Header;
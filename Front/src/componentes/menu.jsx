import { Link } from 'react-router-dom';

const Menu = () => {

    return (

        <div className='container-fluid bg-primary'>
        <div className='nav navbar-expand-lg navbar-light bg-primary '>
            <ul className="nav navbar-expand navbar-prima bg-primary container">
                <li className="nav-item" >
                    <a className="nav-link active"  href="/"style={{ color: 'white' }}>Pagina inicial</a>
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
                    <a className="nav-link dropdown-toggle" href="#" style={{ color: 'white' }}id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Itens Colecionaveis
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#">Revistas</a></li>
                        <li><a className="dropdown-item" href="#">Livros de musica</a></li>
                        
                    </ul>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/create-product" style={{ color: 'white' }} >Anuncie</a>
                </li>

            </ul>
        </div>
         </div>
    );
};

export default Menu;

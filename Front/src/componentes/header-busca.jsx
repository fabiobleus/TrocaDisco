import './logoBusca.css'
import { useNavigate, useState } from 'react'

const Logo = () => {
    const navigate = useNavigate;
    const [searchTitle, setSearchTitle] = useState();



    const handleChange = (e) => {
        const { name, value } = e.target;
        setSearchTitle({
            ...searchTitle,
            [name]: value
        });
        console.log(searchTitle.title)

    };
   


    const handleSubmit = async () => {
        console.log('eita')
        // console.log(searchTitle.title)
        try {
            navigate('/search/' + searchTitle.title);

        }
        catch {
            console.log("deu merda")
        };

    }
    return (

        <div className="containerLogoBusca">
            <div className='bg-light'>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">
                        <img src="/src/assets/logotipo.jpeg" width="172" height="172" alt="logo" />
                    </a>

                    <div className="navbar-content">
                        <form className="form-inline">
                            <div className="procuraProdutos">
                                <input name="title" onChange={handleChange} value={searchTitle.title} className="form-control mr-sm-1" type="search" placeholder="Procurar Produtos" aria-label="Search" />
                            </div>

                            <div className="buttonBuscar">
                                <button className="btn btn-outline-success my-1 my-sm-0" type="submit" onClick={ {handleSubmit}}> Buscar</button>
                            </div>
                        </form>

                        <div className="button-group">
                            <a className="btn btn-primary" href="/register-user" role="button">Cadastre-se</a>
                            <a className="btn btn-primary" href="/login-user" role="button">Entrar</a>
                            <a className="btn btn-primary" href="/product" role="button">Anuncie</a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Logo;
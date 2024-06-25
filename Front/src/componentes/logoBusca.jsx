import './logoBusca.css'
import './menu'
import { useNavigate, useState } from 'react'

const Logo = () => {

  const navigate = useNavigate;
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
   

    // onSubmit={handleSubmit}
    const handleSubmit = async (e) => {
        console.log('eita')
        // console.log(searchTitle.title)
          navigate('/search/' + searchTitle.titleProduct.value)
        try {
          //  + searchTitle.titleProduct);
            navigate('www.uol.com.br' )//+ searchTitle.titleProduct);

        }
        catch {
            console.log("deu merda")
        };

    }
    return (
        <div className="container-fluid bg-primary">
      <nav className="navbar navbar-expand-lg navbar-primary">
        <div className="container bg-primary">
          <a className="navbar-brand" href="#">
            <img src="src/assets/logotipo.png" width="172" height="172" alt="logo" />
          </a>

          <form className="form-inline ml-auto">
            <div className='procuraProdutos'>
              <input className="form-control mr-sm-1" type="text" placeholder="Procura pelos títulos"   name="titleProduct" onChange={handleChange} value={searchTitle.titleProduct} />
            </div>

            <button className="btn btn-primary my-1 my-sm-0 ml-2"  href="/search/sss">Buscar</button>
          </form>

          <div className='ml-auto'>
            <a className="btn btn-primary ml-2" href="/register-user" role="button">Cadastrar-se</a>
            <a className="btn btn-primary ml-2" href="/login-user" role="button">Entrar</a>
          </div>
        </div>
      </nav>
    </div>
  );
      
        

    
    }

export default Logo;
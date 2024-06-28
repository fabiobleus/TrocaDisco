import Footer from "../componentes/footer"
import Header from "../componentes/header";
import "/src/index.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const ProductPage = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState('');
  const [base64, setBase64] = useState('');

  const [PhotoProduct, setPhotoProduct] = useState([]); // array para gravação da imagens
  const [FormProduct, setFormProduct] = useState({
    title: '',
    description: '',
    category: 'Vinil',
    photo: [],
    status: 'Ativo',

  });
  const base64Convert = (readerEvt) => {

    let binaryString = readerEvt.target.result;
    console.log('asdasdasd: ', readerEvt.result)
    setBase64(btoa(binaryString))

  }
  const base64Desconvert = (file) => {
    // let base64 = new File(readerEvt, atob(file), { type: 'image/png' })
    //  const base64 =
    return atob(file);
  }

  const photoUpload = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onload = () => {
      setFile(reader.result);
      const file64 = btoa(file);
      setBase64(file64);
      //  base64Convert(e)

    };
    // reader.readAsDataURL(file);

    console.log(base64);
    console.log(file64);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormProduct({
      ...FormProduct,
      [name]: value
    });
    setPhotoProduct(e.target.files[0])
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(PhotoProduct)
      const bodyJson = JSON.stringify(FormProduct);
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/JSON',
          auth: localStorage.getItem('tokenTD')
        },
        body: bodyJson
      };

      // uplo
      const response = await fetch('http://localhost:3000/api/product', options);
      if (response.ok) {
        alert('produt');

      } else {
        const err = await response.json();
        console.log(FormProduct);
      }
    } catch (error) {
      alert('Erro! tente novamente.');
    }
  };

  useEffect(() => {
    if (!localStorage.getItem('tokenTD')) {
      navigate('/login-user')
    }

  });
  return (
    <div className="min-height-500 d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <Header />
      <div style={{ height: '2rem' }}></div>
      <h1>Cadastre o seu Anúncio</h1>
      <form className="form-container" onSubmit={handleSubmit} style={{ maxWidth: '600px', width: '100%' }}>
        <div className="mb-3">
          <label htmlFor="inputProductName" className="form-label">Título do Anúncio:</label>
          <input type="text" className="form-control" name="title" id="inputProductName" onChange={handleChange} value={FormProduct.title} />
        </div>
        <div className="mb-3">
          <label htmlFor="inputProductDescription" className="form-label">Descrição do Produto:</label>
          <textarea className="form-control" id="inputProductDescription" onChange={handleChange} value={FormProduct.description} name="description" rows="3"></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="inputProductType" className="form-label">Tipo do Produto:</label>
          <select id="inputProductType" onChange={handleChange} value={FormProduct.category} name="category" className="form-select">
            <option value="Vinil">Vinil</option>
            <option value="DVD">DVD</option>
            <option value="CD">CD</option>
            <option value="Fita Cassete">Fita Cassete</option>
            <option value="Livros">Livros</option>
            <option value="Revistas">Revistas</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="inputProductStatus" className="form-label">Status do Anúncio:</label>
          <select id="inputProductStatus" onChange={handleChange} value={FormProduct.status} name="status" className="form-select">
            <option value="Ativo">Ativo</option>
            <option value="Suspenso">Suspenso</option>
            <option value="Finalizado">Finalizado</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="inputProductPhoto" className="form-label">Foto do Produto:</label>
          <input type="file" className="form-control" onChange={photoUpload} id="inputProductPhoto" />
          <img src={base64Desconvert(base64)} width={200} height={200} alt="" />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">Cadastrar Anúncio</button>
        </div>
      </form>
    </div>
  );
}

export default ProductPage;
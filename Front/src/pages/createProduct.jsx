import Footer from "../componentes/footer"
import Header from "../componentes/header";
import "../css/createProduct.css";

import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ProductPage = () => {
  const navigate = useNavigate();
  const id = useParams();
  const [file, setFile] = useState('');
  const [base64, setBase64] = useState('');
  let photo = []
  const [PhotoProduct, setPhotoProduct] = useState([]); // array para gravação da imagens
  const [FormProduct, setFormProduct] = useState({
    title: '',
    description: '',
    category: 'Vinil',
    photo: [],
    status: 'Ativo',

  });
  function base64ToFile(base64String, filename) {
    // Dividir a string base64 para obter o tipo de arquivo e os dados base64
    if (!base64String || !filename) {
      return
    }
    const [mimePart, dataPart] = base64String.split(',');
    const mimeType = mimePart.match(/:(.*?);/)[1];

    // Decodificar a string base64
    const byteCharacters = atob(dataPart);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);

    // Criar um Blob a partir dos dados decodificados
    const blob = new Blob([byteArray], { type: mimeType });


    // Criar um objeto URL para o Blob
    const url = URL.createObjectURL(blob);
    return url
    // Criar um link para download
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();

    // Remover o link após o download
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }


  const base64Convert = (file, callback) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => callback(reader.result);
  };

  const photoUpload = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    setFile(file.name)
    // reader.readAsDataURL(file);
    if (reader !== undefined && file !== undefined) {

      base64Convert(file, (result) => {
        setBase64();
        if (PhotoProduct.length !== 0) {
          PhotoProduct.map((PhotoProduct) => {
            photo.push({ name: PhotoProduct.name, base64: PhotoProduct.base64 });
          })
        }
        photo.push({ name: file.name, base64: result })
        setPhotoProduct(photo);
        
        setFormProduct({
          ...FormProduct,
          // photo: PhotoProduct
          photo: photo
        });
        

      })

    }
  };

  const photoDelete = (index) => {
    if (PhotoProduct.length !== 0) {
      PhotoProduct.map((PhotoProduct,indexDelete) => {
        if (index !== indexDelete) {
          photo.push({ name: PhotoProduct.name, base64: PhotoProduct.base64 });
        }       
      })
    }
     setPhotoProduct(photo);
     setFormProduct({
      ...FormProduct,
      photo: photo
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormProduct({
      ...FormProduct,
      [name]: value
    });

  };

  const handleCreate = async (e) => {
    try {
      e.preventDefault();
      console.log({ FormProduct })
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
        alert('Produto Cadastrado com sucesso!!');

      } else {
        const err = await response.json();
        console.log(FormProduct);
      }
    } catch (error) {
      alert('Erro! tente novamente.');
    }
  };
  const handleUpdate = async (e) => {
    try {
      e.preventDefault();

      const bodyJson = JSON.stringify(FormProduct);
      const options = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/JSON',
          auth: localStorage.getItem('tokenTD')
        },
        body: bodyJson
      };
      const urlApi = 'http://localhost:3000/api/product/' + id.id;

      const response = await fetch(urlApi, options);
      if (response.ok) {
        alert('Produto Atualizado com sucesso!!');

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
    if (id.id !== undefined){
      fetch('http://localhost:3000/api/product/' + id.id)
      .then(async (response) => {
        const ret = await response.json();
        const sol = ret.product;
       const photo = ret.product.photo;
        setFormProduct(sol);
        setPhotoProduct(photo);

      }
      )
      .catch((err) => {
        // console.log(err);
      })
    }

  },[]);
  return (
    <div className="min-height-500 d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <Header />
      <div style={{ height: '2rem' }}></div>
      <h1>Cadastre o seu Anúncio</h1>
      <form className="form-container" style={{ maxWidth: '600px', width: '100%' }}>
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
          <select id="inputProductStatus" value={FormProduct.status} onChange={handleChange} name="status" className="form-select">
            <option value="Ativo">Ativo</option>
            <option value="Suspenso">Suspenso</option>
            <option value="Finalizado">Finalizado</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="inputProductPhoto" className="form-label">Foto do Produto:</label>
          <input type="file" className="form-control" onChange={photoUpload} id="inputProductPhoto" />

          {/* {PhotoProduct.length > 0 && PhotoProduct.map((item) => (
            <img src={base64ToFile(item.base64, item.name)} width={200} height={200} alt="" />
          ))} */}
          <div className="photos">
            {PhotoProduct.length > 0 && PhotoProduct.map((item,index) => ( <div className="photoProductCreate">
              <img src={base64ToFile(item.base64, item.name)} width={148} height={148} alt={item.name} />
             
              <button type="button"><img key={index} src="\src\assets\trash.svg" width={20} height={20} alt="" onClick={() => {photoDelete(index)}} /></button>
              </div>
            ))}
          </div>
        </div>
        <div className="d-grid">
          {!id.id ?  // if ternario para saber se esta editando ou criando
          <button type="submit" className="btn btn-primary"  onClick={handleCreate}  >Cadastrar Anúncio</button> 
          :
          <button type="submit" className="btn btn-primary" onClick={handleUpdate} >Atualizar Anúncio</button>}
         
        </div>
      </form>
    </div>
  );
}

export default ProductPage;
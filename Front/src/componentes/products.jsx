import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../componentes/products.css";
import { useEffect, useState } from "react";

function Products() {

  const [useJSON, setUseJSON] = useState([]);
  let photoA = [];

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/JSON',
    },
  };

  const params = useParams();
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
  
  }
  useEffect(() => {
    let urla;
    // console.log(!!params.title)
    // console.log(params.category)
    console.log(params)


    if (params.title !== undefined) {
      urla = 'http://localhost:3000/api/product/name/' + params.title

    } else if (params.category !== undefined) {
      urla = 'http://localhost:3000/api/product/category/' + params.category

    } else if (params) {
      urla = 'http://localhost:3000/api/products';

    }

    fetch(urla)
      .then(async (response) => {
        const ret = await response.json();
        const sol = ret.product;
       
        setUseJSON(sol);
      }
      )
      .catch((err) => {
        // console.log(err);
      })


  }, [params.title, params.category]);

  const { id } = useParams();

  const jsonToBase64 = (json) => {
    return json.photo[0].base64;
  };
  const jsonToName = (json) => {
    return json.photo[0].name;
  };
  return (
    <div className="container" name="container">
      {useJSON.length && useJSON.map((image) =>  ( <> 
        <div key={image._id} className="card">
          <img src={`${base64ToFile(jsonToBase64(image), jsonToName(image) )}`} alt={`Imagem ${image.id}`} />
          <p>{image.title}</p>
          <div>

            <Link to={`/product/${image._id}`}>
              <button>Trocar</button>
            </Link>
          </div>
        </div>
        </>
      ))}
    </div>

    // return (

    // <div className='container'>

    //     <div className="image-container">
    //       {images.map((image) => (
    //         <div key={image.id} className="image-item">
    //           <Link to={`/product/${image.id}`}>
    //             <img src={image.src} alt={`Imagem ${image.id}`} className="rounded-image" />
    //           </Link>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // );
  );
}


export default Products;

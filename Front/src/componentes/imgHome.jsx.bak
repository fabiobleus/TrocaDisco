import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../componentes/imgHome.css";
import { useEffect, useState } from "react";

function ImgHome() {

  const [useJSON, setUseJSON] = useState([]);
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/JSON',
    },
  };


  useEffect(() => {
fetch('http://localhost:3000/api/products') // todos produtos
// fetch('http://localhost:3000/api/product/name/' + busca ) // busca no title 
// fetch('http://localhost:3000/api/product/category' + category ) // filtro da categoria
// fetch('http://localhost:3000/api/product/genere' + generomusical ) // filtro da musical

.then( async(response) => {
  const ret = await response.json();
  const sol = ret.product;
    setUseJSON(sol);

}
)
.catch((err) => {
  console.log(err);
})
    
  }, []);

  const { id } = useParams();

  // const images = [
  //   { id: 1, src: "src/assets/ImgDosProdutos/1.png", name: "Nome da imagem 1" },
  //   { id: 2, src: "src/assets/ImgDosProdutos/2.png", name: "Nome da imagem 2" },
  //   { id: 3, src: "src/assets/ImgDosProdutos/3.png", name: "Nome da imagem 3" },
  //   { id: 4, src: "src/assets/ImgDosProdutos/4.png", name: "Nome da imagem 4" },
  //   { id: 5, src: "src/assets/ImgDosProdutos/5.png", name: "Nome da imagem 5" },
  //   { id: 6, src: "src/assets/ImgDosProdutos/6.png", name: "Nome da imagem 6" },
  //   { id: 7, src: "src/assets/ImgDosProdutos/7.png", name: "Nome da imagem 7" },
  //   { id: 8, src: "src/assets/ImgDosProdutos/8.png", name: "Nome da imagem 8" },
  //   { id: 9, src: "src/assets/ImgDosProdutos/9.png", name: "Nome da imagem 9" },
  //   { id: 10, src: "src/assets/ImgDosProdutos/10.png", name: "Nome da imagem 10" },
  //   { id: 11, src: "src/assets/ImgDosProdutos/11.png", name: "Nome da imagem 11" },
  //   { id: 12, src: "src/assets/ImgDosProdutos/12.png", name: "Nome da imagem 12" },
  // ];

  return (
    <div className="container">
      {useJSON.length && useJSON.map((image) => (
        <div key={image._id} className="card">
          <img src={`src/assets/ImgDosProdutos/${image.photo[0]}`} alt={`Imagem ${image.id}`} />
          <p>{image.title}</p>
          <div>

            <Link to={`/product/${image._id}`}>
              <button>Trocar</button>
            </Link>
          </div>
        </div>
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


export default ImgHome;

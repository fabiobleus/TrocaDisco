// import { useParams } from "react-router-dom";
// import { json, redirect, useNavigate } from "react-router-dom";
// import Header from "../componentes/header"
import React, { useState, useEffect } from 'react';
// import "../css/product.css"
// import { useEffect } from "react"
import { useParams } from "react-router-dom"
import Header from "../componentes/header"
import Footer from "../componentes/footer"

const Product = () => {
    const [useProduct, setUseProduct] = useState([]);
    const [usePhoto, setUsePhoto] = useState([]);
    const [useSeller, setUseSeller] = useState([]);
    const [useProposal, setUseProposal] = useState([]);
    const params = useParams();
    let photo =[];
    const jsonToBase64 = (json) => {
        if (json.photo[0].base64 === undefined) {
            return ""
          } return json.photo[0].base64;
      };
      const jsonToName = (json) => {
        if (json.photo[0].name === undefined) {
          return ""
        }
        return json.photo[0].name;
      };    function base64ToFile(base64String, filename) {
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
        // const id =  params.id;
        // console.log( params.id);
        fetch('http://localhost:3000/api/product/' + params.id)
            .then(async (response) => {
                const ret = await response.json();
                const product = ret.product;
                const photoA = product.photo[0]
                photo = product.photo[0];
                setUsePhoto(product.photo[0])
                const seller = ret.seller;
                const proposal = ret.proposal;
                // console.log(photo)
                console.log(usePhoto)
                setUseProduct(product);
                setUseSeller(seller);
                setUseProposal(proposal);
            }
            )
            .catch((err) => {
                console.log(err);
            })

        // }, [useProduct.length]);
    }, []);


    return (
        <div>
            <Header />
            <div style={{ minHeight: '100vh' }} className="container py-5">
                <div className="row">
                    <div className="col-md-7 mb-2">
                        <h1 className="mb-2">{useProduct.title}</h1>
                        <img 
                            src={`${base64ToFile(usePhoto.base64, usePhoto.name )}`} //{useProduct.photo}} 
                            className="img-fluid rounded mb-4 w-75"
                            alt={useProduct.title}
                        />
                    </div>
                    <div className="col-md-4 box align-items-end mt-5 ms-3">
                        <div className="mb-4 ms-5">
                            <h2 className="h5">Categoria:</h2>
                            <h3 className="h6">{useProduct.category}</h3>
                        </div>
                        <div className="mb-4 ms-5">
                            <h2 className="h5">Descrição:</h2>
                            <h3 className="h6">{useProduct.description}</h3>
                        </div>
                        <div className="mb-4 ms-5">
                            <h2 className="h5">Localização:</h2>
                            <h3 className="h6">{useSeller.cep} / {useSeller.city} / {useSeller.uf}</h3>
                        </div>
                        <div className="mb-4 text-center">
                            <button className="btn btn-primary w-75 ms-1">Fazer Proposta</button>
                        </div>
                        <div className="proposal mb-4 ms-5" id="proposal">
                            <label htmlFor="proposalInput1" className="form-label">Insira sua proposta para este Anúncio:</label>
                            <input type="text" className="form-control mb-3" id="proposalInput1" placeholder="Insira sua proposta" />
                            <label htmlFor="proposalInput2" className="form-label">Caso tenha o produto anunciado, insira o link</label>
                            <input type="text" className="form-control mb-3" id="proposalInput2" placeholder="Insira o link proposta" />
                            <button className="btn btn-success w-100 ms-0">Enviar Proposta</button>
                        </div>
                        <div className="proposals" id="proposals">
                            <h1 className="h4">Propostas</h1>
                            {/* Conteúdo das propostas */}
                        </div>
                    </div>
                </div>
                
            </div>
            <Footer />
        </div>
    )
   
}

export default Product;
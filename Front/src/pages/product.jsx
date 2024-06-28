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
    const [useSeller, setUseSeller] = useState([]);
    const [useProposal, setUseProposal] = useState([]);
    const params = useParams();

    useEffect(() => {
        // const id =  params.id;
        // console.log( params.id);
        fetch('http://localhost:3000/api/product/' + params.id)
            .then(async (response) => {
                const ret = await response.json();
                const product = ret.product;
                const photoA = product.photo[0]
                const seller = ret.seller;
                const proposal = ret.proposal;
                console.log(photoA)
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
            <div style={{ minHeight: '100vh' }}>
                
                <div className="product">
                    <h1>{useProduct.title}</h1>

                    <img src={`/src/assets/ImgDosProdutos/${useProduct.photo}`} />

                    <span>
                        <h2>Categoria:</h2>


                        <h3>{useProduct.category}</h3>
                    </span>
                    <span>
                        <h2>Descrição:</h2>

                        <h3>{useProduct.description}</h3>

                    </span>



                </div>
                <div className="box">

                    <span>
                        <h2>Localização:</h2>

                        <h3>{useSeller.cep} /{useSeller.city} / {useSeller.uf} </h3>
                    </span>
                    <div className="new" id="new">
                        <button>Fazer Proposta</button>
                    </div>
                    <div className="proposal" id="proposal">
                        <label htmlFor="">Insira sua proposta para este Anúncio:</label>
                        <input type="text" placeholder="Insira sua proposta"></input>
                        <label htmlFor="">Caso tenha o produto anunciado, insira p link</label>
                        <input type="text" placeholder="Insira o link proposta"></input>
                        <button>Enviar Proposta</button>
                    </div>
                    <div className="proposals" id="proposals">
                        <h1>Propostas</h1>
                        
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Product;
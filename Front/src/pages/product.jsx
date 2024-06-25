import { useParams } from "react-router-dom";
import { json, redirect, useNavigate } from "react-router-dom";
import Header from "../componentes/header"
import React, { useState, useEffect } from 'react';


const Product = () => {
    const [useJSON, setUseJSON] = useState([]);
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
                setUseJSON(product, seller, proposal);
            }
            )
            .catch((err) => {
                console.log(err);
            })

        // }, [useJSON.length]);
    }, []);




    return (
        <div>
            <div style={{ minHeight: '100vh' }}>
                <Header />
                <h1>{useJSON.title}</h1>

                <img src={`/src/assets/ImgDosProdutos/${useJSON.photo}`} />
                
                <span>
                    <h2>Categoria:</h2>
               
                
                    <h3>{useJSON.category}</h3>
                    </span>
                <span>
                    <h2>Descrição:</h2>
               
                    <h3>{useJSON.description}</h3>
               
                    </span>
               
                <span>
                    <h2>Localização:</h2>
               
                    <h3>{useJSON.zip} /{useJSON.city} / {useJSON.useEffect} </h3>
                    </span>
               
            </div>
        </div>
    )
}

export default Product;
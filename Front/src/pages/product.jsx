import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import Header from "../componentes/header"
import Footer from "../componentes/footer"
import '../pages/product.css';
import '../css/chat.css';

const Product = () => {
  const [useProduct, setUseProduct] = useState([]);
  
  const [useId, setUseId] = useState('');
  const [usePhoto, setUsePhoto] = useState({});
  const [useSeller, setUseSeller] = useState({});
  const [useProposal, setUseProposal] = useState({});
  const [useConversation, setUseConversation] = useState([]);
  const [useMakeProposal, setUseMakeProposal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);  
  const [useMensage, setUseMensage] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();
  const params = useParams();
  let photo = [];
  const changeMensage = (event) => {
    setUseMensage(event.target.value)
};
const handleSendMensage = () => {
    const conversation = useConversation;
    conversation.push({ user: "buyer", message: useMensage })
    setUseConversation(conversation)

    const FormJson = { _id: useId, conversation: conversation };
    const bodyJson = JSON.stringify(FormJson);
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/JSON',
            auth: localStorage.getItem('tokenTD')
        },
        body: bodyJson
    };
    fetch(`http://localhost:3000/api/proposal`, options)
        .then(async (response) => {
            setUseMakeProposal(!useMakeProposal)
        }
        )
        .catch((err) => {
            console.log(err);
        })

};
  useEffect(() => {
    const fetchProduct = async () => {
      const tokenTD = localStorage.getItem('tokenTD');
      if (!tokenTD) {
        navigate('/login-user');
        return;
      }

      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          auth: tokenTD,
        },
        body: JSON.stringify({ tktd: tokenTD }),
      };

      try {
        const response = await fetch(`http://localhost:3000/api/product/${id}`, options);
        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }

        const ret = await response.json();
        const { product, seller, proposal } = ret;
        setUseProduct(product);

        if (product.photo && product.photo.length > 0) {
          setUsePhoto(product.photo[0]);
          setSelectedImage(base64ToFile(product.photo[0].base64));
        }

        setUseSeller(seller);
        setUseProposal(proposal);
        if (proposal) {
          setUseConversation(proposal.conversation);
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id, navigate]);

  
  
  const base64ToFile = (base64String) => {
    const [mimePart, dataPart] = base64String.split(',');
    const mimeType = mimePart.match(/:(.*?);/)[1];

    const byteCharacters = atob(dataPart);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);

    const blob = new Blob([byteArray], { type: mimeType });
    const url = URL.createObjectURL(blob);
    return url;
  };

  const handleProposal = (event) => {
    event.preventDefault();
    if (!localStorage.getItem('tokenTD')) {
      navigate('/login-user');
      return;
    }
    setUseMakeProposal(true);
  };

  const renderProposals = () => {
    if (useMakeProposal) {
      return (
        <div className="proposal mb-4 ms-5" id="proposal">
          <label htmlFor="proposalInput1" className="form-label text-primary">
            Insira sua proposta para este Anúncio:
          </label>
          <input type="text" className="form-control mb-3" id="proposalInput1" placeholder="Insira sua proposta" />
          <label htmlFor="proposalInput2" className="form-label text-primary">
            Caso tenha o produto anunciado, insira o link
          </label>
          <input type="text" className="form-control mb-3" id="proposalInput2" placeholder="Insira o link proposta" />
          <button className="btn btn-primary w-100 ms-0">Enviar Proposta</button>
        </div>
      );
    }

    if (!!useProposal) {
      return (
        <div className="proposals" id="proposals">
          <h1 className="h4">Propostas</h1>
          <div className="proposal mb-4 ms-5" id="proposal">
            <label htmlFor="proposalInput1" className="form-label">
              Proposta:
            </label>
            <h3 className="h6">{useProposal.proposal}</h3>
            <label htmlFor="proposalInput2" className="form-label">
              Caso tenha o produto anunciado, insira o link
            </label>
            <h3 className="h6">{useProposal.link}</h3>
          </div>
        </div>
      );
    }


    return (
      <div className="mb-4 text-center">
        <button className="btn btn-primary w-75 ms-1" onClick={handleProposal}>
          Fazer Proposta
        </button>
      </div>
    );
  };

  return (
    <div>
      <Header />
      <div style={{ minHeight: '10vh' }} />
      <div className="container-md bg-white p-5">
        <div className="row">
          <div className="col-md-6 mb-4">
            <h1 className="mb-3">{useProduct.title}</h1>
            <div className="image-container rounded">
              {selectedImage && (
                <img
                  src={selectedImage}
                  className="img-fluid rounded w-100"
                  alt={useProduct.title}
                />
              )}
            </div>
            <div className="row mt-3">
              {useProduct.photo && useProduct.photo.map((photo, index) => (
                <div className="col-md-3 mb-3" key={index}>
                  <div
                    className="card image-card"
                    onMouseEnter={() => setSelectedImage(base64ToFile(photo.base64))}                  >
                    <img
                      src={base64ToFile(photo.base64)}
                      className="img-fluid rounded w-100"
                      alt={useProduct.title}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-4 box align-items-end mt-5 ms-3">
            <div className="mb-4 ms-5">
              <h2 className="h5 fs-4">Categoria:</h2>
              <h3 className="h6 fs-5">{useProduct.category}</h3>
            </div>
            <div className="mb-4 ms-5">
              <h2 className="h5 fs-4">Descrição:</h2>
              <h3 className="h6 fs-5">{useProduct.description}</h3>
            </div>
            <div className="mb-4 ms-5">
              <h2 className="h5 fs-4">Localização:</h2>
              <h3 className="h6 fs-5">
                {useSeller.cep} / {useSeller.city} / {useSeller.uf}
              </h3>
            </div>
            {!useProposal && useMakeProposal == false && (
                            <div className="mb-4 text-center">
                                <button className="btn btn-primary w-75 ms-1" onClick={handleProposal} key={'buttonProposal'}>Fazer Proposta</button>
                            </div>)}


                        {!useProposal && useMakeProposal == true && (
                            <div>
                                <label htmlFor="proposalInput1" className="form-label">Insira sua proposta para este Anúncio:</label>
                                <input type="text" className="form-control mb-3" id="proposalInput1" onChange={changeMensage} value={useMensage} placeholder="Insira sua proposta" />
                                
                                <button className="btn btn-success w-100 ms-0" >Enviar Proposta</button>
                            </div>)}

                        {useProposal && (
                            <>
                                <div >
                                    <h1>Proposta</h1>
                                    <div className="proposals" id="proposals">
                                        {useConversation.map((proposal, index) => (
                                            <>
                                                <div key={index} className={proposal.user}>
                                                    <p>{proposal.message}</p>
                                                </div>
                                            </>
                                        ))
                                        }

                                    </div >
                                    <label htmlFor="proposalInput2" className="form-label">Mande uma mensagem</label>
                                    <input type="text" className="form-control mb-3" id="proposalInput2" placeholder="Insira a mensagem!" onChange={changeMensage} value={useMensage} />
                                    <button className="btn btn-success w-100 ms-0" onClick={handleSendMensage}>Enviar Mensagem</button>
                                </div>
                            </>
                        )
                        }


          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
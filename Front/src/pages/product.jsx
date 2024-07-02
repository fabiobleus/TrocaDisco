import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import Header from "../componentes/header"
import Footer from "../componentes/footer"
import "../css/chat.css"

let conversationMessage = [];
function Product() {

    const [useProduct, setUseProduct] = useState([]);
    const [useId, setUseId] = useState('');
    const [usePhoto, setUsePhoto] = useState([]);
    const [useSeller, setUseSeller] = useState([]);
    const [useProposal, setUseProposal] = useState([{}]);
    const [useConversation, setUseConversation] = useState([]);
    const [useMakeProposal, setUseMakeProposal] = useState(false);
    const [useMensage, setUseMensage] = useState('');
    const params = useParams();
    const navigate = useNavigate();
    let photo = [];

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
    };
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

    };
    const changeMensage = (event) => {
        setUseMensage(event.target.value)
    }

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

    }
    const handleMakeProposal = () => {
        if (useMakeProposal == true) {
            return (<div className="proposal mb-4 ms-5" id="proposal">
                <label htmlFor="proposalInput1" className="form-label">Insira sua proposta para este Anúncio:</label>
                <input type="text" className="form-control mb-3" id="proposalInput1" placeholder="Insira sua proposta" />
                <label htmlFor="proposalInput2" className="form-label">Caso tenha o produto anunciado, insira o link</label>
                <input type="text" className="form-control mb-3" id="proposalInput2" placeholder="Insira o link proposta" />
                <button className="btn btn-success w-100 ms-0">Enviar Proposta</button>
            </div>)

        }
        if (!!useProposal) {
            return (
                <div className="mb-4 text-center">
                    <button className="btn btn-primary w-75 ms-1" onClick={handleProposal}>Fazer Proposta</button>
                </div>)
        }
    }
    const handleProposal = (event) => {
        event.preventDefault();
        if (!localStorage.getItem('tokenTD')) {
            navigate('/login-user');
        }
        setUseMakeProposal(true)
    };

    useEffect(() => {
        const FormJson = { tktd: localStorage.getItem('tokenTD') };
        const bodyJson = JSON.stringify(FormJson);
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/JSON',
                auth: localStorage.getItem('tokenTD')
            },
            body: bodyJson
        };
        fetch(`http://localhost:3000/api/product/${params.id}`, options)
            .then(async (response) => {
                const ret = await response.json();
                const product = ret.product;
                const photoA = product.photo[0]
                photo = product.photo[0];
                setUsePhoto(product.photo)
                const seller = ret.seller;
                const proposal = ret.proposal;
                if (!!proposal) {
                    const conversation = proposal.conversation;
                    conversationMessage = conversation;
                    setUseConversation(conversation);
                };
                setUseProduct(product);
                setUseSeller(seller);
                setUseProposal(proposal);
            }
            )
            .catch((err) => {
                console.log(err);
            })
    }, [useMakeProposal]);

    return (
        <div>
            <Header />
            <div style={{ minHeight: '100vh' }} className="container py-5" key={'21132'}>
                <div className="row">
                    <div className="col-md-7 mb-2">
                        <h1 className="mb-2">{useProduct.title}</h1>
                        <img
                            src={`${base64ToFile(usePhoto.base64, usePhoto.name)}`} //{useProduct.photo}} 
                            className="img-fluid rounded mb-4 w-75" key={useProduct.name}
                            alt={useProduct.title} />
                    </div>
                    <div className="col-md-4 box align-items-end mt-5 ms-3" >
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
                        ;
                        {/* <Chat id={useP} /> */}
                        {!useProposal && useMakeProposal == false && (
                            <div className="mb-4 text-center">
                                <button className="btn btn-primary w-75 ms-1" onClick={handleProposal} key={'buttonProposal'}>Fazer Proposta</button>
                            </div>)}


                        {!useProposal && useMakeProposal == true && (
                            <div>
                                <label htmlFor="proposalInput1" className="form-label">Insira sua proposta para este Anúncio:</label>
                                <input type="text" className="form-control mb-3" id="proposalInput1" placeholder="Insira sua proposta" />
                                <label htmlFor="proposalInput2" className="form-label">Caso tenha o produto anunciado, insira o link</label>
                                <input type="text" className="form-control mb-3" id="proposalInput2" placeholder="Insira o link proposta" />
                                <button className="btn btn-success w-100 ms-0">Enviar Proposta</button>
                            </div>)}

                        {useProposal && (
                            <>
                                <div >
                                    <h1>Proposta</h1>
                                    <div className="proposals" id="proposals">
                                        {useConversation.map((proposal) => (

                                            <p className={proposal.user}>{proposal.message}</p>
                                        ))
                                        }

                                    </div>
                                    <label htmlFor="proposalInput2" className="form-label">Caso tenha o produto anunciado, insira o link</label>
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
        </div >
    )

}

export default Product;
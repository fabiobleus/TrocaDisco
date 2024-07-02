import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";   
import "../css/chat.css";

export const Chat = (props) => {
    const params = useParams();
    const [useConversation, setUseConversation] = useState([]);
    console.log({ props })
    let photoA = [];
    if (props.id === '') {
        return
    }
    useEffect(() => {
    fetch(`http://localhost:3000/api/proposal/${props.id}`)
        .then(async (response) => {
            const ret = await response.json();
            const proposal = ret.allProposal;
            photoA = proposal.conversation;
            setUseConversation(photoA)
            console.log('photoA', photoA)

        }
        )
        .catch((err) => {
            console.log(err);
        });

    }, [props.id]);
    return (
        <>
            <h1 className="h4">Propostas</h1>
            <div className="proposals" id="proposals">
                {useConversation.map((photo, index) => (
                    <p key={index} className={photo.user}>{photo.message}</p>

                ))}


            </div>
            <div className="proposal mb-4 ms-5" id="proposal">
                <label htmlFor="proposalInput1" className="form-label">Insira sua mensagem para este Anúncio:</label>
                <input type="text" className="form-control mb-3" id="proposalInput1" placeholder="Insira sua proposta" />

                <button className="btn btn-success w-100 ms-0">Enviar mensage</button>
            </div>
        </>
    )


};


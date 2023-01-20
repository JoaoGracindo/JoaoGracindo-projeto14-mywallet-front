import axios from "axios";
import { useContext, useState } from "react";
import UserContext from "../UserContext";
import { useNavigate } from "react-router-dom";

export default function Saida(){
    const {token} = useContext(UserContext);
    const config = {headers: {authorization: token}};
    const navigate = useNavigate()

    const [body, setBody] = useState({isIncoming: false});

    function handleBody(e){

        setBody({
            ...body,
            [e.target.name]: e.target.value 
        })
    }

    async function postTransaction(e){
        e.preventDefault();
        await axios.post('http://localhost:5000/transactions', config, body);
        navigate('/myAccount');
    }

    return (
        <>
            <header>Nova saida</header>
            <form onSubmit={postTransaction}>
                <input
                    name="amount"
                    onChange={handleBody}
                    required
                    placeholder="Valor"
                />
                <input
                    name="title"
                    onChange={handleBody}
                    required
                    placeholder="Descrição"
                />
                <button type="submit">Salvar Saida</button>
            </form>
        </>
    )
}
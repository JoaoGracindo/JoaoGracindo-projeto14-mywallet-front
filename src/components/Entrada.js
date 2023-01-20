import axios from "axios";
import { useContext, useState } from "react"
import UserContext from "../UserContext";

export default function Entrada(){
    const {token} = useContext(UserContext);
    const config = {headers: {authorization: token}};

    const [body, setBody] = useState({isIncoming: true});

    function handleBody(e){

        setBody({
            ...body,
            [e.target.name]: e.target.value 
        })
    }

    async function postTransaction(e){
        await axios.post('/transactions', config, body)
    }

    return (
        <>
            <header>Nova entrada</header>
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
                <button type="submit">Salvar Entrada</button>
            </form>
        </>
    )
}
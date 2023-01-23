import axios from "axios";
import { useContext, useState } from "react";
import UserContext from "../UserContext";
import { useNavigate } from "react-router-dom";
import StyledTransaction from "./TransactionsStyles";

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
        await axios.post('http://localhost:5000/transactions', body, config);
        navigate('/myAccount');
    }

    return (
        <StyledTransaction>
            <form onSubmit={postTransaction}>
            <h1>Nova saida</h1>
                <input
                    data-test="registry-amount-input"
                    name="amount"
                    onChange={handleBody}
                    required
                    placeholder="Valor"
                />
                <input
                    data-test="registry-name-input"
                    name="title"
                    onChange={handleBody}
                    required
                    placeholder="Descrição"
                />
                <button data-test="registry-save" type="submit">Salvar Saida</button>
            </form>
        </StyledTransaction>
    )
}
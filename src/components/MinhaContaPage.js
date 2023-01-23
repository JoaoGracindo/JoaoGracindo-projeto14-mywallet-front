import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import UserContext from "../UserContext";
import StyledAcount from "./AcountStyles";

export default function MyAccount(){
    const {token} = useContext(UserContext);
    const config = {headers: {authorization: token}};
    const navigate = useNavigate();

    const [saldo, setSaldo] = useState();
    const [transactions, setTransactions] = useState();
    const [name, setName] = useState();

    useEffect(() => {
        async function fetch(){

               const promise = await axios.get('http://localhost:5000/transactions',config );

            console.log(promise)
            const {transactions, saldo, name} = promise.data;
            setSaldo(saldo);
            setTransactions(transactions);
            setName(name);
        }
        fetch();
        
    }, []);

    if(!name) return <></>

    return (
        <StyledAcount>
            <header>
            <span data-test="user-name">Ola, {name}</span>
            <span data-test="logout"></span>
            </header>
            <main>
                {transactions.map((item) =>{ 
                        return (<div className="transaction">
                                    <span>{item.date}</span>
                                    <span data-test="registry-name">{item.title}</span>
                                    <span style={item.isIncoming ? {color:"green"} : {color:"red"}} data-test="registry-amount">{item.amount}</span>
                                </div>)
                    } )}
            </main>
            <div className="saldo">
                <span>Saldo</span>
                <span data-test="total-amount">{saldo}</span>
            </div>
            <footer>
                <button data-test="new-income" onClick={() => navigate('/entrada')}>Nova entrada</button>
                <button data-test="new-expense" onClick={() => navigate('/saida')}>Nova saida</button>
            </footer>
        </StyledAcount>
    )
}
import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";

import UserContext from "../UserContext";

export default function MyAccount(){
    const {token} = useContext(UserContext);
    const config = {headers: {authorization: token}};
    const navigate = Navigate();

    const [saldo, setSaldo] = useState();
    const [transactions, setTransactions] = useState();
    const [name, setName] = useState();

    useEffect(() => {
        async function fetch(){

            const promise = await axios.get('http://localhost:5000/transactions',config );
            const {transactions, saldo, name} = promise.data;
            setSaldo(saldo);
            setTransactions(transactions);
            setName(name);
        }
        fetch();
        
    }, []);

    if(!name) return <></>

    return (
        <>
            <header >Ola, {name}</header>
            <main>
                {transactions.map((item) => <div>{item}</div> )}
                <div>{saldo}</div>
            </main>
            <footer>
                <button onClick={() => navigate('/entrada')}>Nova entrada</button>
                <button onClick={() => navigate('/saida')}>Nova saida</button>
            </footer>
        </>
    )
}
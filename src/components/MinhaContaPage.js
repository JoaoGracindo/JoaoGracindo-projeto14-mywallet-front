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

               const promise = await axios.get(`${process.env.REACT_APP_API_URL}transactions`,config );

            const {transactions, saldo, name} = promise.data;
            setSaldo(saldo);
            setTransactions(transactions);
            setName(name);
        }
        fetch();
        
    }, []);

    async function logout(){
        
        try{
            await axios.delete(`${process.env.REACT_APP_API_URL}`,config );
            navigate('/');
        }catch(err){
            
            return console.log(err);
        }
    }

    if(!name) return <></>

    return (
        <StyledAcount>
            <header>
                <span data-test="user-name">Ola, {name}</span>
                <span onClick={logout}><ion-icon data-test="logout" name="log-out-outline"></ion-icon></span>
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
                <button data-test="new-income" onClick={() => navigate('/nova-entrada')}>Nova entrada</button>
                <button data-test="new-expense" onClick={() => navigate('/nova-saida')}>Nova saida</button>
            </footer>
        </StyledAcount>
    )
}
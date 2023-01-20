import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../UserContext";
import StyledAuth from "./AuthStyle";

export default function Loggin(){
    const navigate = useNavigate();
    const {setToken} = useContext(UserContext)

    const [form, setForm] = useState({
        email: '',
        senha: ''
    });

    function handleForm(e){
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }
    async function validate(e){
        e.preventDefault();
        let token;

        try{
            const promise = await axios.post('http://localhost:5000/', form);
            token = 'Bearer ' + promise.data;
            setToken(token);

            navigate('/myAccount');

        }catch(err){
            console.log(err);

        }

    }

    return (
        <StyledAuth>
            <h1>MY Wallet</h1>
            <form onSubmit={validate}>
                <input
                        data-test="email"
                        type='email'
                        name='email'
                        required
                        placeholder="E-mail"
                        onChange={handleForm}
                />

                <input
                        data-test="password"
                        type='password'
                        name='senha'
                        required
                        placeholder="Senha"
                        onChange={handleForm}
                />

                <button data-test="sign-in-submit" type="submit">Entrar</button>
            </form>
            <Link to='/sign-up'>Ainda não tem conta? inscreva-se!</Link>
        </StyledAuth>
    )
}
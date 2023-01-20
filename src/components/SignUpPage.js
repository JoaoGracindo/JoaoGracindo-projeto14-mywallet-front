import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import StyledAuth from "./AuthStyle";

export default function SingUp(){

    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: '',
        email: '',
        senha: '',
        confirmar: ''
        
    });

    function handleForm(e){
        setForm({
            ...form,
            [e.target.name]: e.target.value 
        });

    }

    async function cadastrar(e){
        e.preventDefault();

        try{
            await axios.post('http://localhost:5000/participants', form);
        }catch(err){
            console.log(err)
        }

        navigate('/');
    }

    return (
        <StyledAuth>
            <h1>MY Wallet</h1>
            <form onSubmit={cadastrar}>
                <input
                     data-test="name"
                     type='name'
                     name='name'
                     required
                     placeholder="Nome"
                     onChange={handleForm}
                />

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

                <input
                     data-test="conf-password"
                     type='password'
                     name='confirmar'
                     required
                     placeholder="Confirmar senha"
                     onChange={handleForm}
                />

                <button data-test="sign-in-submit" type="submit">Cadastrar</button>
            </form>
            <Link to='/'>Se já tem conta, faça login aqui.</Link>
        </StyledAuth>
    )
}

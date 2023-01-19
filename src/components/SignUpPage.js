import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import styled from "styled-components";

export default function SingUp(){

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
        console.log(form)

    }

    function cadastrar(){

    }

    return (
        <>
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

                <button data-test="sign-up-submit" type='submit'/>
            </form>
            <Link to='/'>Se já tem conta, faça login aqui.</Link>
        </>
    )
}

import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Loggin(){
    const navigate = useNavigate()

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
            token = promise.data.token;
            console.log(token)
            navigate('/myAccount');

        }catch(err){
            console.log(err);

        }

    }

    return (
        <>
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

                <button type="submit"/>
            </form>
            <Link to='/sign-up'>Ainda não tem conta? inscreva-se!</Link>
        </>
    )
}
import axios from "axios"
import { Link } from "react-router-dom"

export default function Loggin(){
    function validate(){

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
                />

                <input
                        data-test="password"
                        type='password'
                        name='password'
                        required
                        placeholder="Senha"
                />

                <button type="submit"/>
            </form>
            <Link to='/sign-up'>Ainda não tem conta? inscreva-se!</Link>
        </>
    )
}
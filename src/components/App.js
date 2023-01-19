import { createGlobalStyle } from "styled-components";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Loggin from "./LoggingPage";
import MyAccount from "./MinhaContaPage";
import Transaction from "./Movimentacao";
import SingUp from "./SignUpPage";

export default function App(){

    return(
        <BrowserRouter>
            <GlobalStyle/>
            <Routes>
                <Route path="/" element={<Loggin/>}/>
                <Route path="/sign-up" element={<SingUp/>}/>
                <Route path="/myAccount" element={<MyAccount/>}/>
                <Route path="/transaction" element={<Transaction/>}/>
            </Routes>
        </BrowserRouter>
    )
}

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body{
        background-color: #8C11BE;
    }
  `;
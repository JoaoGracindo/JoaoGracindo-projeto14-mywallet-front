import styled from "styled-components";

const StyledTransaction = styled.div`
        form{
        display:flex;
        flex-direction: column;
        align-items: center;
        margin-top:30px;
    }

    button{
        width: 300px;
        height: 50px;
        border-radius:5px;
        border:none;
        background-color:#A328D6;
        font-weight:700;
        font-size:18px;
        color: #FFFFFF;
        margin-bottom: 30px;


    }

    input{
        width: 300px;
        height: 50px;
        border-radius:5px;
        border:black 1px solid;
        color:grey;
        font-weight:20px;
        margin-bottom: 10px;
        font-weight:500;
        font-size:15px;
        padding-left:2%;
        

    }

    h1{
        color: white;
        margin-top: 100px;
        margin-bottom:30px;
        
    }
`

export default StyledTransaction;
import styled from "styled-components";

const StyledAcount = styled.div`
    margin-top: 30px;
    margin-left:5%;
    margin-right:5%;

    header{
        color:white;
        font-size:28px;
        font-weight:600;
    }

    main{
        background-color: white;
        margin-top:10px;
        height:65vh;
        border-radius:5px;
        overflow-y: scroll;
        margin-bottom:3px;
        
    }
    
    .saldo{
        height:5vh;
        background-color:white;
        margin-bottom:10px;
        border-radius:5px;
        display:flex;
        align-items:center;
        justify-content:space-between;
        padding-left:5%;
        padding-right:5%;
        font-size:20px;
        font-weight:500;
    }

    .transaction{
        height:60px;
        display:flex;
        align-items:center;
        justify-content:space-between;
        padding-left:5%;
        padding-right:5%;
        font-size:20px;
        font-weight:500;
    }

    footer{
        display:flex;
        justify-content: space-between;
    }

    button{
        border-radius:5px;
        border:none;
        background-color:#A328D6;
        font-weight:700;
        font-size:18px;
        color: #FFFFFF;
        height:20vh;
        width:43vw;

    }
`;

export default StyledAcount;
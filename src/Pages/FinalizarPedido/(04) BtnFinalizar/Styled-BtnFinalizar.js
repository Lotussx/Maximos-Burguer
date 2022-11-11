import styled from "styled-components";

export const BtnFinalizarContainer = styled.div`
    width: 90%;
    height: 35px;
    margin: 20px auto;

    button{
        box-shadow: 2px 2px 10px black;
        border-radius: 20px;
        width: 100%;
        height: 100%;
        background-color: orangered;
        border: 0px solid red;


        p{
            font-family: 'Oswald', sans-serif;  
            margin: 0;
            font-size: 1.2em;
            font-weight: bold;
            color: white;
        }
    }
    
    @media screen and (max-width: 500px) {
    }
    
`;
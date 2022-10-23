import styled, { keyframes } from "styled-components";

const animaBorda = keyframes`
    0%{
    }
    100%{
        opacity: 1;
        background-color: black;
        color: white;
    }
`;

export const MenuCategoriasConteiner = styled.div`

@media screen and (max-width: 500px) {
    width: 100%;
    justify-content: flex-start;
    overflow-x: scroll !important;
    overflow-y: hidden !important;
    height: 8vh;
    padding: 0 !important;
    border-top: 4px solid black;
    border-bottom: 4px solid black; 

    li{
        width: 40%;
        height: 100% !important;
        color: black;
        list-style: none;
        display: flex;
        align-items: center !important;
        justify-content: center;
        padding: 0 !important;
        margin: 0 !important;
        background-color: white;

        h4{
            text-align: center;
            font-size: 1em;
            font-weight: 500;
            width: 110px !important;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 !important;
            margin: 0 !important;
        }

        .categoriaON{
            transition: .5s;
            animation: ${animaBorda};
            animation-duration: 0.5s;
            animation-fill-mode: forwards;
            animation-timing-function: ease-in-out;
        }
    }
}

`;
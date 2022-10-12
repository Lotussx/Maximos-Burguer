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

export const CardapioCategoriasContainer = styled.div`

    @media screen and (max-width: 500px) {
        width: 100%;
        font-family: 'Oswald', sans-serif;
        margin-top: 10px;
        box-sizing: content-box;
        flex-direction: column;
        
        
        .menuCategorias{
            width: 100%;
            justify-content: flex-start;
            overflow-x: scroll !important;
            overflow-y: hidden !important;
            height: 8vh;

            li{
                width: 40%;
                height: 100% !important;
                color: black;
                text-decoration: none;
                padding: 0 !important;
                margin: auto !important;
                display: flex;
                align-items: center !important;
                justify-content: center;

                h4{
                    text-align: center;
                    font-size: 1.1em;
                    font-weight: bold;
                    width: 120px !important;
                    height: 80px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    
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

        
        
        
       
        
        .ComboContainerOFF{
            display: none;
            opacity: 0;
            transition: .3s;
        }
        .ComboContainerON{
            opacity: 1;
            transition: .3s;
            display: block;
            width: 100%;
            height: 100px;
            background-color: red;
        }


        .PromoContainerOFF{
            opacity: 0;
            transition: .3s;
            display: none; 
        }
        .PromoContainerON{
            opacity: 1;
            transition: .3s;
            display: block;
            width: 100%;
            height: 100px;
            background-color: blue;
        }

        
        .HambuContainerOFF{
            opacity: 0;
            transition: .3s;
            display: none; 
        }
        .HambuContainerON{
            opacity: 1;
            transition: .3s;
            display: block;
            width: 100%;
            height: 100px;
            background-color: yellow;
        }


        .BatataContainerOFF{
            opacity: 0;
            transition: .3s;
            display: none; 
        }
        .BatataContainerON{
            opacity: 1;
            transition: .3s;
            display: block;
            width: 100%;
            height: 100px;
            background-color: pink;
        }


        .BebidaContainerOFF{
            opacity: 0;
            transition: .3s;
            display: none; 
        }
        .BebidaContainerON{
            opacity: 1;
            transition: .3s;
            display: block;
            width: 100%;
            height: 100px;
            background-color: greenyellow;
        }


        .espacoBotton{
            width: 100%;
            height: 15vh;
        }


    }


`;
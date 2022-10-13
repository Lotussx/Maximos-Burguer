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
        box-sizing: content-box;
        flex-direction: column;
        
        
        .menuCategorias{
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

                h4{
                    text-align: center;
                    font-size: 1.1em;
                    font-weight: bold;
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

        
        .categoryOFF{
            display: none;
            opacity: 0;
            transition: .3s;
        }

        .categoryON{
            opacity: 1;
            transition: .3s;
            display: block;
            width: 100%;

            .nomeCategoria{
                width: 100%;
                justify-content: flex-start;
                margin-top: 10px;

                h3{
                    font-size: 1.4em;
                    font-weight: bold;
                    padding-left: 20px;
                }
            }

            .produto{
                width: 100%;
                height: 110px;
                border: 1px solid black;
                margin: 8px auto;
                justify-content: space-around;

                .produtoIMG{
                    width: 25%;
                    height: 90%;
                    background-position: center !important;
                    background-size: 170% !important;
                    border-radius: 10px;
                    box-shadow: 1px 1px 5px black;
                }

                .produtoINFO{
                    width: 65%;
                    height: 90%;
                    border: 1px solid red;
                }
            }

        }

       


    }


`;
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

const animaCategoria = keyframes`
    0%{

    }
    
    100%{
        margin-top: 0;
        opacity: 1;
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
                background-color: white;

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
            opacity: 0;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            width: 100%;
            margin-top: -100px;

            animation: ${animaCategoria};
            animation-duration: 1s;
            animation-timing-function: ease-in-out;
            animation-fill-mode: forwards;

            .nomeCategoria{
                width: 100%;
                justify-content: flex-start;
                margin-top: 15px;

                h3{
                    font-size: 1.4em;
                    font-weight: bold;
                    padding-left: 25px;
                }
            }

            .produto{
                width: 90%;
                border-radius: 15px;
                height: 115px;
                box-shadow: 1px 1px 5px black;
                background-color: white;
                margin: 8px auto;
                justify-content: space-around;

                .produtoIMG{
                    width: 25%;
                    height: 85%;
                    background-position: center !important;
                    background-size: 180% !important;
                    border-radius: 10px;
                    box-shadow: 1px 1px 5px black;
                }
                .produtoINFO{
                    width: 65%;
                    height: 87%;
                    flex-direction: column;
                    justify-content: space-between;

                    .nomePreco{
                        font-weight: bold;
                        font-size: .9em;
                    }

                    .produtoDescri{
                        font-size: 0.8em;
                        text-align: center;
                    }

                    .btnADD{
                        height: 25px;
                        width: 80%;

                        button{
                            width: 100%;
                            height: 100%;
                            border-radius: 20px;
                            font-size: .8em;
                            text-align: center;
                            box-shadow: 1px 1px 3px black;
                            font-weight: bold;
                        }
                    }
                }
            }
        }

        .espacoBotton{
            width: 100%;
            height: 10vh;
        }
       


    }


`;
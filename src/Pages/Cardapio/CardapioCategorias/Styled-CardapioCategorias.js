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

const animaModaladd = keyframes`
    0%{
    }
    100%{
        opacity: 1;
        margin-top: 0;
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
                height: 120px;
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
                    height: 90%;
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

        .modalAdcionaisOFF{
            display: none;
        }
        .modalAdcionaisON{
            display: flex;
            align-items: center;
            justify-content: center;
            position: fixed;
            width: 100vw;
            top: 0;
            height: 100vh;
            z-index: 6;
            background-image: linear-gradient(rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%);
        
            .modalAdcionaisContent{
                opacity: 0;
                margin-top: 300px;
                width: 90%;
                background-color: white;
                border-radius: 15px;
                flex-direction: column;
                justify-content: flex-start;
                animation: ${animaModaladd};
                animation-duration: 1s;
                animation-fill-mode: forwards;

            .nomeProduto{
                width: 90%;
                height: 40px;
                justify-content: space-between;
                padding-top: 10px;

                .space{
                    width: 30px;
                    height: 30px;
                    font-size: 1.8em;
                }
                .nome{
                    font-weight: bold;
                    font-size: 1.3em;
                }
            }

            .aviso{
                width: 90%;
                text-align: center;
                font-size: .9em;
            }

            .selectAdcionais{
                flex-direction: column;
                justify-content: flex-start;
                width: 90%;

                .select{
                    width: 100%;
                    justify-content: space-between;

                    .input{
                        justify-content: flex-start;

                        label{
                            margin-left: 4px;
                        }

                        input{
                            width: 15px;
                            height: 15px;
                        }

                        p{
                            margin: 0;
                            padding: 0;
                            padding-right: 4px;
                            font-size: 1em;
                            flex-wrap: nowrap;
                        }
                    }

                    .espaco{
                        width: 100%;

                        div{
                            width: 100%;
                            height: 1px;
                            background-color: lightgray;
                        }
                    }

                    .preco{
                        
                        p{
                            margin: 0;
                            padding: 0;
                            font-size: .9em;
                            margin-left: 4px;
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
}


`;
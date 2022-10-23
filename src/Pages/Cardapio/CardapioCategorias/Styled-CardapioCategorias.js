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
   
        



        .modalAdicionaisOFF{
            display: none;
        }

        .modalAdicionaisON{
            display: flex;
            align-items: center;
            justify-content: center;
            position: fixed;
            width: 100vw;
            top: 0;
            height: 100vh;
            z-index: 6;
            background-image: linear-gradient(rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%);
        
            .modalAdicionaisContent{
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
                        font-size: .9em;
                        
                        p{
                            margin: 0;
                            padding: 0;
                            margin-left: 4px;
                        }

                        span{
                            margin-left: 2px;
                        }
                    }
                }
            }

            .btnConfirma{
                width: 90%;
                padding: 10px 0 15px 0;
            

                button{
                    width: 100%;
                    border-radius: 15px;
                    box-shadow: 1px 1px 5px black;
                    color: white;
                    background-color: #198754;
                    border: 0px solid red;
                    text-shadow: 1px 1px 1px black;
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
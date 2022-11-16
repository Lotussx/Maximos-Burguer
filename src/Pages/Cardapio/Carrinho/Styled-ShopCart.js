import styled, { keyframes } from 'styled-components';

const cartClosed = keyframes`
    from{
        height: 400px;
        width: 500px;
        border-radius: 5%;
    }

    to{
        height: 100px;
        width: 100px;
        border-radius: 50%;
    }
`;

const cartOpened = keyframes`
    from{
        height: 100px;
        width: 100px;
        border-radius: 50%;
    }

    to{
        height: 400px;
        width: 500px;
        border-radius: 5%;
    }
`;

const cartClosedMobile = keyframes`
    from{
        height: 350px;
        width: 100%;
        border-radius: 5%;
    }

    to{
        height: 90px;
        width: 90px;
        border-radius: 50%;
    }
`;

const cartOpenedMobile = keyframes`
    from{
        height: 90px;
        width: 90px;
        border-radius: 50%;
    }

    to{
        height: 350px;
        width: 100%;
        border-radius: 5% 5% 0 0;
    }
`;



export const ContainerShopCart = styled.div`

    position: fixed;
    background-color: black;
    bottom: 0;
    color: white;
    z-index: 3;
    transition: .8s !important;
    margin: 0 0 20px 20px;
    height: 90px;
    width: 90px;
    border-radius: 50%;
    font-family: 'Oswald',sans-serif;
    box-shadow: 1px 1px 5px black;

    .iconCart{
        cursor: pointer;
    }

    &.carrinhoFechado{
        animation: ${cartClosed};
        animation-fill-mode: forwards;
        animation-duration: .5s;
        animation-timing-function: ease-in-out;
        transition: 0.6s;
        
        box-shadow: 1px 1px 5px black;
        display: flex;
        justify-content: center;
        align-items: center;

        .cartContent{

            .arrowContainer{
                display: none;
            }
    
            .barraDivisora1{
                display: none;
            }
    
            .carrinhoVazio{
                display: none;
            }
    
            .buttonExpandCart{
                display: none;
            }
    
            .containerItensCart{
                display: none;
            }
    
            .precoAdcionais{
                display: none;
            }

            .precoTotalContainer{
                display: none;
            }
    
            .finalizarPedido{
                display: none;
            }


            .iconCart{
                font-size: 2.5em;
            }

            .contador{
                position: absolute;
                border-radius: 50%;
                background-color: red;
                width: 27px;
                height: 27px;
                border: none;
                margin-bottom: 30px;
                margin-left: 30px;
                color: white;
            }
        }
    }
    
    
    &.carrinhoAberto{
        animation: ${cartOpened};
        animation-fill-mode: forwards;
        animation-duration: .5s;
        animation-timing-function: ease-in-out;
        transition: 0.5s;
        padding: 15px;

        .buttonExpandCart{
            display: none;
        }

        .cartContent{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-direction: column;

            .cartIcon{
                width: 95%;
                justify-content: space-between;

                .iconCart{
                    font-size: 3em;
                }

                .contador{
                    position: absolute;
                    border-radius: 50%;
                    background-color: red;
                    width: 27px;
                    height: 27px;
                    border: none;
                    margin-bottom: 28px;
                    margin-left: 25px;
                    color: white;
                }

                .arrowContainer{
                    cursor: pointer;
                    width: 50px;
                    height: 40px;
                    margin-right: 45%;

                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }

            .barraDivisora{
                display: block;
                width: 95%;
            }

            .containerItensCart{
                width: 95%;
                height: 60% !important;
                overflow-y: scroll;

                .item{
                    width: 100%;
                    justify-content: space-between;
                    margin: 3px 0;

                    h4{
                        margin: 0;
                        font-size: 1.1em;
                    }

                    .buttonDiv{
                        width: 35%;

                        button{
                            margin: 0 3px;
                            border-radius: 7px;
                            width: 25px;
                            height: 25px;
                            border: none;
                            font-weight: bold;
                            background-color: white;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            font-weight: bold;
                            font-size: 1.5em;
                        }

                        div{
                            width: 100%;
                        }

                        .itemPrice{
                            justify-content: flex-end;
                        }

                        p{
                            margin: 0;
                            font-size: 1.1em;
                        }
                    }
                }
            }

            .containerItensCart::-webkit-scrollbar{
                width: 8px;
            }

            .containerItensCart::-webkit-scrollbar-thumb{
                background-color: #efefef;
            }

            .precoAdcionais{
                width: 95%;
                justify-content: space-between;

                h4{
                    font-size: 1.1em;
                    margin: 0;
                }

                p{
                    margin: 0;
                    font-size: 1.1em;
                }

                button{
                    border: 0;
                    background-color: red;
                    color: white;
                    border-radius: 5px;
                    margin-left: 25%;
                }
            }

            .precoTotalContainer{
                width: 95%;
                margin-top: 10px;
                justify-content: space-between;

                .preco{
                    color: lightgreen;
                }

                h4{
                    font-size: 1.4em;
                    margin: 0;
                }

                span{
                    margin: 0;
                    margin-right: 10px;
                    font-size: 1.2em;
                }

                p{
                    font-size: 1.2em;
                    margin: 0;
                }
            }

            .finalizarPedido{
                width: 97%;
                height: 30px;
                margin: 10px 0 5px 0;
                
                a{
                    width: 100%;
                    height: 100%;
                    text-decoration: none;
                    
                    button{
                        color: white;
                        width: 100%;
                        height: 100%;
                        border: none;
                        border-radius: 10px;
                        text-shadow: 1px 1px 2px black;
                        background-color: #198754;
                    }
                }
            }
        }
    }


@media screen and (max-width: 1100px) {

    &.carrinhoAberto{

        .iconCart{
            font-size: 2.5em !important;
        }

        .contador{
            margin-left: 20px !important;
        }

        .cartContent{

            .containerItensCart{

                .item{

                    h4{
                        font-size: 1em;
                    }

                    .buttonDiv{
                        width: 50% !important;

                        button{
                            width: 20px !important;
                            height: 20px !important;
                        }
                     
                        p{
                            font-size: 1em;
                        }
                    }
                }
            }
        }

        .precoAdcionais{
                width: 95%;
                justify-content: space-between;

                h4{
                    font-size: 1em;
                    margin: 0;
                }

                p{
                    margin: 0;
                    font-size: 1em;
                }

                button{
                    border: 0;
                    background-color: red;
                    color: white;
                    font-size: 0.9em;
                    border-radius: 5px;
                    margin-left: 28% !important;
                }
        }

        .precoTotalContainer{
                width: 95%;
                margin-top: 10px;
                justify-content: space-between;

                h4{
                    font-size: 1.2em !important;
                    margin: 0;
                }

                p{
                    color: lightgreen;
                    font-size: 1.2em !important;
                    margin: 0;
                }
        }

        
    }
}

@media screen and (max-width: 800px) {

    &.carrinhoAberto{
        width: 50%;
        margin: 0;
        border-radius: 20px 20px 0 0;
    }

}

@media screen and (max-width: 500px) {

    &.carrinhoFechado{
        animation: ${cartClosedMobile};
        animation-fill-mode: forwards;
        animation-duration: .8s;
        animation-timing-function: ease-in-out;
        transition: 0.6s;

        .iconCart{
            font-size: 2.3em !important;
        }

        .contador{
            width: 23px !important;
            height: 23px !important;
            font-size: 0.8em !important;
        }
    }
    
    &.carrinhoAberto{
        animation: ${cartOpenedMobile};
        animation-fill-mode: forwards;
        animation-duration: .8s;
        animation-timing-function: ease-in-out;
        transition: 0.6s;

        .arrowContainer{
            margin-right: 43% !important;     
        }
        
        .containerItensCart{
            height: 15vh;
            overflow-y: scroll;

        }

        .containerItensCart::-webkit-scrollbar{
            width: 3px !important;
        }
    }


}


    
`;
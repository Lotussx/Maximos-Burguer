import styled from 'styled-components';


export const ContainerShopCart = styled.div`

    position: fixed;
    background-color: black;
    bottom: 0;
    color: white;
    z-index: 3;
    transition: .8s !important;
    margin: 0 0 20px 20px;
    font-family: 'Oswald',sans-serif;
    box-shadow: 1px 1px 5px black;

    .iconCart{
        cursor: pointer;
    }

    &.carrinhoFechado{
        height: 100px;
        width: 100px;
        box-shadow: 1px 1px 5px black;
        border-radius: 50%;
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
        width: 40%;
        min-height: 40vh;
        border-radius: 20px;
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
                    margin-left: 48%;
                }
            }

            .precoTotalContainer{
                width: 95%;
                margin-top: 10px;
                justify-content: space-between;

                h4{
                    font-size: 1.4em;
                    margin: 0;
                }

                p{
                    color: lightgreen;
                    font-size: 1.4em;
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

    &.carrinhoAberto{
        width: 100%;
        
        .containerItensCart{
            border: 1px solid red;
        }
    }


}


    
`;
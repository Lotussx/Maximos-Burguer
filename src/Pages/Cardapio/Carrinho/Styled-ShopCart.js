import styled, { keyframes } from "styled-components";

const animaButton = keyframes`
     0%{
          box-shadow: 1px 1px 15px red;  
          transition: 0.5s all;
 
     }
     50%{
          box-shadow: 1px 1px 15px white;
          transition: 0.5s all;
     }

     100%{
          box-shadow: 1px 1px 15px red;  
          transition: 0.5s all;
     }

`;

export const ContainerShopCart = styled.div`

@media screen and (max-width: 500px) {
    position: fixed;
    height: 09vh;
    width: 100%;
    bottom: 0;
    border-radius: 25px 25px 0 0;
    background-color: black;
    color: white;
    z-index: 3;


    &.carrinhoAberto{
        height: 45vh !important;
        width: 100%;
        transition: .5s;
        border-radius: 20px 20px 0 0;
        
        .cartContent{
            flex-direction: column !important;
            transition: .5s;
            
            .cartIcon{
                position: relative;
                width: 100%;
                transition: .5s;
                height: 8vh;
                justify-content: flex-start;
                margin-top: -3%;

                .iconCart{
                    margin-left: 5%;
                }

                .arrowContainer{
                    display: block;
                    transition: .5s;
                    margin-top: -10px;
                    width: 100%;
                    height: 40px;
                    position: absolute;
                    display: flex;
                    align-items: center;
                    justify-content: center;
    
                    div{
                        height: 30px;
                        width: 35px;
                        margin-top: 10px;
                        
                        img{
                            height: 100%;
                            width: 100%;
    
                        }
                    }
                }
            }

            .barraDivisora1{
                width: 100%;
                background-color: gray;
                border: 0.5px solid gray;
            }

            .containerItensCart{
                position: relative;
                width: 100%;
                height: 50%;
                overflow-y: scroll;

                .item{
                    transition: .5s;
                    margin: 5px auto;
                    width: 90%;
                    justify-content: space-between;
                    font-family: 'Oswald', sans-serif;

                    .itemName{
                        transition: .5s;
                        font-weight: bold;
                        
                        h4{
                            font-size: 1.1em;
                            margin: 3px 0 3px 0;
                        }
                    }

                    .buttonDiv{
                        transition: .5s;
                        width: 55%;

                        button{
                            transition: .5s;
                            width: 30px;
                            height: 30px;
                            margin: 0 5px 0 5px;
                            font-size: 1.2em;
                            font-weight: bold;
                            border-radius: 10px;
                            border: 0px solid red;
                        }

                        .itemPrice{
                            transition: .5s;
                            margin-left: 10px;
                            margin: 0;

                            p{
                                margin: 2px 5px 0 0;
                                margin: 0;
                            }
                            span{
                                margin-left: 5px;
                            }
                        }
                    }
                }

            }


            .precoTotalContainer{
                position: relative;
                bottom: 0;
                margin-bottom: 10%;
                width: 100%;
                height: 8vh;
                justify-content: flex-start;
                transition: .8s ease;
                position: absolute;

                div{
                    margin-left: 5%;
                }

                .preco{
                    margin: 0;
                    text-align: center;
                    color: lightgreen !important;
                    
                    p{
                        margin: 0 !important;
                        padding: 0 !important;
                    }
                }
            }

            .finalizarPedido{
                width: 100%;
                position: absolute;
                bottom: 0;
                margin-bottom: 3%;
                height: 32px;
                transition: .5s;

                a{
                    width: 95%;
                    height: 100%;
                    text-decoration: none;
                    
                    button{
                        transition: .5s;
                        font-weight: 600;
                        font-family: 'Oswald', sans-serif;
                        height: 100%;
                        width: 100%;
                        border-radius: 15px;
                        border: none;
                        font-size: 1em;
                    }
                }
                
            }

            .buttonExpandCart{
                transition: .5s;
                display: none;
            }
        }
    }

    .cartContent{
        transition: .5s;
        width: 100%;
        height: 90%;
        justify-content: flex-start;

        
        .arrowContainer{
            transition: .5s;
            display: none;
        }

        .buttonExpandCart{
            height: 100%;
            width: 150px;

            button{
                transition: .5s;
                background-color: white;
                border: 0px solid white;
                font-weight: bold;
                height: 40%;
                width: 100%;
                border-radius: 10px;
                font-family: 'Oswald', sans-serif;
                animation: ${animaButton};
                box-shadow: 1px 1px 20px white;
                animation-iteration-count: infinite;
                animation-fill-mode: forwards;
                animation-duration: 3s;
                transition: 0.5s all;
            }
        }

        .cartIcon{
            transition: .5s;
            width: 35%;
            height: 100%;
        

        .iconCart{
            font-size: 2.8em;
        }

        button{
            width: 25px;
            height: 25px;
            margin-left: -20px;
            margin-top: -30px;
            border-radius: 50%;
            border: 0px solid red;
            background-color: red;
            color: white;
            }
        }

        
        .carrinhoVazio{
                margin: 0;
                width: 80%;
                height: 10vh;
                font-size: 1.1em;
                font-family: 'Oswald', sans-serif;  
            
        }

        .precoTotalContainer{
            transition: .8s ease;
            font-family: 'Oswald', sans-serif;
            width: 80%;
            height: 100%;
            
            div{
                font-size: 1.1em;
                margin: 0 10px 0 10px;
            }

            .preco{
                display: flex;
                align-items: center;

                p{
                    margin: 0;
                }
            }
            
        }
    }

    
    



}
    
`;
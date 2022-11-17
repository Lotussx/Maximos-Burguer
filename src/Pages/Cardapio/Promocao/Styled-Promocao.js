import styled, { keyframes } from "styled-components";

const abrirPromo = keyframes`
    0%{
       opacity: 0;
       margin-top: -20vh;
    }

    100%{
        margin-top: 0vh;
        opacity: 1;
    }
`;

export const PromoContainer = styled.div`
   font-family: 'Oswald',sans-serif;
   
    &.promoDesativada{
        display: none;
    }

    &.promoAtivada{
        width: 100%;  
        height: 100vh;
        position: fixed;
        top: 0;
        display: flex !important;
        justify-content: center !important;
        align-items: center !important; 
        
        z-index: 999;
        background-image: linear-gradient(rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%);

        animation: ${abrirPromo};
        animation-duration: 1s;
        animation-timing-function: ease-in-out;
        animation-fill-mode: forwards;


        .promoContainer{
            width: 400px;
            height: 500px;
            background-color: white;
            border-radius: 20px;
            box-shadow: 1px 1px 10px black;
            margin: 0;
            padding: 0;
    
            .produto{
                width: 100%;
                height: 100%;
                flex-direction: column;
                justify-content: space-between;

                .imgProduto{
                    width: 100%;
                    height: 70%;
                    align-items: flex-start;
                    background-size: cover !important;
                    border-radius: 20px 20px 0 0;
                    justify-content: space-between;
                    padding: 10px;

                    .fecharPromo{
                        width: 100%;
                        justify-content: flex-end;

                        svg{
                            color: white;
                            font-size: 2.8em;
                            cursor: pointer;
                        }
                    }

                    h3{
                        font-weight: 600;
                        text-transform: uppercase;
                        font-size: 1.5em;
                    }
                }
                
                .img{
                    margin-top: 10px;
                    border-radius: 20px;
                    width: 60%;
                    height: 50%;
                    background-size: cover !important;
                }

                .nomeDescri{
                    width: 100%;
                    flex-direction: column;
                    justify-content: flex-start;
                    margin-bottom: 5px;

                    p{
                        margin: 0;
                        margin-top: 10px;
                        font-size: 1em;
                        text-align: center;
                        padding: 0 15px;
                    }

                    h3{
                        font-weight: bold;
                        margin: 0;
                        font-size: 1.2em;
                    }
                }
                
                button{
                    margin-bottom: 15px;
                    width: 90%;
                    border: none;
                    border-radius: 20px;
                    background-color: #198754;
                    height: 30px;
                    color: white;
                    box-shadow: 1px 1px 5px black;
                    text-shadow: 1px 1px 1px black;
                }
            }
        }
    }


@media screen and (max-width: 500px) {
    
    .promoContainer{
        margin-top: -15%;
        width: 80% !important;
        height: 450px !important;
        
        .imgProduto{
            margin-bottom: 10px;

            .space{
                width: 35px !important;
                height: 35px !important;
            }

            h3{
                font-size: 1.1em !important;
            }
        }

        .nomeDescri{
            font-size: 0.9em;
        }
    }
}


   
    
`;



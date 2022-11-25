import styled, { keyframes } from "styled-components";

const animaModaladd = keyframes`
    0%{
    }
    100%{
        opacity: 1;
        margin-top: 20px;
    }
`;


export const BoxMilkShakeContainer = styled.div`

    .montarMilkSHAKE{ 
        opacity: 0;
        margin-top: 300px;
        width: 45%;
        padding: 10px 20px 15px 20px;
        background-color: white;
        border-radius: 15px;
        flex-direction: column;
        justify-content: flex-start;
        animation: ${animaModaladd};
        animation-duration: 1s;
        animation-fill-mode: forwards;
        transition: .8s;
        box-shadow: 1px 1px 5px black;
        z-index: 3 !important;

        input{
            cursor: pointer
        }


        .nomeProduto{
            width: 95%;
            height: 40px;
            justify-content: space-between;
            padding-top: 10px;

            .space{
                width: 35px;
                height: 35px;
                font-size: 2.2em;

                svg{
                    cursor: pointer;
                }
            }

            .nome{
                font-weight: bold;
                font-size: 1.2em;
            }
        }

        .aviso{
            width: 95%;
            text-align: center;
            font-size: .9em;
        }

        .selectMILKSHAKE{
            flex-direction: column;
            justify-content: flex-start;
            width: 95%;

           

            .checkbox{
                width: 100%;
                justify-content: flex-start;

                h4{
                    margin: 0;
                    margin-bottom: 8px;
                    font-size: 1em;
                    font-weight: bold;
                }

                hr{
                    margin: 3px 0;
                }
            }

            .sabor{
                padding-bottom: 10px;
            }

            .caldas{
                padding-bottom: 10px;
            }
        }

        .btnConfirma{
            width: 100%;
            margin-top: 20px;

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

@media screen and (max-width: 1100px) {
    .montarMilkSHAKE{ 
        width: 55%;
    }   
}

@media screen and (max-width: 800px) {
    .montarMilkSHAKE{ 
        width: 65%;

        .selectMILKSHAKE{
            font-size: 0.9em;
        }
    }   
}

@media screen and (max-width: 500px) {
    .montarMilkSHAKE{ 
        width: 90%;

        .selectMILKSHAKE{
            font-size: 0.9em;
        }
    }   
}

    


`;
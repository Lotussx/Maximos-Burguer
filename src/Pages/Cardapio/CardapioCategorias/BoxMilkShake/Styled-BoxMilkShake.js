import styled, { keyframes } from "styled-components";

const animaModaladd = keyframes`
    0%{
    }
    100%{
        opacity: 1;
        margin-top: 0;
    }
`;


export const BoxMilkShakeContainer = styled.div`
  
@media screen and (max-width: 500px) {



    .montarMilkSHAKE{ 
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
        transition: .8s;
        z-index: 3 !important;


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

        .selectMILKSHAKE{
            flex-direction: column;
            justify-content: flex-start;
            width: 90%;

           

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
    
}


`;
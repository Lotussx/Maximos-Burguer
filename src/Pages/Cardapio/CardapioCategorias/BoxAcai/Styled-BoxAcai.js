import styled, { keyframes } from "styled-components";

const animaModaladd = keyframes`
    0%{
    }
    100%{
        opacity: 1;
        margin-top: 0;
    }
`;

export const BoxAcaiContainer = styled.div`

@media screen and (max-width: 500px) {


    .marginModal{
        margin-left: -800px !important;
        position: absolute;
    }
    
    .montarAcai{ 
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

        .selectAdcionais{
            flex-direction: column;
            justify-content: flex-start;
            width: 90%;

            h4{
                margin: 0;
                margin-bottom: 8px;
                font-size: 1em;
                font-weight: bold;
            }

            hr{
                margin: 3px 0;
            }

            .checkbox{
                width: 100%;
                justify-content: flex-start;
            }

            .frutas{
                padding-bottom: 10px;
            }

            .acompanhamentos{
                padding-bottom: 10px;

                .wrapper{
                    align-items: flex-start;

                    .content{
                        width: 50%;
                    }
                }
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

    .opcAdionaisAcai{
        opacity: 1 !important;
    }

    .adicionaisAcai{
        width: 90%;
        background-color: white;
        border-radius: 15px;
        flex-direction: column;
        justify-content: flex-start;
        animation-duration: 1s;
        animation-fill-mode: forwards;
        transition: .8s;
        position: absolute;
        transition: .8s;
        opacity: 0;
        padding: 15px;

        .titulo{
            width: 90%;
            height: 40px;
            justify-content: space-between;

            .space{
                width: 30px;
                height: 30px;
                font-size: 1.8em;
            }

            .nome{
                font-weight: bold;
                font-size: 1.4em;
            }
        }

        .aviso{
            width: 100%;
            text-align: center;
            font-size: .8em;
        }

        h4{
            margin: 0;
            margin-bottom: 8px;
            font-size: 1em;
            font-weight: bold;
        }

        

        .adicionaisFRUTAS{
            width: 100%;
            padding-bottom: 10px;
        }

        .adicionaisACOMPANHAMENTOS{
            width: 100%;
            padding-bottom: 10px;

            .wrapper{
                width: 100%;
                justify-content: space-between;
                align-items: flex-start;
                
                .content{
                   width: 49%;
                }

                .content1{
                    width: 100%;
                }
            }
        }

        .adicionaisCALDAS{
            width: 100%;
            padding-bottom: 10px;
        }

        .btnConfirma{
            width: 100%;
            padding: 10px 0 0px 0;

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
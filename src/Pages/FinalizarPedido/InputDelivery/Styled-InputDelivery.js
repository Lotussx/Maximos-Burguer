import styled, { keyframes } from "styled-components";

const animaEnd = keyframes`
    0%{

    }
    100%{
        opacity: 1;
    }
`;

export const InputDeliveryContainer = styled.div`

@media screen and (max-width: 500px) {
    margin: 10px auto 15px auto;
    width: 94%;
    font-size: 1em;
    
    
    input[name='opcao']{
        width: 15px;
        height: 15px;
        padding: 0;   
    }

    label{
        padding: 0 !important;
        padding: 0 10px !important;
        font-size: 1em !important;
    }

    .enderecoContainer{
        display: none;
    }



    &.inputRadioDeliveryOpen{
        transition: 1s;
        
        .enderecoContainer{
            font-size: .8em;
            font-family: sans-serif;
            opacity: 0;
            display: block;
            border: 1px solid red;

            animation: ${animaEnd};
            animation-duration: .5s;
            animation-timing-function: ease-in-out;
            animation-fill-mode: forwards;
            
            .inputText{
                border-radius: 10px;
                border-color: black;
                height: 25px;
                margin-top: 8px;
                
            }
            
            input[name='CEP']{
                width: 100% !important;
            }
            
            .ruaNum{
                justify-content: space-between;
                padding: 0 !important;

                input[name='RUA']{
                    width: 82% !important;
                    margin: 0 !important;
                    margin-top: 8px !important;
                }

                input[name='NUMERO']{
                    margin: 0 !important;
                    margin-top: 8px !important;
                    width: 15% !important;
                }
            }

            .bairroCidade{
                justify-content: space-between;
                padding: 0 !important;

                input[name='CIDADE']{
                    width: 82% !important;
                    margin: 0 !important;
                    margin-top: 8px !important;
                }

                input[name='BAIRRO']{
                    margin: 0 !important;
                    margin-top: 8px !important;
                    width: 15% !important;
                }
            }
        }

    
    }


}
`;



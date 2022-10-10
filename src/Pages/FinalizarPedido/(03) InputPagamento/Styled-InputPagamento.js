import styled from "styled-components";

export const InputPagamentoContainer = styled.div`

    @media screen and (max-width: 500px) {
        margin: 0px auto 15px auto;
        width: 92%;

        input[name='opcaoPAGA']{
            width: 15px;
            height: 15px;
        }
        
        label[for='opcaoPAGA']{
            font-size: 1em !important;
            margin: 0 !important;
            padding: 0 8px !important;
        }
        

        .trocoContainer{
            display: none !important;
        }

        &.opcPagamentoOPEN{
            .trocoContainer{
                margin-top: 5px;
                display: block !important;
                
                label{
                    font-size: 1.1em;
                    font-weight: bold;
                    padding: 5px 0 5px 0px;
                }

                .inputText{
                    margin: 0 auto;
                    margin-top: 0px;
                    width: 100%;
                    height: 30px;
                    border-radius: 10px;
                }
            }
        }
    
    
    }

`;
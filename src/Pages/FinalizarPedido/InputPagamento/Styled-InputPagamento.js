import styled from "styled-components";

export const InputPagamentoContainer = styled.div`

    @media screen and (max-width: 500px) {
        
        &.opcPagamentoCLOSE{
            margin: 0px auto 15px auto;
            width: 94%;
    
            .radio{
            border: 1px solid red;
            width: 15px;
            height: 15px;
            padding-right: 15px;
            }
    
            .trocoContainer{
                label{
                    padding: 10px;
                    font-size: 1em;
                }
    
                input[name='TROCO']{
                    display: none;
                }

                .teste{
                    display: none !important  ;
                }
            }
        }

        &.opcPagamentoOPEN{
            .trocoContainer{
              margin-top: 5px;
                display: block;
                
                label{
                    font-size: 1.1em;
                    font-weight: bold;
                    padding: 15px 0 15px 5px;
                }

                .inputText{
                    margin: 0 auto;
                    margin-top: 5px;
                    width: 92%;
                    height: 30px;
                    border-radius: 10px;
                }
            }
        }
    
    
    }

`;
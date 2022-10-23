import styled, { keyframes } from "styled-components";

const animaModaladd = keyframes`
    0%{
    }
    100%{
        opacity: 1;
        margin-top: 0;
    }
`;

export const AdicionaisContainer = styled.div`
@media screen and (max-width: 500px) {
    .modalAdicionaisContent{
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
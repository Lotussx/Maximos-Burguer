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
    .modalAdicionaisContent{
        opacity: 0;
        margin-top: 300px;
        width: 45%;
        padding: 20px;
        padding-top: 10px;
        background-color: white;
        border-radius: 15px;
        flex-direction: column;
        box-shadow: 1px 1px 5px black;
        justify-content: flex-start;
        animation: ${animaModaladd};
        animation-duration: 1s;
        animation-fill-mode: forwards;
    
        .nomeProduto{
            width: 95%;
            height: 40px;
            margin-bottom: 2px;
            justify-content: space-between;

            .space{
                width: 40px;
                height: 40px;
                font-size: 2.3em;
            }

            .nome{
                font-weight: 600;
                font-size: 1.4em;
            }
        }

        .aviso{
            width: 95%;
            text-align: center;
            font-size: .8em;
        }

        .selectAdcionais{
            flex-direction: column;
            justify-content: flex-start;
            width: 95%;
        }

        .btnConfirma{
            margin-top: 20px;
            width: 100%;

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
@media screen and (max-width: 769px) {
    .modalAdicionaisContent{
        width: 75%;
    }
}

@media screen and (max-width: 500px) {
    .modalAdicionaisContent{
        width: 90%;
    }
}
`;
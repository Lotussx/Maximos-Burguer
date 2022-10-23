import styled, { keyframes } from "styled-components";

const animaCategoria = keyframes`
    0%{
    }
    
    100%{
        margin-top: 0;
        opacity: 1;
    }
`;


export const CategoriaContainer = styled.div`

@media screen and (max-width: 500px) {
    &.categoryOFF{
        display: none;
        opacity: 0;
        transition: .3s;
    }

    &.categoryON{
        opacity: 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        margin-top: -100px;
        animation: ${animaCategoria};
        animation-duration: 1s;
        animation-timing-function: ease-in-out;
        animation-fill-mode: forwards;

        .categoria{
            width: 100%;
            justify-content: flex-start;
            margin-top: 15px;

            h3{
                font-size: 1.4em;
                font-weight: bold;
                padding-left: 25px;
            }
        }

        .produto{
            width: 90%;
            height: 120px;
            border-radius: 15px;
            box-shadow: 1px 1px 5px black;
            background-color: white;
            margin: 8px auto;
            justify-content: space-around;
            padding: 8px;


            .produtoIMG{
                width: 125px;
                height: 100%;
                background-position: center !important;
                background-size: 180% !important;
                border-radius: 10px; 
                box-shadow: 1px 1px 5px black;
            }

            .produtoINFO{
                width: 100%;
                height: 100%;
                flex-direction: column;
                justify-content: space-around;

                .nomeEpreco{
                    font-weight: bold;
                    font-size: .9em;
                    margin-top: 3px;
                }

                p{
                    font-size: 0.8em;
                    text-align: center;
                    margin: 5px 3px;
                }

                button{
                    width: 80%;
                    height: 25px;
                    border-radius: 20px;
                    font-size: .8em;
                    text-align: center;
                    box-shadow: 1px 1px 3px black;
                    font-weight: bold;
                    margin-bottom: 8px;
                }
            }
        }
    }
}
    

`;

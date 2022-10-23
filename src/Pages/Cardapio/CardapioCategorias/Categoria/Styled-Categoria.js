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

          
        h3{
            justify-content: flex-start;
            margin-top: 15px;
            width: 100%;
            font-size: 1.4em;
            padding-left: 20px;
        }
        

        .produto{
            width: 92%;
            height: 120px;
            border-radius: 15px;
            box-shadow: 1px 1px 5px black;
            background-color: white;
            margin: 8px auto;
            justify-content: space-between;
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
                justify-content: space-betweenx;

                .nomeEpreco{
                    font-weight: 600;
                    font-size: .9em;
                }

                p{
                    font-size: 0.75em;
                    text-align: center;
                    margin: auto 5px;
                }

                button{
                    width: 80%;
                    height: 25px;
                    border-radius: 20px;
                    font-size: .8em;
                    text-align: center;
                    box-shadow: 1px 1px 3px black;
                    font-weight: bold;
                }
            }
        }
    }
}
    

`;

import styled, { keyframes } from 'styled-components';

const animaCategoria = keyframes`
    0%{
    }
    
    100%{
        margin-top: 0;
        opacity: 1;
    }
`;


export const CategoriaContainer = styled.div`
   
    &.categoryOFF{
        display: none;
        opacity: 0;
        transition: .3s;
    }

    &.categoryON{
        width: 100%;
        opacity: 0;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        margin-top: -100px;
        padding: 0 1%;
        animation: ${animaCategoria};
        animation-duration: 1s;
        animation-timing-function: ease-in-out;
        animation-fill-mode: forwards;
        
        h3{
            justify-content: flex-start;
            margin-top: 15px;
            width: 100%;
            font-size: 1.4em;
            padding-left: 1.6%;
        }

        .wrapper{
            width: 100%;
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
            
            
    
            .produto{
                width: 30%;
                margin: 15px 1.6%;
                border-radius: 15px;
                box-shadow: 1px 1px 5px black;
                background-color: white;
                padding: 10px;
                align-items: flex-start;

    
                .img{
                    width: 40%;
                    height: 125px;
                    background-position: center !important;
                    background-size: 180% !important;
                    border-radius: 10px; 
                    box-shadow: 1px 1px 5px black;
                }   
    
                .info{
                    margin-left: 10px;
                    width: 100%;
                    height: 100%;
                    flex-direction: column;
                    justify-content: space-between;
                  
                    h3{
                        margin: 0;
                        width: 100%;
                        text-align: center;
                        font-size: 1.1em;
                        font-weight: bold;
                    }
                    
                    p{
                        width: 100%;
                        margin: 0;
                        font-size: 0.8em;
                        text-align: center;
                    
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


@media screen and (max-width: 1280px) {

    .produto{
        width: 47% !important;
        margin: 15px 1.5% !important;
        min-height: 120px;

        .img{
            width: 32% !important;
        }
        
    }

}

@media screen and (max-width: 1025px) {

    .produto{
        width: 47% !important;
        margin: 15px 1.5% !important;

        .img{
            width: 37% !important;
        }
        
    }

}

@media screen and (max-width: 769px) {

    .produto{
        width: 48% !important;
        margin: 8px 1% !important;

        .img{
            width: 45% !important;
        }
        
    }

}

@media screen and (max-width: 500px) {
    
    h3{
        padding-left: 10px !important;
    }

    .produto{
        width: 95% !important;
        margin: 8px auto !important;
        
        h3{
            padding: 0 !important;
        }

        .img{
            width: 42% !important;
            height: 115px !important;
        }
        
    }

}

`;

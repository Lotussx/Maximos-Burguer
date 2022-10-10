import styled from "styled-components";

export const FinalizarPedidoContainer = styled.body`

   @media screen and (max-width: 500px) {

        position: absolute;
        width: 100%;
        height: 100%;
        overflow-x: hidden !important;
        transition: all .5s;

        
        .mainContainer{
            font-family: 'Oswald', sans-serif;  
            width: 100%;
            height: 100%;
            margin-top: 21vh;
            flex-direction: column;
            justify-content: flex-start;
            
            .formContainer{
                border-radius: 10px;
                background-color: white;
                flex-direction: column;
                width: 85%;
                margin-top: 5%;
                justify-content: flex-start;
                align-items: flex-start;
                box-shadow: 2px 2px 10px black;
                

                label{
                    font-size: 1.1em;
                    font-weight: bold;
                    padding: 15px 0 5px 15px;
                }

                .inputText{
                    margin: 0 auto;
                    width: 92%;
                    height: 30px;
                    border-radius: 10px;
                    font-family: sans-serif;
                    font-size: .9em;
                    
                }   
            }
        
            .buttonFinalizar{
                width: 90%;
                height: 40px;
                margin: 20px auto;

                
                button{
                    box-shadow: 2px 2px 10px black;
                    border-radius: 20px;
                    width: 100%;
                    height: 100%;
                    background-color: orangered;
                    border: 0px solid red;


                    p{
                        font-family: 'Oswald', sans-serif;  
                        margin: 0;
                        font-size: 1.2em;
                        font-weight: bold;
                        color: white;
                    }
                }
            }

            

            }
    
        }


`;
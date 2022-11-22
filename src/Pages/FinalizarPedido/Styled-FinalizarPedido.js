import styled from "styled-components";

export const FinalizarPedidoContainer = styled.body`
    position: absolute;
    width: 100%;
    flex-direction: column;
    overflow-x: hidden !important;
    transition: all .5s;

    
    .mainContainer{
        font-family: 'Oswald', sans-serif;  
        width: 80%;
        height: 100%;
        padding-top: 15vh;
        margin: 0 auto;
        justify-content: space-between;
        align-items: flex-start;

        .wrapperPedido{
            width: 49%;
            flex-direction: column;
            justify-content: flex-start;
        }
        
        .formContainer{
            border-radius: 10px;
            background-color: white;
            flex-direction: column;
            width: 49%;
            justify-content: flex-start;
            align-items: flex-start;
            box-shadow: 2px 2px 10px black;
            
            label{
                font-size: 1.1em;
                font-weight: bold;
                padding: 15px 0 5px 15px;
            }
        }
    }


@media screen and (max-width: 1100px) {
    .mainContainer{
        width: 90%;
        padding-top: 14vh;
    }
}

@media screen and (max-width: 800px) {
    .mainContainer{
        width: 95%;
        padding-top: 16vh !important;
    }
}

@media screen and (max-width: 500px) {
    .mainContainer{
        flex-direction: column;
        align-items: center;
        width: 90% !important;
        padding-top: 9vh !important;
        
        .wrapperPedido{
            align-items: center;
            justify-content: center;
            width: 100%;
            margin-top: 5vh;
        }

        .formContainer{
            width: 100%;
            margin-top: 5%;
            margin-bottom: 10vh !important;
        }
    }
}





`;
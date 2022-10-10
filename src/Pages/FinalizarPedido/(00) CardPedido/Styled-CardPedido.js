import styled from "styled-components";

export const CardPedidoContainer = styled.div`


@media screen and (max-width: 500px) {

    width: 85%;
    margin-top: 40px;
    box-shadow: 2px 2px 10px black;
    border-radius: 10px;
    background-color: white;
    
        h3{
        margin: 0;
        padding: 6px 0 5px 15px;
        font-weight: bold;
        }

        .barra{
            width: 91%;
            margin: 0 auto;
            background-color: gray;
            border-color: gray;
            border: 1px solid gray;
            margin-bottom: 3px;
        }

        .infoPedido{
            padding-left: 15px;
            padding-right: 15px;
        }

        .precoPedido{
            width: 92%;
            height: 25%;
            padding-left: 15px;
            font-weight: bold;
            padding-top: 5px;
            padding-bottom: 7px;
        }

}

`;
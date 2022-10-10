import styled from "styled-components";

export const CategoriasContainer = styled.div`

    @media screen and (max-width: 500px) {
        width: 100%;
        height: 8vh;
        border: 1px solid red;
        font-family: 'Oswald', sans-serif;
        margin-top: 10px;
        overflow-x: scroll !important;
        box-sizing: content-box;
        justify-content: flex-start;

        a{
            width: 40%;
            color: black;
            text-decoration: none;
            padding: 0 !important;
            margin: auto !important;

            h4{
                text-align: center;
                font-size: 1.1em;
                font-weight: bold;
                border: 1px solid green;
                height: 100% !important;
                width: 120px !important;
            }
        }

        div{
            border: 1px solid blue;
            overflow-x: scroll !important;
            font-weight: bold;
            list-style: none;
            height: 30px;
            align-items: center !important;
            

        }
    }


`;
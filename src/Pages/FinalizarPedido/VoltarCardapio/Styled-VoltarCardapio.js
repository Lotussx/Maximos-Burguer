import styled from "styled-components";

export const VoltarCardapioContainer = styled.div`
    
    @media screen and (max-width: 500px) {
            min-width: 250px;
            min-height: 150px;
            margin: 0 auto;
            margin-top: -30%;
            box-shadow: 2px 2px 10px black;
            border-radius: 15px;
            font-family: 'Oswald', sans-serif;  
            flex-direction: column;
            justify-content: space-around;

            h3{
                padding: 8px;
                font-size: 1.1em;
            }

            a{
                width: 80%;
                height: 25px !important;
                padding-bottom: 15px;
                text-decoration: none;

                .btn{
                    font-weight: bold;
                    font-family: 'Oswald', sans-serif;  
                    border-radius: 15px;
                    border: 0px solid red;
                    width: 100%;
                    background-color: orangered;
                    color: white;
                    box-shadow: 1px 1px 5px black;
                    padding: 4px;
                    font-size: 1em;

                }
            }

        }
    

`;
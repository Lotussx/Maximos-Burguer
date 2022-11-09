import styled from "styled-components";

export const ContatoContainer = styled.div`
    margin-top: 15vh;
    width: 100%;
    font-family: 'Oswald', sans-serif;

    .contatoForm{
        flex-direction: column;
        justify-content: flex-start;
        padding-bottom: 10px;
        
        & :nth-child(1){
            font-weight: bold;
            font-size: 1.5em;
            margin-bottom: 10px;
        }

        form{
            width: 40%;
            background-color: white;
            box-shadow: 1px 1px 5px black;
            border-radius: 15px;
            padding: 15px;
            padding-bottom: 20px;

            label{
                width: 100%;
                padding-bottom: 0;
                margin-bottom: 2px !important;
                font-size: 1.2em !important;
                font-weight: bold;
            }

            input{
                width: 100%;
                border: 1px solid black;
                border-radius: 10px;
                padding-left: 5px;
                margin-bottom: 10px;
            }

            textarea[name='msg']{
                border-radius: 10px;
                border: 1px solid black;
                padding-left: 5px;
                width: 100%;
                height: 80px;
                vertical-align: top !important;
                margin-bottom: 10px;
            }   
            
            button{
                width: 100%;
                margin-top: 10px;
                height: 35px;
                border-radius: 10px;
                font-weight: bold;
                background-color: #198754;
                color: white;
                text-shadow: 1px 1px 1px black;
                border: 0px solid red;
                cursor: pointer;
                box-shadow: 1px 1px 5px black;
            }
        }
    }

    .redesSociais{
        flex-direction: column;
        justify-content: flex-start;
        width: 100%;
        padding: 30px;
        bottom: 0;

        h3{
            font-size: 1.3em;
            font-weight: bold;
            padding-bottom: 10px;
        }

        .icons{
            width: 20%;
            color: black !important;
            display: flex;
            justify-content: space-around;
            align-items: center;

            a{
                text-decoration: none !important;
                color: black;
            }

            .icons01{
                font-size: 25px;
                padding: 0 !important;
                margin: 0 !important;
                cursor: pointer;
                transition: .3s;

                :hover{
                    color: green;
                }
            }
            
            .icons02{
                font-size: 25px;
                padding: 0 !important;
                margin: 0 !important;
                cursor: pointer;
                transition: .3s;

                :hover{
                    color: blue;
                }
            }
            .icons03{
                font-size: 25px;
                padding: 0 !important;
                margin: 0 !important;
                cursor: pointer;

                transition: .3s;

                :hover{
                    color: pink;
                }
            }
        }
    }

@media screen and (max-width: 800px) {
    form{
        width: 60% !important;
    }
}

@media screen and (max-width: 500px) {
    form{
        width: 80% !important;
    }
    .icons{
        width: 30% !important;
    }
}



`;
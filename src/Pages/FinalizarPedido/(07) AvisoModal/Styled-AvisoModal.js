import styled, { keyframes } from "styled-components";

const AnimaModal = keyframes`
        0%{
                opacity: 0;
                display: block;
                margin-top: 100vh;
        }
        100%{
                margin-top: 0vh;
                opacity: 1;
                display: flex;
        }
`;

const AnimaBox = keyframes`
        0%{

        }
        100%{
            margin-top: -30%;
            margin-left: 0;
            opacity: 1;
        }
`;

export const AvisoModalContainer = styled.div`
       
        &.avisoModalOff{
                display: none;
                transition: .5s;
        }

        &.avisoModalOn{
                animation: ${AnimaModal};
                animation-fill-mode: forwards;
                animation-duration: 1s;

                position: fixed;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100vw;
                height: 100vh;
                padding: 0;
                background-image: linear-gradient(rgba(0, 0, 0, .8) 100%, black 0%);
                z-index: 999;

                display: flex;
                justify-content: center;
                align-items: center;

                .modalAviso{
                    opacity: 0;
                    animation: ${AnimaBox};
                    animation-fill-mode: forwards;
                    animation-duration: 1s;
                    animation-delay: .5s;

                    transition: .5s;
                    width: 300px;
                    height: 300px;
                    background-color: white;
                    border-radius: 10px;
                    box-shadow: 1px 1px 10px black;

                    flex-direction: column;
                    justify-content: space-around;
                    font-family: 'Oswald', sans-serif;  

                        .title{
                                width: 100%;
                                height: 15%;
                                justify-content: space-around;

                                div{
                                        width: 30px;
                                        height: 30px;
                                        display: flex;
                                        align-items: center;
                                        justify-content: center;
                                        flex-direction: column;

                                        .row1{
                                                width: 100%;
                                                height: 2px;
                                                background-color: black;
                                                margin: 0;
                                                transform: rotate(45deg);
                                        }
                                        .row2{
                                                margin: 0;
                                                margin: -2px;
                                                width: 100%;
                                                height: 2px;
                                                background-color: black;
                                                transform: rotate(-45deg);
                                        }

                                }
                                h2{
                                        text-align: center;
                                        margin: 0;
                                }
                        }
                        
                        p{
                                margin: 0;
                                width: 100%;
                                height: 50%;
                                text-align: center;
                                padding: 0 15px;
                                box-sizing: border-box;
                        }

                        .btn{
                                width: 100%;
                                height: 20%;
                                border: none;

                                a{
                                        width: 90%;
                                        text-decoration: none;
                                        height: 70%;
                                }
                                button{
                                        font-family: 'Oswald', sans-serif;  
                                        bottom: 0;
                                        width: 100%;
                                        height: 100%;
                                        font-size: 1.2em;
                                        font-weight: bold;
                                        border-radius: 20px;
                                        border: 0px solid black;
                                        color: white;
                                        background-color: greenyellow;
                                        text-shadow: 1px 1px 10px black;
                                        box-shadow: 1px 1px 10px black;
                                }
                        }
                        
                }
        }

@media screen and (max-width: 500px) {

}

       
        
        
`;
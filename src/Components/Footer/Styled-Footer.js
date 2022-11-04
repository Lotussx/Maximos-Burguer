import styled from "styled-components";

export const FooterContainer = styled.footer`
    width: 100%;
    position: absolute;
    height: 12vh;
    background-color: black;
    font-family: 'Oswald', sans-serif;
    bottom: 0 !important;

    nav{
        width: 60%;
        height: 100%;
        justify-content: space-around;

        a{
            text-decoration: none;
            color: white;
            width: 20%;
            cursor: pointer;

            div{
                width: 100%;
                flex-direction: column;

                svg{
                    font-size: 1.6em;
                }

                p{
                    font-size: 1em;
                    margin: 0;
                    margin-top: 2px;
                }
            }
        }
    }

@media screen and (max-width: 1024px) {
    p{
        font-size: 1.1em !important;
    }
}

@media screen and (max-width: 768px) {
    nav{
        width: 100%;
    }
}

@media screen and (max-width: 426px) {
    position: absolute;
    bottom: 0 !important;
    height: 90px !important;

    p{
        font-size: 0.9em !important;
    }
}

@media screen and (max-width: 376px) {
    a{
        width: 30% !important;
    
        svg{
            font-size: 1.5em !important;
        }
    
        p{
            font-size: 0.85em !important;
        }
    }
}

@media screen and (max-width: 321px) {
        svg{
            font-size: 1.4em !important;
        }
    
        p{
            font-size: 0.8em !important;
        }
    }
`;
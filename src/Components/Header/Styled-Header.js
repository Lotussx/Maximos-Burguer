import styled from "styled-components";
import logomarca from '../../Images/logomarca.png'

export const HeaderContainer = styled.header`

@media screen and (max-width: 500px) {
    overflow-y: hidden !important;
    height: 80px;
    width: 100vw;
    overflow-x: hidden !important;
    background-color: black;
    justify-content: space-between;
    position: fixed;
    top: 0;
    z-index: 1;
    
        .logo-title{
            height: 100%;
            width: 60%;
            justify-content: left;
            
            
            div{
                background-color: white;
                height: 60px;
                width: 60px;
                border-radius: 50%;
                margin-left: 15px;
                background-image: url(${logomarca});
                background-size: cover;
            }
            
            span{
                color: white;
                margin: 0;
                padding: 0;
                margin-left: 10px;
                font-family: 'Oswald', sans-serif;
                
                h3{
                    text-align: center;
                    font-size: 1.2em;
                }
            }
         }
        
    
        .menuLateral{
            width: 200px;
            height: 200px;
            position: absolute;

        }
}

`;


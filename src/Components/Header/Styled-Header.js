import styled from "styled-components";
import logomarca from '../../Images/logomarca.png'

export const HeaderContainer = styled.header`
    overflow: hidden !important;
    width: 100%;
    position: fixed !important;
    justify-content: space-between;
    height: 12vh;
    z-index: 10;
    top: 0;
    font-family: 'Oswald', sans-serif;
    background-color: black;
    color: white;


    .logo-title{
        height: 100%;
        width: 55%;
        
        a{
            justify-content: left;
            padding-left: 20px;
            width: 100%;
            height: 100%;
            text-decoration: none;
            color: white;  
            z-index: 999 !important; 

            div{
                height: 80px;
                width: 80px;
                background-image: url(${logomarca});
                background-size: cover;
                border-radius: 50%;
            }
    
            h3{
                margin: 0;
                margin-left: 10px;          
                font-size: 1.3em;
            }
        }
    }

    .menuLateral{
        width: 45%;
        height: 100%;
    }



@media screen and (max-width: 769px) {

    .logo-title{
        
        div{
            width: 60px !important;
            height: 60px !important;
        }

        h3{
            font-size: 1.1em !important;
        }
    }
}

@media screen and (max-width: 500px) {
    height: 90px;
    margin: 0 !important;
    z-index: 3 !important;

    .logo-title{
        height: 100%;
        width: 80%;
        
        a{
            
            div{
                height: 60px;
                width: 60px;
            }
    
            h3{
                font-size: 1.2em;
            }
        }
       
    }
    
    .menuLateral{
        width: 200px;
        height: 200px;
    }
}

@media screen and (max-width: 380px) {

    .logo-title{
        
        div{
            width: 50px !important;
            height: 50px !important;
        }

        h3{
            font-size: 1em !important;
        }
    }
}

@media screen and (max-width: 321px) {

    .logo-title{

        h3{
            font-size: 0.9em !important;
        }
    }
}





`;


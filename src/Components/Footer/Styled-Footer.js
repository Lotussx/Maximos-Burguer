import styled from "styled-components";

export const FooterContainer = styled.footer`

@media screen and (max-width: 500px) {

    bottom: 0;
    width: 100vw;
    height: 10vh;
    background-color: black;
    font-family: 'Oswald', sans-serif;


    nav{
        height: 70px;
        width: 100%;
        justify-content: space-around;

        .link{
            text-decoration: none;

           div{
            color: white;
            list-style: none;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            text-align: center;
            width: 100px;
            margin-top: 20px;
            
            &:hover .icons-footer{
                color: yellow;
                transition: 0.5s;
            }
            
            p{
                font-size: .9em;
                padding-top: 5px;
             }
           }
        }
        
        div{

            &:hover p{
                color: yellow;
                transition: 0.5s;
            }
    
            .icons-footer{
                font-size: 25px;
                margin-bottom: -5px;
            }
       
        }

    }
}

    
`;
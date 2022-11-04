import styled, { keyframes } from "styled-components";
import BackBuguer from '../../../Images/background-home.webp';
import logomarca from '../../../Images/logomarca.png';


const animaButton = keyframes`
     0%{
          box-shadow: 1px 1px 35px red;  
          transition: 0.5s all;
 
     }
     50%{
          box-shadow: 1px 1px 35px white;
          transition: 0.5s all;
     }

     100%{
          box-shadow: 1px 1px 35px red;  
          transition: 0.5s all;
     }

`;

export const StyledMainContainer = styled.div`
    background-image: linear-gradient(rgba(0,0,0,.3) 0%, rgba(0,0,0,.3) 100%), url(${BackBuguer});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 80vh !important;
    border: none !important;
    color: white;
    flex-direction: column;
    border: 1px solid red;
    font-family: 'Oswald', sans-serif;


    .logo{
        width: 200px;
        height: 200px;
        background-image: url(${logomarca});
        background-size: cover;
        border-radius: 100%;
        margin-top: -100px;
    }

    .legenda{
        margin-top: 20px;
        width: 80%;
        text-align: center;
        font-size: 1em;
        text-shadow: 1px 1px 1px black;
        flex-direction: column;
    }

    a{
        width: 250px;
        height: 35px;
        margin-top: 20px;

        button{
            width: 100%;
            height: 100%;
            background-color: black;
            color: white;
            border-radius: 10px;
            border-color: black;
            box-shadow: 1px 1px 20px white;
            animation: ${animaButton};
            animation-iteration-count: infinite;
            animation-fill-mode: forwards;
            animation-duration: 3s;
            transition: 0.5s all;


        }
    }

@media screen and (max-width: 450px) {
    height: 100% !important;
    border: 1px solid red;
}


`;
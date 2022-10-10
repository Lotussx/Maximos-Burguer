import styled, { keyframes } from "styled-components";
import BackBuguer from '../../Images/background-home.jpg';
import logomarca from '../../Images/logomarca.png';

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

export const HomeStyle = styled.div`

@media screen and (max-height: 665px) {

     & .mainContainer{          
          background-position-x: -300px !important;
     }
}

     
@media screen and (max-width: 500px) {

     position: absolute;
     width: 100%;
     height: 100%;
     overflow-x: hidden !important;
     overflow-y: hidden !important;
     display:  flex;
     flex-direction: column;
     align-items: center;
     justify-content: space-between;

          & .mainContainer{
          color: white;
          position: relative;
          width: 100%;
          height: 100%;
          background-image: url(${BackBuguer});
          background-repeat: no-repeat;
          background-position-x: -500px;
          background-size: cover;
          font-family: 'Oswald', sans-serif;

          
          .mainContent{
               width: 100%;
               height: 100%;
               background-image: linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.3));
               flex-direction: column;
               
               
               .logoWrapper{
                    background-color: white;
                    width: 180px;
                    height: 180px;
                    border-radius: 100%;
                    margin-top: -80px;
                    background-image: url(${logomarca});
                    background-size: cover;
               }

               .legenda{
                    margin-top: 40px;
                    width: 50%;
                    text-align: center;
                    font-size: 1em;
                    font-weight: bold;
                    text-shadow: 1px 1px 1px black;
                    flex-direction: column;
               }

               a{
                    width: 50%;
                    height: 40px;
                    
                    button{
                         color: white;
                         border-radius: 10px;
                         width: 100%;
                         height: 100%;
                         margin-top: 40px;
                         background-color: black;
                         border-color: black;
                         font-family: 'Oswald', sans-serif;
                         font-weight: bold;
                         animation: ${animaButton};
                         box-shadow: 1px 1px 20px white;
                         animation-iteration-count: infinite;
                         animation-fill-mode: forwards;
                         animation-duration: 3s;
                         transition: 0.5s all;
                    }
               }
          }
     }
}


`;
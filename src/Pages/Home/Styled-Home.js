import styled from "styled-components";
import BackBuguer from '../../Images/background-home.webp';


export const HomeStyle = styled.div`
    overflow: hidden !important;
    overflow-y: hidden !important;
    width: 100%;
    height: 100%;
    position: fixed !important;
    background-image: url(${BackBuguer}) !important;
    background-repeat: no-repeat;
    background-size: cover;

@media screen and (max-width: 769px) {
    background-position-x: -400px !important;
}
@media screen and (max-width: 500px) {
    background-position-x: -500px !important;
}

@media screen and (max-width: 376px) {
    background-position-x: -380px;
    background-size: cover !important;
}
  
`;
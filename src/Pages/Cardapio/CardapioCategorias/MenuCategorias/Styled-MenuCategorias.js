import styled from "styled-components";


export const MenuCategoriasConteiner = styled.ul`
    width: 100%;
    height: 80px;
    padding: 0 !important;
    background-color: black;
    color: white;
    margin: 0;

    li{
        width: 100%;
        height: 100%;
        list-style: none;
        display: flex;
        align-items: center !important;
        justify-content: center;
        margin: 0;
        text-align: center;
        padding: 5px 10px;
        height: 70%;
        border-right: 1px solid #1f1f1f;
        border-left: 1px solid #1f1f1f;

        h4{
            margin: 0;
            font-size: 1em;
            text-align: center;
        }
    }

   .categoria{
        background-color: black;
        color: white;
    }

   .categoriaON{
        background-color: white;
        color: black;
        border-radius: 15px;
        transition: 0.8s;

    }
    


@media screen and (max-width: 1025px) {
    height: 70px;
    font-size: 0.9em !important; 
}

@media screen and (max-width: 769px) {
    overflow-x: scroll !important;
    justify-content: flex-start;

    li{
        
        h4{
            width: 130px;
        }
    }
}

@media screen and (max-width: 426px) {
    h4{
        width: 100px !important;
    }
}

@media screen and (max-width: 321px) {
    height: 65px;
    font-size: 0.8em !important;

    h4{
        width: 90px !important;
    }
}


`;
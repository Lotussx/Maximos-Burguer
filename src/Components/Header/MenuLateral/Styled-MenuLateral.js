import styled from "styled-components";

export const MenuLateralContainer = styled.div`
    width: 25vw;
    position: fixed;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    z-index: 3;
    right: 0;
    flex-direction: column;
    margin-top: 5px;
    background-image: linear-gradient(rgba(0, 0, 0, .70), rgba(0, 0, 0, .70));



    .line-wrapper{
        width: 80px;
        height: 80px;
        flex-direction: column;
        margin-left: -150%;
        transition: all .5s;
        margin-top: 3px;

        
        .menu-solid-line{
            height: 2px;
            width: 35px;
            background-color: white;
            border-radius: 10px;
            margin: 5px 0 5px 0;
            transition: all .5s;
        }

        #menu-solid-line1-on{
           margin: 0;
           margin: -10px;
           margin-top: 5px;
           transition: all .5s;
           transform: rotate(45deg);
           

        }

        #menu-solid-line2-on{
            transition: all .5s;
            margin: 0;
            margin-right: -650px;

           
        }

        #menu-solid-line3-on{
           margin: 0;
           margin: 5px;
           transition: all .5s;
           transform: rotate(-45deg);
           
        }
    }

    &.menuLateral-off{
        margin-right: -400px;
        transition: 0.8s;
    }

    &.menuLateral-on{
        transition: 0.8s;

        .line-wrapper{
            margin-left: -60%;
            transition: all .5s;
        }
    }

    .botoes{
        width: 70%;
        height: 60%;
        font-family: 'Oswald', sans-serif;  

        a{
            text-decoration: none;
            color: white;
            
            h3{
                font-size: 1em;
                height: 30px;
            }
        }
           
        hr{
            background-color: gray;
            border-color: gray;
        }

    }

    .credits{
        font-family: 'Oswald', sans-serif;  
        color: white;
    }



@media screen and (max-width: 1440px) {
    &.menuLateral-off{
        margin-right: -385px;
    }
}

@media screen and (max-width: 1350px) {
    width: 30vw;
    height: 100vh;
    margin-top: 4px;

    &.menuLateral-off{
        margin-right: -420px;
    }
    
}

@media screen and (max-width: 1220px) {
    width: 30vw;
    height: 100vh;
    margin-top: 4px;

    &.menuLateral-off{
        margin-right: -380px;
    }
    
}

@media screen and (max-width: 1100px) {
    width: 30vw;
    height: 100vh;
    margin-top: 4px;

    &.menuLateral-off{
        margin-right: -360px;
    }
    
}

@media screen and (max-width: 1024px) {
    width: 30vw;
    height: 100vh;
    margin-top: 4px;

    &.menuLateral-off{
        margin-right: -310px;
    }
    
}

@media screen and (max-width: 900px) {
    &.menuLateral-off{
        margin-right: -280px;
    }
}

@media screen and (max-width: 800px) {
    &.menuLateral-off{
        margin-right: -230px;
    }
}

@media screen and (max-width: 768px) {
    &.menuLateral-off{
        margin-right: -230px;
    }
}

@media screen and (max-width: 700px) {
    &.menuLateral-off{
        margin-right: -210px;
    }
}

@media screen and (max-width: 600px) {
    &.menuLateral-off{
        margin-right: -200px;
    }
}

@media screen and (max-width: 650px) {
    &.menuLateral-off{
        margin-right: -200px;
    }
}

@media screen and (max-width: 600px) {
    &.menuLateral-off{
        margin-right: -180px;
    }
}

@media screen and (max-width: 550px) {
    &.menuLateral-off{
        margin-right: -165px;
    }
}

@media screen and (max-width: 500px) {
    width: 50vw;
    margin-top: 55px;

    &.menuLateral-off{
        margin-right: -250px;
    }
}

@media screen and (max-width: 450px) {
    width: 40vw;
    margin-top: 55px;

    &.menuLateral-off{
        margin-right: -170px;
    }
}

@media screen and (max-width: 425px) {
    width: 40vw;
    margin-top: 55px;
    
    &.menuLateral-off{
        margin-right: -50px;
    }
}

@media screen and (max-width: 380px) {
    width: 45vw;
    margin-top: 55px;
    
    &.menuLateral-off{
        margin-right: -170px;
    }

    .line-wrapper{
        
        .menu-solid-line{
            height: 2px;
            width: 30px;
            margin: 4px 0;
        }
    }

    .botoes{
        width: 70%;
        height: 60%;
        font-family: 'Oswald', sans-serif;  

        a{

            h3{
                font-size: 0.9em;
                height: 30px;
            }
        }
    }
}

@media screen and (max-width: 325px) {
    width: 40vw;
    margin-top: 55px;
    
    &.menuLateral-off{
        margin-right: -130px;
    }
}



`;
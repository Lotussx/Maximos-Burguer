import styled from "styled-components";

export const MenuLateralContainer = styled.div`

@media screen and (max-width: 500px) {
    position: fixed;
    width: 50vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    z-index: 3;
    right: 0;
    flex-direction: column;
    margin-top: 13.5%;
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
            margin-right: -400px;

           
        }
        #menu-solid-line3-on{
           margin: 0;
           margin: 5px;
           transition: all .5s;
           transform: rotate(-45deg);
           
        }
    }

    &.menuLateral-off{
        margin-right: -210px;
        transition: 0.5s;
    }
    &.menuLateral-on{
        transition: 0.5s;

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
                font-size: 1.1em;
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
}


`;
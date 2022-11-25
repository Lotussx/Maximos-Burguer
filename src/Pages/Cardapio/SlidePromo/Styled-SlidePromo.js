import styled from "styled-components";

export const SlideContainer = styled.div`
        width: 100%;
        height: 400px !important; 
        margin: 12vh auto 0 auto;
        font-family: 'Oswald', sans-serif;
        text-shadow: 3px 3px 2px black;

        .carousel{

            .carousel-indicators{
                margin: 3px !important;
            }
        }

        .carousel-control-next, .carousel-control-prev{
            z-index: 99 !important;
        }
        .itemCarousel{
            height: 400px;
            
            .itemSlide{
                background-repeat: no-repeat !important;
                background-size: cover !important;
                height: 100%;
                flex-direction: column;
                

                .carousel-caption{
                    flex-direction: column;
                    justify-content: flex-start;
                    height: 100%;
                    margin-bottom: -10px !important;
                    
                    h3{
                        font-size: 2em;
                        font-weight: bold;
                        margin: 0;
                        margin-top: 20px;
                        margin-bottom: 10px;
                    }

                    p{
                        font-family: 'Oswald', sans-serif;  
                        padding: 0;
                        margin: 0;
                        margin-bottom: 1.5%;
                    }

                    button{ 
                        padding: 3px;
                        text-transform: uppercase;
                        font-size: 1em;
                        text-align: center;
                        font-weight: bold;
                        width: 30%;
                        border-radius: 20px;
                        box-shadow: 1px 1px 10px;
                        margin-top: 22%;
                        z-index: 10 !important;
                    }
                }
            }
        }
      
@media screen and (max-width: 1050px) {
    height: 350px !important;

    .itemSlide{
        background-position: center !important;
    }

    .itemCarousel{
        height: 350px;

        .carousel-caption{
            margin-bottom: -10px !important;
            
            h3{
                font-size: 1.6em !important;
            }

            p{
                font-family: 'Oswald', sans-serif;  
                margin-bottom: 1.5%;
            }

            button{ 
                font-size: 1em;
                width: 30%;
                margin-top: 26% !important;
            }
        }
    }
}

@media screen and (max-width: 800px) {

    .itemCarousel{

        .carousel-caption{
            margin-bottom: -10px !important;
            
            h3{
                font-size: 1.3em !important;
            }

            p{
                font-family: 'Oswald', sans-serif;  
                margin-bottom: 1.5%;
                font-size: 1.1em !important;
            }
            
            button{ 
                font-size: 0.9em !important;
                width: 45% !important;
                margin-top: 36% !important;
            }
        }
    }
}

@media screen and (max-width: 500px) {
    margin-top: 10vh;
    height: 280px !important;
    
    .carousel{

        .carousel-indicators{
            margin-bottom: 3px !important;
            
            button{
                width: 8px !important;
                margin-top: 32% !important;

            }
        }
    }

    .itemCarousel{
        height: 280px;

        .carousel-caption{
            width: 100% !important;
            left: 0 !important;
            right: 0 !important;
    
            h3{
                font-size: 1.2em !important;
            }
    
            p{
                font-size: .9em !important;
            }
    
            button{
                position: fixed;
                font-size: .8em !important;
                width: 200px !important;
                margin-top: 210px !important;

            }   
        }
    }
}

@media screen and (max-width: 376px) {
    margin-top: 10vh;
    height: 220px !important;
    

    .itemCarousel{
        height: 220px;

        .carousel-caption{

            h3{
                font-size: 1.2em !important;
            }
    
            p{
                font-size: 0.9em !important;
            }
    
            button{
                position: absolute;
                width: 180px !important;
                font-size: 0.8em !important;
                margin-top: 160px !important;
            }
        }
    }
}

`;
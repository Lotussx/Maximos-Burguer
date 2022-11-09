import styled from "styled-components";

export const SlideContainer = styled.div`
        width: 100%;
        height: 400px !important; 
        margin: 12vh auto 0 auto;
        font-family: 'Oswald', sans-serif;
        text-shadow: 3px 3px 2px black;


        .itemCarousel{
            height: 400px;
            
            .itemSlide{
                background-repeat: no-repeat !important;
                background-size: cover !important;
                height: 100%;
                flex-direction: column;
                

                .carousel-caption{
                    flex-direction: column;
                    
                    h3{
                        font-size: 1.7em;
                        margin: 0;
                        margin-bottom: 1.5%;
                    }

                    p{
                        font-family: 'Oswald', sans-serif;  
                        padding: 0;
                        margin: 0;
                        margin-bottom: 1.5%;
                    }

                    button{ 
                        height: 25px;
                        font-size: .9em;
                        text-align: center;
                        font-weight: bold;
                        width: 25%;
                        border: 0px solid red;
                        border-radius: 15px;
                        box-shadow: 1px 1px 10px;
                        margin-bottom: 5px;
                    }
                }
            }
        }
      
@media screen and (max-width: 769px) {
    height: 300px !important;

    .itemCarousel{
        height: 300px;
    }
}

@media screen and (max-width: 500px) {
    margin-top: 10vh;
    height: 250px !important;
    
    .carousel{

        .carousel-indicators{
            margin: 0 !important;
        }
    }

    .itemCarousel{
        height: 250px;

        .carousel-caption{
            margin: 0 !important;
            margin-bottom: 5px !important;
            padding: 0 !important;
            height: 110px !important;
            justify-content: space-between !important;
        }

        h3{
            font-size: 1.2em !important;
        }

        p{
            font-size: .9em !important;
        }

        button{
            font-size: .9em !important;
            width: 200px !important;
            margin: 0 !important;
        }   
    }
}

@media screen and (max-width: 376px) {
    margin-top: 10vh;
    height: 220px !important;
    
    .carousel{

        .carousel-indicators{
            margin: 0 !important;
        }
    }

    .itemCarousel{
        height: 220px;

        .carousel-caption{
            margin: 0 !important;
            margin-bottom: 5px !important;
            padding: 0 !important;
            height: 95px !important;
            justify-content: space-between !important;
        }

        h3{
            font-size: 1.2em !important;
        }

        p{
            font-size: 0.9em !important;
        }

        button{
            width: 180px !important;
            height: 20px !important;
            font-size: 0.8em !important;
            margin: 0 !important;
        }   
    }
}

`;
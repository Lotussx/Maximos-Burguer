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
      
        @media screen and (max-width: 500px) {

        }

`;
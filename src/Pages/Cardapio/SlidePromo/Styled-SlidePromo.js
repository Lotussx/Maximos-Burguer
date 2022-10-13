import styled from "styled-components";

export const SlideContainer = styled.div`
        
        @media screen and (max-height: 665px) {
            height: 40% !important; 
            margin-bottom: 19px !important;

            .itemSlide{
                height: 280px !important;
            }

            .carousel-caption{
                h3{
                    padding-bottom: 2px !important;
                }
                
                p{
                    margin-bottom: 7px !important;
                }
            }
        }


        @media screen and (max-width: 500px) {
            width: 100%;
            margin: 0 auto;
            height: 260px;
            color: red;
            margin-top: 09vh;

            .carousel-indicators{
                margin: 0 !important;
            }
            
            .itemSlide{
                background-repeat: no-repeat !important;
                background-size: cover !important;
                height: 260px;
                flex-direction: column;

                .carousel-caption{
                    padding: 0 !important;
                    padding-bottom: 5px !important;
                    text-shadow: 3px 3px 2px black;
                    
                    
                    h3{
                        font-weight: bold;
                        font-size: 1.2em;
                        font-family: 'Oswald', sans-serif;
                        margin: 0;
                        margin-bottom: 10px;
                    }

                    p{
                        font-family: 'Oswald', sans-serif;  
                        padding: 0;
                        margin: 0;
                    }

                    .precoProduto{
                        font-family: 'Oswald', sans-serif;  
                        font-size: 1.2em;
                        margin: 0;
                        margin-bottom: 5px;
                    }

                    .btnADD{
                        z-index: 3 !important;
                        height: 25px;
                        

                        button{ 
                            height: 100%;
                            font-size: .9em;
                            text-align: center;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-family: 'Oswald', sans-serif;  
                            font-weight: bold;
                            width: 70%;
                            border: 0px solid red;
                            border-radius: 15px;
                            box-shadow: 1px 1px 10px;
                        }
                    }
                }
            }    
        }

`;
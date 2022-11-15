import React from 'react';
import { SlideContainer } from './Styled-SlidePromo';


import Carousel from 'react-bootstrap/Carousel';

export default function SlidePromo(props) {

    const { slideSEMANA, slideFDS, onADD } = props;
    const date = new Date()
    let diaSemana = date.getDay()

    switch (diaSemana) {
        case 0:
            diaSemana = 'DOM'
            break;
        case 1:
            diaSemana = 'SEG'
            break;
        case 2:
            diaSemana = 'TER'
            break;
        case 3:
            diaSemana = 'QUA'
            break;
        case 4:
            diaSemana = 'QUI'
            break;
        case 5:
            diaSemana = 'SEX'
            break;
        case 6:
            diaSemana = 'SAB'
            break;
        default:
            break;
    }

    let products = []
    if (diaSemana === 'SEG' || diaSemana === 'TER' || diaSemana === 'QUA' || diaSemana === 'QUI' || diaSemana === 'SEX') {
        products = slideSEMANA
    } else {
        products = slideFDS
    }

    return (
        <SlideContainer>
            <Carousel>
                {products.map((product) => (
                    <Carousel.Item className='itemCarousel'>
                        <div key={product.id} className='itemSlide flex-class' style={{ background: `linear-gradient(rgba(0, 0, 0, .3)0%, rgba(0, 0, 0, .3)100%), url(${product.image})` }}>
                            <div className='carousel-caption flex-class'>
                                <h3>{product.name} - R$ {product.price}</h3>
                                <p className='description'>{product.description}</p>
                                <button onClick={() => onADD(product)}>Adicionar ao carrinho</button>
                            </div>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </SlideContainer >
    )
};



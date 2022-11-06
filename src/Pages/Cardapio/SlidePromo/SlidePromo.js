import React from 'react';
import { SlideContainer } from './Styled-SlidePromo';


import Carousel from 'react-bootstrap/Carousel';

export default function SlidePromo(props) {

    const { products, onADD } = props;

    return (
        <SlideContainer>
            <Carousel>
                {products.map((product) => (
                    <Carousel.Item className='itemCarousel'>
                        <div key={product.id} className='itemSlide flex-class' style={{ background: `linear-gradient(rgba(0, 0, 0, .3)0%, rgba(0, 0, 0, .3)100%), url(${product.image})` }}>
                            <div className='carousel-caption flex-class'>
                                <h3>{product.name} - {product.price}</h3>
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



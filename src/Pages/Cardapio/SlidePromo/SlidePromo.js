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
                            <div className='carousel-caption'>
                                <h3>{product.name}</h3>
                                <p className='description'>{product.description}</p>
                                <div className='precoProduto'>R$ {product.price}</div>
                                <div className='btnADD flex-class'>
                                    <button onClick={() => onADD(product)}>Adicionar ao carrinho</button>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </SlideContainer >
    )
};



import React from 'react'
import { ProductContainer } from './Styled-Product';

import { Carousel } from 'react-bootstrap';

export default function Product(props) {

    const { product, onADD } = props;

    return (
        <ProductContainer >
            <Carousel.Item className='itemCarousel flex-class'>
                <img className='' src={product.image} alt={product.name}></img>
                <h3>{product.name}</h3>
                <div>${product.price}</div>
                <div>
                    <button onClick={() => onADD(product)}>Add To Cart</button>
                </div>

            </Carousel.Item>
        </ProductContainer>
    )
}

            // <img className='' src={product.image} alt={product.name}></img>
            // <h3>{product.name}</h3>
            // <div>${product.price}</div>
            // <div>
            //     <button onClick={() => onADD(product)}>Add To Cart</button>
            // </div>
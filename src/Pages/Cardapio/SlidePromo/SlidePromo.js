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
                        <div key={product.id} className='itemSlide flex-class' style={{ background: `linear-gradient(rgba(0, 0, 0, .2)0%, rgba(0, 0, 0, .2)100%), url(${product.image})` }}>
                            <div className='carousel-caption'>
                                <h3>{product.name}</h3>
                                <p className='description'>{product.description}</p>
                                <div className='precoProduto'>R$ {product.price}</div>
                                <div className='btnADD flex-class'>
                                    <button onClick={() => onADD(product)}>Adicionar no carrinho</button>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </SlideContainer >
    )
}


// <Carousel.Item className='itemCarousel flex-class'>
//     {/* <img className='imgPromo' src={product.image} alt={product.name}></img> */}
//     <img
//         className="d-block w-100"
//         src="holder.js/800x400?text=Third slide&bg=20232a"
//         alt={product.name}
//     />
//     <Carousel.Caption>
//         <h3>{product.name}</h3>
//         <div>${product.price}</div>
//         <div>
//             <button onClick={() => onADD(product)}>Add To Cart</button>
//         </div>
//     </Carousel.Caption>
// </Carousel.Item>

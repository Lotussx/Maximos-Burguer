import React from 'react'
import Product from '../Product/Product';
import { MainContainer } from './Styled-Main'

export default function Main(props) {
    const { products, onADD } = props;

    return (
        <MainContainer className='block col-2'>
            <h2>Products</h2>
            <div className='row'>
                {products.map((product) => (
                    <Product key={product.id} product={product} onADD={onADD}></Product>
                ))}
            </div>
        </MainContainer>
    )
}

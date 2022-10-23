import React from 'react'
import { CategoriaContainer } from './Styled-Categoria'

export default function Categoria({ productsMAP, modalAdicionais, className, nomeCategoria }) {
    return (
        <CategoriaContainer className={className}>
            <div className='categoria flex-class'>
                <h3>{nomeCategoria}</h3>
            </div>
            {productsMAP.map((product) => (
                <div className='produto flex-class'>
                    <div className='produtoIMG' style={{ background: `url(${product.image})` }}>

                    </div>
                    <div className='produtoINFO flex-class'>
                        <div className='nomeEpreco'>
                            {product.name} | R$ {product.price.toFixed(2)}
                        </div>
                        <p>{product.description}</p>
                        <button onClick={() => modalAdicionais(product)}>Adcionar ao carrinho</button>
                    </div>
                </div>
            ))}
        </CategoriaContainer>
    )
}

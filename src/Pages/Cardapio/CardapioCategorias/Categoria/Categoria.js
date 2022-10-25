import React from 'react'
import { CategoriaContainer } from './Styled-Categoria'

export default function Categoria({ products, modalAdicionais, className, nomeCategoria, btnText }) {
    return (
        <CategoriaContainer className={className}>
            <h3>{nomeCategoria}</h3>
            <>
                {products.map((product) => (
                    <div className='produto flex-class'>
                        <div className='produtoIMG' style={{ background: `url(${product.image})` }}></div>
                        <div className='produtoINFO flex-class'>
                            <div className='nomeEpreco'>
                                {product.name} | R$ {product.price.toFixed(2)}
                            </div>
                            <p>{product.description}</p>
                            <button onClick={() => modalAdicionais(product)}>{btnText}</button>
                        </div>
                    </div>
                ))}
            </>

        </CategoriaContainer>
    )
}

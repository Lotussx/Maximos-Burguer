import React from 'react'
import { CategoriaContainer } from './Styled-Categoria'

export default function Categoria({ products, modalAdicionais, className, nomeCategoria, btnText }) {
    return (
        <CategoriaContainer className={className}>
            <h3>{nomeCategoria}</h3>
            <div className='wrapper'>
                {products.map((product) => (
                    <div className='produto flex-class'>
                        <div className='img' style={{ background: `url(${product.image})` }}></div>
                        <div className='info flex-class'>
                            <h3>{product.name} | R$ {product.price.toFixed(2)}</h3>
                            <p>{product.description}</p>
                            <button onClick={() => modalAdicionais(product)}>{btnText}</button>
                        </div>
                    </div>
                ))}
            </div>

        </CategoriaContainer>
    )
}

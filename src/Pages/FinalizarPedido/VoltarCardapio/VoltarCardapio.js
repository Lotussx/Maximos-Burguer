import React from 'react';
import { Link } from 'react-router-dom';
import { VoltarCardapioContainer } from './Styled-VoltarCardapio';

export default function VoltarCardapio() {
    return (
        <VoltarCardapioContainer className='flex-class'>
            <h3>Seu carrinho está vazio. Por favor, <br></br>volte para a página de cardápio. </h3>
            <Link to='/Cardapio' className='flex-class'><button className='btn'>Voltar para o cardápio</button></Link>
        </VoltarCardapioContainer>
    )
}

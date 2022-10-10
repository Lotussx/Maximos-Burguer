import React from 'react';
import { CategoriasContainer } from './Syled-Categorias';

export default function Categorias() {
    return (
        <CategoriasContainer className='flex-class'>
            <a href='.'><h4>Todos</h4></a>
            <a href='.'><h4>Combos</h4></a>
            <a href='.'><h4>Promoções</h4></a>
            <a href='.'><h4>Hamburguer</h4></a>
            <a href='.'><h4>Batata Frita</h4></a>
            <a href='.'><h4>Bebidas</h4></a>
        </CategoriasContainer>
    )
}

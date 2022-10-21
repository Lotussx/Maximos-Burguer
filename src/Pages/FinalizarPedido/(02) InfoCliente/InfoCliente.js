import React from 'react';
import { InfoClienteContainer } from './Styled-InfoCliente';

export default function InfoCliente() {
    return (
        <InfoClienteContainer className='flex-class'>
            {/* Input para inserir o nome */}
            <label htmlFor='name'>Digite seu nome:</label>
            <input name='nome' type='text' id='name' placeholder='Digite seu nome aqui...' className='inputText' required></input>
            {/* Input para inserir observações */}
            <label htmlFor='obsPedido'>Observações do pedido:</label>
            <input name='obsPedido' type='text' id='obsPedido' placeholder='Ex: sem alface e cebola...' className='inputText'></input>
        </InfoClienteContainer>
    )
}

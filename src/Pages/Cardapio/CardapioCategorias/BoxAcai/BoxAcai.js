import React from 'react';
import { BoxAcaiContainer } from './Styled-BoxAcai';

import { IoClose } from 'react-icons/io5';
import Global from '../../../../Global';
import Checkbox from '../Adicionais/Checkbox/Checkbox';

export default function BoxAcai({ className, fecharModalAdicionais, confirmaAdicional }) {
    return (
        <BoxAcaiContainer className={className}>
            <div className='modalAdicionaisContent flex-class'>
                <div className='nomeProduto flex-class'>
                    <div className='space'></div>
                    <div className='nome'>{Global.nomeProdutoAdcional}</div>
                    <div className='space flex-class' onClick={fecharModalAdicionais}>
                        <IoClose></IoClose>
                    </div>
                </div>

                <div className='aviso flex-class'>
                    <p>Escolha os adcionais e clique em "Confirmar". Caso não queira nenhum, deixar caixinhas em branco e clicar em "Confirmar".</p>
                    <hr></hr>
                </div>

                <div className='selectAdcionais flex-class'>
                    <Checkbox preco='3,00' nomeAdicional='Frango' />
                    <Checkbox preco='4,00' nomeAdicional='Carne' />
                    <Checkbox preco='5,00' nomeAdicional='Carne de sol' />
                    <Checkbox preco='8,00' nomeAdicional='Picanha' />
                    <Checkbox preco='3,00' nomeAdicional='Calabresa' />
                    <Checkbox preco='3,00' nomeAdicional='Bacon' />
                    <Checkbox preco='2,00' nomeAdicional='Salsicha' />
                    <Checkbox preco='2,00' nomeAdicional='Queijo mussarela' />
                    <Checkbox preco='3,00' nomeAdicional='Cream cheese' />
                    <Checkbox preco='3,00' nomeAdicional='Cream cheddar' />
                    <Checkbox preco='2,00' nomeAdicional='Ovo' />
                </div>

                <div className='btnConfirma flex-class'>
                    <button onClick={confirmaAdicional}>Confirmar</button>
                </div>
            </div>
        </BoxAcaiContainer>
    )
}

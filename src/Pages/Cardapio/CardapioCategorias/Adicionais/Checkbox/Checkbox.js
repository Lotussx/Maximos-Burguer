import React from 'react'
import { CheckboxContainer } from './Styled-Checkbox'

export default function Checkbox({ preco, nomeAdicional }) {
    return (
        <CheckboxContainer className='flex-class'>
            <div className='input flex-class'>
                <input type='checkbox' name='selectADC01' value={nomeAdicional}></input>
                <label htmlFor='select01'><p><nobr>{nomeAdicional}</nobr></p></label>
            </div>
            <div className='espaco flex-class'>
                <div></div>
            </div>
            <div className='preco flex-class'>
                <nobr className='flex-class'>
                    <p>R$ </p><span>{preco}</span>
                </nobr>
            </div>
        </CheckboxContainer>
    )
}

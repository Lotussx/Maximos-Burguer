import React from 'react'
import { IoClose } from 'react-icons/io5';

import Global from '../../../../Global'
import { BoxSucosContainer } from './Styled-BoxSucos';

export default function BoxSucos({ className, fecharModalSucos, verificaSUCO, confirmaSUCO }) {
    return (
        <BoxSucosContainer className={className}>
            <div className='escolhaSabor flex-class' >
                <div className='nomeProduto flex-class'>
                    <div className='space'></div>
                    <div className='nome'>{Global.suco}</div>
                    <div className='space flex-class' onClick={fecharModalSucos}>
                        <IoClose></IoClose>
                    </div>
                </div>

                <div className='selectSabor flex-class'>
                    <div className='checkbox sabor'>
                        <h4>Selecione um sabor</h4>
                        <hr></hr>
                        <div className='checkbox flex-class'>
                            <input onChange={verificaSUCO} type='checkbox' name='Morango' value='Morango'></input>
                            <label htmlFor='Morango'>Morango</label>
                        </div>
                        <div className='checkbox flex-class'>
                            <input onChange={verificaSUCO} type='checkbox' name='Acerola' value='Acerola'></input>
                            <label htmlFor='Acerola'>Acerola</label>
                        </div>
                        <div className='checkbox flex-class'>
                            <input onChange={verificaSUCO} type='checkbox' name='Graviola' value='Graviola'></input>
                            <label htmlFor='Graviola'>Graviola</label>
                        </div>
                        <div className='checkbox flex-class'>
                            <input onChange={verificaSUCO} type='checkbox' name='Pinha' value='Pinha'></input>
                            <label htmlFor='Pinha'>Pinha</label>
                        </div>
                        <div className='checkbox flex-class'>
                            <input onChange={verificaSUCO} type='checkbox' name='Caja' value='Caja'></input>
                            <label htmlFor='Caja'>Caja</label>
                        </div>
                        <div className='checkbox flex-class'>
                            <input onChange={verificaSUCO} type='checkbox' name='Abacaxi' value='Caju'></input>
                            <label htmlFor='Caju'>Caju</label>
                        </div>
                        <div className='checkbox flex-class'>
                            <input onChange={verificaSUCO} type='checkbox' name='Abacaxi' value='Abacaxi'></input>
                            <label htmlFor='Abacaxi'>Abacaxi</label>
                        </div>
                        <div className='checkbox flex-class'>
                            <input onChange={verificaSUCO} type='checkbox' name='Maracujá' value='Maracujá'></input>
                            <label htmlFor='Maracujá'>Maracujá</label>
                        </div>
                        <div className='checkbox flex-class'>
                            <input onChange={verificaSUCO} type='checkbox' name='Abacaxi com hortelã' value='Abacaxi com hortelã'></input>
                            <label htmlFor='Abacaxi com hortelã'>Abacaxi com hortelã</label>
                        </div>
                    </div>
                </div>

                <div className='btnConfirma flex-class'>
                    <button onClick={confirmaSUCO}>Confirmar</button>
                </div>
            </div>

        </BoxSucosContainer>
    )
}

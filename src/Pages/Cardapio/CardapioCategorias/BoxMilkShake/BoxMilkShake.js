import React from 'react'
import { IoClose } from 'react-icons/io5';
import Checkbox from '../Adicionais/Checkbox/Checkbox';
import { BoxMilkShakeContainer } from './Styled-BoxMilkShake';

import Global from '../../../../Global'

export default function BoxMilkShake({ className, fecharModalMilkShake, className2, verificaMILKSHAKE, confirmaMILKSHAKE }) {
    return (
        <BoxMilkShakeContainer className={className}>
            <div className={`montarMilkSHAKE flex-class ${className2}`} >
                <div className='nomeProduto flex-class'>
                    <div className='space'></div>
                    <div className='nome'>{Global.milkShake}</div>
                    <div className='space flex-class' onClick={fecharModalMilkShake}>
                        <IoClose></IoClose>
                    </div>
                </div>

                <div className='aviso flex-class'>
                    <p>{Global.descriMilkShake}</p>
                    <hr></hr>
                </div>

                <div className='selectMILKSHAKE flex-class'>
                    <div className='checkbox sabor'>
                        <h4>Selecione o sabor</h4>
                        <hr></hr>
                        <div className='checkbox flex-class'>
                            <input onChange={verificaMILKSHAKE} type='checkbox' name='Ninho com oreo' value='Ninho com oreo'></input>
                            <label htmlFor='Ninho com oreo'>Ninho com oreo</label>
                        </div>
                        <div className='checkbox flex-class'>
                            <input onChange={verificaMILKSHAKE} type='checkbox' name='Ovo Maltine' value='Ovo Maltine'></input>
                            <label htmlFor='Ovo Maltine'>Ovo Maltine</label>
                        </div>
                        <div className='checkbox flex-class'>
                            <input onChange={verificaMILKSHAKE} type='checkbox' name='Africano' value='Africano'></input>
                            <label htmlFor='Africano'>Africano</label>
                        </div>
                        <div className='checkbox flex-class'>
                            <input onChange={verificaMILKSHAKE} type='checkbox' name='Chocolate' value='Chocolate'></input>
                            <label htmlFor='Chocolate'>Chocolate</label>
                        </div>
                        <div className='checkbox flex-class'>
                            <input onChange={verificaMILKSHAKE} type='checkbox' name='Morango' value='Morango'></input>
                            <label htmlFor='Morango'>Morango</label>
                        </div>
                        <div className='checkbox flex-class'>
                            <input onChange={verificaMILKSHAKE} type='checkbox' name='Chocomenta' value='Chocomenta'></input>
                            <label htmlFor='Chocomenta'>Chocomenta</label>
                        </div>
                    </div>


                    <div className='checkbox caldas'>
                        <h4>Caldas</h4>
                        <hr></hr>
                        <div className='checkbox flex-class'>
                            <input onChange={verificaMILKSHAKE} type='checkbox' name='Morango' value='Morango'></input>
                            <label htmlFor='Morango '>Calda de Morango</label>
                        </div>
                        <div className='checkbox flex-class'>
                            <input onChange={verificaMILKSHAKE} type='checkbox' name='Chocolate' value='Chocolate'></input>
                            <label htmlFor='Chocolate '>Calda de Chocolate</label>
                        </div>
                        <div className='checkbox flex-class'>
                            <input onChange={verificaMILKSHAKE} type='checkbox' name='Leite condensado' value='Leite condensado'></input>
                            <label htmlFor='Leite condensado '>Leite condensado</label>
                        </div>
                    </div>


                    <div className='checkbox adicionais'>
                        <h4>Adicionais</h4>
                        <hr></hr>
                        <Checkbox preco='1,00' nomeAdicional='Calda de Chocolate' />
                        <Checkbox preco='1,00' nomeAdicional='Calda de Morango' />
                        <Checkbox preco='1,00' nomeAdicional='Leite Condensado' />

                    </div>



                </div>

                <div className='btnConfirma flex-class'>
                    <button onClick={confirmaMILKSHAKE}>Confirmar</button>
                </div>
            </div>






        </BoxMilkShakeContainer>
    )
}

import React from 'react';
import { BoxAcaiContainer } from './Styled-BoxAcai';

import { IoClose } from 'react-icons/io5';
import Global from '../../../../Global';
import Checkbox from '../Adicionais/Checkbox/Checkbox';


export default function BoxAcai({ className, fecharModalAdicionais, confirmaAdicional, verificaFruta }) {


    return (
        <BoxAcaiContainer className={className}>
            <div className='modalAdicionaisContent flex-class'>
                <div className='nomeProduto flex-class'>
                    <div className='space'></div>
                    <div className='nome'>{Global.acai}</div>
                    <div className='space flex-class' onClick={fecharModalAdicionais}>
                        <IoClose></IoClose>
                    </div>
                </div>

                <div className='aviso flex-class'>
                    <p>{Global.descriAcai}</p>
                    <hr></hr>
                </div>

                <div className='selectAdcionais flex-class'>
                    <div className='checkbox frutas'>
                        <p>Selecione a(s) frutas</p>
                        <hr></hr>
                        <div className='checkbox flex-class'>
                            <input onChange={verificaFruta} type='checkbox' name='Banana' value='Banana'></input>
                            <label htmlFor='Banana'>Banana</label>
                        </div>
                        <div className='checkbox flex-class'>
                            <input onChange={verificaFruta} type='checkbox' name='Abacaxi' value='Abacaxi'></input>
                            <label htmlFor='Abacaxi'>Abacaxi</label>
                        </div>
                        <div className='checkbox flex-class'>
                            <input onChange={verificaFruta} type='checkbox' name='Morango' value='Morango'></input>
                            <label htmlFor='Morango'>Morango</label>
                        </div>
                        <div className='checkbox flex-class'>
                            <input onChange={verificaFruta} type='checkbox' name='Kiwi' value='Kiwi'></input>
                            <label htmlFor='Kiwi'>Kiwi</label>
                        </div>
                        <div className='checkbox flex-class'>
                            <input onChange={verificaFruta} type='checkbox' name='Uva' value='Uva'></input>
                            <label htmlFor='Uva '>Uva</label>
                        </div>
                    </div>
                    <div className='checkbox acompanhamentos'>
                        <p>Selecione o(s) acompanhamentos</p>
                        <hr></hr>
                        <div className='wrapper flex-class'>
                            <div className='content'>
                                <div className='checkbox flex-class'>
                                    <input onChange={verificaFruta} type='checkbox' name='Embutidos' value='Embutidos'></input>
                                    <label htmlFor='Embutidos'>Embutidos</label>
                                </div>
                                <div className='checkbox flex-class'>
                                    <input onChange={verificaFruta} type='checkbox' name='Leite em pó' value='Leite em pó'></input>
                                    <label htmlFor='Leite em pó'>Leite em pó</label>
                                </div>
                                <div className='checkbox flex-class'>
                                    <input onChange={verificaFruta} type='checkbox' name='Granola' value='Granola'></input>
                                    <label htmlFor='Granola'>Granola</label>
                                </div>
                                <div className='checkbox flex-class'>
                                    <input onChange={verificaFruta} type='checkbox' name='Farinha de amendoim' value='Farinha de amendoim'></input>
                                    <label htmlFor='Farinha de amendoim'>Farinha de amendoim</label>
                                </div>
                                <div className='checkbox flex-class'>
                                    <input onChange={verificaFruta} type='checkbox' name='Jujuba' value='Jujuba'></input>
                                    <label htmlFor='Jujuba'>Jujuba</label>
                                </div>
                                <div className='checkbox flex-class'>
                                    <input onChange={verificaFruta} type='checkbox' name='M&M' value='M&M'></input>
                                    <label htmlFor='M&M'>M&M</label>
                                </div>
                                <div className='checkbox flex-class'>
                                    <input onChange={verificaFruta} type='checkbox' name='Sucrilhos' value='Sucrilhos'></input>
                                    <label htmlFor='Sucrilhos'>Sucrilhos</label>
                                </div>
                            </div>
                            <div className='content'>
                                <div className='checkbox flex-class'>
                                    <input onChange={verificaFruta} type='checkbox' name='Chocolate' value='Chocolate'></input>
                                    <label htmlFor='Chocolate'>Chocolate</label>
                                </div>
                                <div className='checkbox flex-class'>
                                    <input onChange={verificaFruta} type='checkbox' name='Kit-kat' value='Kit-kat'></input>
                                    <label htmlFor='Kit-kat'>Kit-kat</label>
                                </div>
                                <div className='checkbox flex-class'>
                                    <input onChange={verificaFruta} type='checkbox' name='Farinha lacta' value='Farinha lacta'></input>
                                    <label htmlFor='Farinha lacta'>Farinha lacta</label>
                                </div>
                                <div className='checkbox flex-class'>
                                    <input onChange={verificaFruta} type='checkbox' name='Ovo Maltine' value='Ovo Maltine'></input>
                                    <label htmlFor='Ovo Maltine'>Ovo Maltine</label>
                                </div>
                                <div className='checkbox flex-class'>
                                    <input onChange={verificaFruta} type='checkbox' name='Oreo' value='Oreo'></input>
                                    <label htmlFor='Oreo'>Oreo</label>
                                </div>
                                <div className='checkbox flex-class'>
                                    <input onChange={verificaFruta} type='checkbox' name='Biss' value='Biss'></input>
                                    <label htmlFor='Biss'>Biss</label>
                                </div>
                                <div className='checkbox flex-class'>
                                    <input onChange={verificaFruta} type='checkbox' name='Granulado' value='Granulado'></input>
                                    <label htmlFor='Granulado'>Granulado</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='checkbox caldas'>
                        <p>Caldas</p>
                        <hr></hr>
                        <div className='checkbox flex-class'>
                            <input onChange={verificaFruta} type='checkbox' name='Morango' value='Morango'></input>
                            <label htmlFor='Morango '>Morango</label>
                        </div>
                        <div className='checkbox flex-class'>
                            <input onChange={verificaFruta} type='checkbox' name='Chocolate' value='Chocolate'></input>
                            <label htmlFor='Chocolate '>Chocolate</label>
                        </div>
                        <div className='checkbox flex-class'>
                            <input onChange={verificaFruta} type='checkbox' name='Mel' value='Mel'></input>
                            <label htmlFor='Mel '>Mel</label>
                        </div>
                        <div className='checkbox flex-class'>
                            <input onChange={verificaFruta} type='checkbox' name='Leite condensado' value='Leite condensado'></input>
                            <label htmlFor='Leite condensado '>Leite condensado</label>
                        </div>
                    </div>

                </div>

                <div className='btnConfirma flex-class'>
                    <button onClick={confirmaAdicional}>Confirmar</button>
                </div>
            </div>
        </BoxAcaiContainer >
    )
}

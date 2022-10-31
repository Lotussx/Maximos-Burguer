import React from 'react';
import { BoxAcaiContainer } from './Styled-BoxAcai';

import { IoClose } from 'react-icons/io5';
import Global from '../../../../Global';
import Checkbox from '../Adicionais/Checkbox/Checkbox';


export default function BoxAcai({ className, className2, className3, fecharModalAdicionais, modalAcai02, verificaACAI }) {


    return (
        <BoxAcaiContainer className={className}>
            {/* Montar Açaí */}
            <div className={`montarAcai flex-class ${className2}`} >
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
                        <h4>Selecione a(s) frutas</h4>
                        <hr></hr>
                        <div className='checkbox flex-class'>
                            <input onChange={verificaACAI} type='checkbox' name='Banana' value='Banana'></input>
                            <label htmlFor='Banana'>Banana</label>
                        </div>
                        <div className='checkbox flex-class'>
                            <input onChange={verificaACAI} type='checkbox' name='Abacaxi' value='Abacaxi'></input>
                            <label htmlFor='Abacaxi'>Abacaxi</label>
                        </div>
                        <div className='checkbox flex-class'>
                            <input onChange={verificaACAI} type='checkbox' name='Morango' value='Morango'></input>
                            <label htmlFor='Morango'>Morango</label>
                        </div>
                        <div className='checkbox flex-class'>
                            <input onChange={verificaACAI} type='checkbox' name='Kiwi' value='Kiwi'></input>
                            <label htmlFor='Kiwi'>Kiwi</label>
                        </div>
                        <div className='checkbox flex-class'>
                            <input onChange={verificaACAI} type='checkbox' name='Uva' value='Uva'></input>
                            <label htmlFor='Uva '>Uva</label>
                        </div>
                    </div>
                    
                    <div className='checkbox acompanhamentos'>
                        <h4>Selecione o(s) acompanhamentos</h4>
                        <hr></hr>
                        <div className='wrapper flex-class'>
                            <div className='content'>
                                <div className='checkbox flex-class'>
                                    <input onChange={verificaACAI} type='checkbox' name='Leite em pó' value='Leite em pó'></input>
                                    <label htmlFor='Leite em pó'>Leite em pó</label>
                                </div>
                                <div className='checkbox flex-class'>
                                    <input onChange={verificaACAI} type='checkbox' name='Granola' value='Granola'></input>
                                    <label htmlFor='Granola'>Granola</label>
                                </div>
                                <div className='checkbox flex-class'>
                                    <input onChange={verificaACAI} type='checkbox' name='Farinha de amendoim' value='Farinha de amendoim'></input>
                                    <label htmlFor='Farinha de amendoim'>Farinha de amendoim</label>
                                </div>
                                <div className='checkbox flex-class'>
                                    <input onChange={verificaACAI} type='checkbox' name='Jujuba' value='Jujuba'></input>
                                    <label htmlFor='Jujuba'>Jujuba</label>
                                </div>
                                <div className='checkbox flex-class'>
                                    <input onChange={verificaACAI} type='checkbox' name='M&M' value='M&M'></input>
                                    <label htmlFor='M&M'>M&M</label>
                                </div>
                                <div className='checkbox flex-class'>
                                    <input onChange={verificaACAI} type='checkbox' name='Sucrilhos' value='Sucrilhos'></input>
                                    <label htmlFor='Sucrilhos'>Sucrilhos</label>
                                </div>
                                <div className='checkbox flex-class'>
                                    <input onChange={verificaACAI} type='checkbox' name='Chocolate' value='Chocolate'></input>
                                    <label htmlFor='Chocolate'>Chocolate</label>
                                </div>
                            </div>
                            <div className='content'>
                                <div className='checkbox flex-class'>
                                    <input onChange={verificaACAI} type='checkbox' name='Kit-kat' value='Kit-kat'></input>
                                    <label htmlFor='Kit-kat'>Kit-kat</label>
                                </div>
                                <div className='checkbox flex-class'>
                                    <input onChange={verificaACAI} type='checkbox' name='Farinha lacta' value='Farinha lacta'></input>
                                    <label htmlFor='Farinha lacta'>Farinha lacta</label>
                                </div>
                                <div className='checkbox flex-class'>
                                    <input onChange={verificaACAI} type='checkbox' name='Ovo Maltine' value='Ovo Maltine'></input>
                                    <label htmlFor='Ovo Maltine'>Ovo Maltine</label>
                                </div>
                                <div className='checkbox flex-class'>
                                    <input onChange={verificaACAI} type='checkbox' name='Oreo' value='Oreo'></input>
                                    <label htmlFor='Oreo'>Oreo</label>
                                </div>
                                <div className='checkbox flex-class'>
                                    <input onChange={verificaACAI} type='checkbox' name='Biss' value='Biss'></input>
                                    <label htmlFor='Biss'>Biss</label>
                                </div>
                                <div className='checkbox flex-class'>
                                    <input onChange={verificaACAI} type='checkbox' name='Granulado' value='Granulado'></input>
                                    <label htmlFor='Granulado'>Granulado</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='checkbox caldas'>
                        <h4>Caldas</h4>
                        <hr></hr>
                        <div className='checkbox flex-class'>
                            <input onChange={verificaACAI} type='checkbox' name='Morango' value='Morango'></input>
                            <label htmlFor='Morango '>Morango</label>
                        </div>
                        <div className='checkbox flex-class'>
                            <input onChange={verificaACAI} type='checkbox' name='Chocolate' value='Chocolate'></input>
                            <label htmlFor='Chocolate '>Chocolate</label>
                        </div>
                        <div className='checkbox flex-class'>
                            <input onChange={verificaACAI} type='checkbox' name='Mel' value='Mel'></input>
                            <label htmlFor='Mel '>Mel</label>
                        </div>
                        <div className='checkbox flex-class'>
                            <input onChange={verificaACAI} type='checkbox' name='Leite condensado' value='Leite condensado'></input>
                            <label htmlFor='Leite condensado '>Leite condensado</label>
                        </div>
                    </div>
                </div>

                <div className='btnConfirma flex-class'>
                    <button onClick={modalAcai02}>Próximo</button>
                </div>
            </div>



            {/* Adicionais Açaí */}
            <div className={`adicionaisAcai flex-class ${className3}`} >
                <div className='titulo flex-class'>
                    <div className='space'></div>
                    <div className='nome'>Adicionais</div>
                    <div className='space flex-class' onClick={fecharModalAdicionais}>
                        <IoClose></IoClose>
                    </div>
                </div>

                <p className='aviso'>Selecione os adicionais e clique em "Confirmar". Caso não queira nenhum adicional, deixar caixinhas e branco e apertar em "Confirmar"</p>

                {/* ADC Frutas */}
                <div className='adicionaisFRUTAS'>
                    <h4>Frutas</h4>

                    <Checkbox preco='2,00' nomeAdicional='Banana' />
                    <Checkbox preco='2,00' nomeAdicional='Abacaxi' />
                    <Checkbox preco='2,00' nomeAdicional='Morango' />
                    <Checkbox preco='2,00' nomeAdicional='Kiwi' />
                    <Checkbox preco='2,00' nomeAdicional='Uva' />
                </div>

                {/* ADC Acompanhamento */}
                <div className='adicionaisACOMPANHAMENTOS'>
                    <h4>Acompanhamentos</h4>

                    <div className='wrapper flex-class'>
                        <div className='content'>
                            <Checkbox preco='1,50' nomeAdicional='Leite em pó' />
                            <Checkbox preco='1,50' nomeAdicional='Granola' />
                            <Checkbox preco='1,50' nomeAdicional='Jujuba' />
                            <Checkbox preco='1,50' nomeAdicional='M&M' />
                            <Checkbox preco='1,50' nomeAdicional='Sucrilhos' />
                            <Checkbox preco='1,50' nomeAdicional='Kit-kat' />

                        </div>
                        <div className='content'>
                            <Checkbox preco='1,50' nomeAdicional='Farinha lacta' />
                            <Checkbox preco='1,50' nomeAdicional='Ovo Maltine' />
                            <Checkbox preco='1,50' nomeAdicional='Oreo' />
                            <Checkbox preco='1,50' nomeAdicional='Biss' />
                            <Checkbox preco='1,50' nomeAdicional='Granulado' />
                        </div>
                    </div>
                    <div className='content1'>
                        <Checkbox preco='1,50' nomeAdicional='Farinha de amendoim' />
                    </div>
                </div>

                {/* ADC Caldas */}
                <div className='adicionaisCALDAS'>
                    <h4>Caldas</h4>

                    <Checkbox preco='1,00' nomeAdicional='Morango' />
                    <Checkbox preco='1,00' nomeAdicional='Chocolate' />
                    <Checkbox preco='1,00' nomeAdicional='Mel' />
                    <Checkbox preco='1,00' nomeAdicional='Leite condensado' />
                </div>

                <div className='btnConfirma flex-class'>
                    <button onClick={modalAcai02}>Próximo</button>
                </div>
            </div>
        </BoxAcaiContainer >
    )
}

import React, { useState } from 'react';
import { CardapioCategoriasContainer } from './Styled-CardapioCategorias';

import Global from '../../../Global';
import { IoClose } from 'react-icons/io5'
import Categoria from './Categoria/Categoria';


export default function CardapioCategorias(props) {

    const { onADD, countCartItems, productsESPECIAL, productsHOTDOG, productsBATATA, productsHAMBU, productsBEBIDA, productsBEIRUTES } = props;

    const [allContainer, setAllContainer] = useState(true);
    const [hambuContainer, setHambuContainer] = useState(true);
    const [especialContainer, setEspecialContainer] = useState(true);
    const [hotdogContainer, setHotdogContainer] = useState(true);
    const [beiruteContainer, setBeiruteContainer] = useState(true);
    const [batataContainer, setBatataContainer] = useState(true);
    const [bebidaContainer, setBebidaContainer] = useState(true);

    const [abrirModalAdicionais, setabrirModalAdicionais] = useState(false)

    const modalAdicionais = (product) => {

        if (countCartItems === 0) {
            Global.infoAdcionais = [];
            Global.precoAdcionais = 0;
        }


        setabrirModalAdicionais(!abrirModalAdicionais)
        let inputs = document.querySelectorAll('.selectAdcionais input[name="selectADC01"]');
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].checked = false;
        }
        Global.nomeProdutoAdcional = product.name
        Global.produto = product
    }

    const fecharModalAdicionais = () => {
        setabrirModalAdicionais(!abrirModalAdicionais)
    }



    const confimaADC = () => {

        let select = document.querySelectorAll('.selectAdcionais input[name="selectADC01"]');
        let selectPreco = document.querySelectorAll('.preco span');
        let infoAdcionais = [];
        let totalADC = 0;
        let infoADCstring = ''
        let adcionalPRONTO = ''

        for (let i = 0; i < select.length; i++) {
            if (select[i].checked === true) {
                infoAdcionais.push(select[i].value)
                let preco = selectPreco[i].innerHTML
                preco = parseFloat(preco)

                totalADC = totalADC + preco
                infoADCstring = infoAdcionais.join(' - ')
            }
        }

        if (infoADCstring !== '') {
            adcionalPRONTO = document.querySelector('.nomeProduto .nome');
            adcionalPRONTO = adcionalPRONTO.innerHTML
            adcionalPRONTO = '[' + adcionalPRONTO + ': ' + infoADCstring + ']';
            Global.infoAdcionais.push(adcionalPRONTO);
            Global.precoAdcionais = Global.precoAdcionais + totalADC;
        }

        onADD(Global.produto)
        fecharModalAdicionais()
    }





    const ChangeALL = () => {
        setAllContainer(true);
        setEspecialContainer(true);
        setHotdogContainer(true);
        setHambuContainer(true);
        setBatataContainer(true);
        setBebidaContainer(true);
        setBeiruteContainer(true);
    }
    const desativa = () => {
        setAllContainer(!true);
        setEspecialContainer(!true);
        setHotdogContainer(!true);
        setHambuContainer(!true);
        setBatataContainer(!true);
        setBebidaContainer(!true);
        setBeiruteContainer(!true);
    }
    const ChangeHAMBU = () => {
        desativa()
        setTimeout(function () {
            setHambuContainer(true)
        }, 200)
    }
    const ChangeESPECIAL = () => {
        desativa()
        setTimeout(function () {
            setEspecialContainer(true)
        }, 200)
    }
    const ChangeHOTDOG = () => {
        desativa()
        setTimeout(function () {
            setHotdogContainer(true)
        }, 200)
    }
    const ChangeBeirute = () => {
        desativa()
        setTimeout(function () {
            setBeiruteContainer(true)
        }, 200)
    }
    const ChangeBATATA = () => {
        desativa()
        setTimeout(function () {
            setBatataContainer(true)
        }, 200)
    }
    const ChangeBEBIDA = () => {
        desativa()
        setTimeout(function () {
            setBebidaContainer(true)
        }, 200)
    }



    return (
        <CardapioCategoriasContainer className='flex-class'>
            <div className='menuCategorias flex-class'>
                <li onClick={ChangeALL}>
                    <h4 className={allContainer ? 'categoriaON' : ''}>Todos</h4>
                </li>
                <li onClick={ChangeHAMBU}>
                    <h4 className={hambuContainer ? 'categoriaON' : ''}>Hamburguer</h4>
                </li>
                <li onClick={ChangeESPECIAL}>
                    <h4 className={especialContainer ? 'categoriaON' : ''}>Hamburguers Especiais</h4>
                </li>
                <li onClick={ChangeHOTDOG}>
                    <h4 className={hotdogContainer ? 'categoriaON' : ''}>Hotdog</h4>
                </li>
                <li onClick={ChangeBeirute}>
                    <h4 className={beiruteContainer ? 'categoriaON' : ''}>Beirutes</h4>
                </li>
                <li onClick={ChangeBATATA}>
                    <h4 className={batataContainer ? 'categoriaON' : ''}>Batata Frita</h4>
                </li>
                <li onClick={ChangeBEBIDA}>
                    <h4 className={bebidaContainer ? 'categoriaON' : ''}>Bebidas</h4>
                </li>
            </div>

            <>
                <Categoria className={hambuContainer ? 'categoryON' : 'categoryOFF'}
                    nomeCategoria='Hamburguer'
                    modalAdicionais={modalAdicionais}
                    productsMAP={productsHAMBU}
                />

                <Categoria className={especialContainer ? 'categoryON' : 'categoryOFF'}
                    nomeCategoria='Hamburguers Especiais'
                    modalAdicionais={modalAdicionais}
                    productsMAP={productsESPECIAL}
                />

                <Categoria className={hotdogContainer ? 'categoryON' : 'categoryOFF'}
                    nomeCategoria='Hot Dog'
                    modalAdicionais={modalAdicionais}
                    productsMAP={productsHOTDOG}
                />

                <Categoria className={beiruteContainer ? 'categoryON' : 'categoryOFF'}
                    nomeCategoria='Beirutes'
                    modalAdicionais={modalAdicionais}
                    productsMAP={productsBEIRUTES}
                />

                <Categoria className={batataContainer ? 'categoryON' : 'categoryOFF'}
                    nomeCategoria='Batata Frita'
                    modalAdicionais={onADD}
                    productsMAP={productsBATATA}
                />

                <Categoria className={bebidaContainer ? 'categoryON' : 'categoryOFF'}
                    nomeCategoria='Bebidas'
                    modalAdicionais={onADD}
                    productsMAP={productsBEBIDA}
                />

            </>


            <div className={abrirModalAdicionais === false ? 'modalAdicionaisOFF' : 'modalAdicionaisON'}>
                <div className='modalAdicionaisContent flex-class'>

                    {/* Nome do produto */}
                    <div className='nomeProduto flex-class'>
                        <div className='space'></div>
                        <div className='nome'>{Global.nomeProdutoAdcional}</div>
                        <div className='space flex-class' onClick={fecharModalAdicionais}>
                            <IoClose></IoClose>
                        </div>
                    </div>

                    {/* Aviso sobre os adcionais */}
                    <div className='aviso flex-class'>
                        <p>Escolha os adcionais e clique em "Confirmar". Caso não queira nenhum, deixar caixinhas em branco e clicar em "Confirmar".</p>
                        <hr></hr>
                    </div>

                    {/* Select adcionais 01 */}
                    <div className='selectAdcionais flex-class'>

                        <div className='select flex-class'>
                            <div className='input flex-class'>
                                <input type='checkbox' name='selectADC01' value='Frango'></input>
                                <label htmlFor='select01'><p><nobr>Frango</nobr></p></label>
                            </div>
                            <div className='espaco flex-class'>
                                <div></div>
                            </div>
                            <div className='preco flex-class'>
                                <nobr className='flex-class'>
                                    <p>R$ </p><span>3,00</span>
                                </nobr>
                            </div>
                        </div>

                        <div className='select flex-class'>
                            <div className='input flex-class'>
                                <input type='checkbox' name='selectADC01' value='Carne'></input>
                                <label htmlFor='select01'><p><nobr>Carne</nobr></p></label>
                            </div>
                            <div className='espaco flex-class'>
                                <div></div>
                            </div>
                            <div className='preco flex-class'>
                                <nobr className='flex-class'>
                                    <p>R$ </p><span>4,00</span>
                                </nobr>
                            </div>
                        </div>

                        <div className='select flex-class'>
                            <div className='input flex-class'>
                                <input type='checkbox' name='selectADC01' value='Carne de sol'></input>
                                <label htmlFor='select01'><p><nobr>Carne de sol</nobr></p></label>
                            </div>
                            <div className='espaco flex-class'>
                                <div></div>
                            </div>
                            <div className='preco flex-class'>
                                <nobr className='flex-class'>
                                    <p>R$ </p><span>5,00</span>
                                </nobr>
                            </div>
                        </div>

                        <div className='select flex-class'>
                            <div className='input flex-class'>
                                <input type='checkbox' name='selectADC01' value='Picanha'></input>
                                <label htmlFor='select01'><p><nobr>Picanha</nobr></p></label>
                            </div>
                            <div className='espaco flex-class'>
                                <div></div>
                            </div>
                            <div className='preco flex-class'>
                                <nobr className='flex-class'>
                                    <p>R$ </p><span>8,00</span>
                                </nobr>
                            </div>
                        </div>

                        <div className='select flex-class'>
                            <div className='input flex-class'>
                                <input type='checkbox' name='selectADC01' value='Calabresa'></input>
                                <label htmlFor='select01'><p><nobr>Calabresa</nobr></p></label>
                            </div>
                            <div className='espaco flex-class'>
                                <div></div>
                            </div>
                            <div className='preco flex-class'>
                                <nobr className='flex-class'>
                                    <p>R$ </p><span>3,00</span>
                                </nobr>
                            </div>
                        </div>

                        <div className='select flex-class'>
                            <div className='input flex-class'>
                                <input type='checkbox' name='selectADC01' value='Bacon'></input>
                                <label htmlFor='select01'><p><nobr>Bacon</nobr></p></label>
                            </div>
                            <div className='espaco flex-class'>
                                <div></div>
                            </div>
                            <div className='preco flex-class'>
                                <nobr className='flex-class'>
                                    <p>R$ </p><span>3,00</span>
                                </nobr>
                            </div>
                        </div>

                        <div className='select flex-class'>
                            <div className='input flex-class'>
                                <input type='checkbox' name='selectADC01' value='Salsicha'></input>
                                <label htmlFor='select01'><p><nobr>Salsicha</nobr></p></label>
                            </div>
                            <div className='espaco flex-class'>
                                <div></div>
                            </div>
                            <div className='preco flex-class'>
                                <nobr className='flex-class'>
                                    <p>R$ </p><span>2,00</span>
                                </nobr>
                            </div>
                        </div>

                        <div className='select flex-class'>
                            <div className='input flex-class'>
                                <input type='checkbox' name='selectADC01' value='Queijo mussarela'></input>
                                <label htmlFor='select01'><p><nobr>Queijo mussarela</nobr></p></label>
                            </div>
                            <div className='espaco flex-class'>
                                <div></div>
                            </div>
                            <div className='preco flex-class'>
                                <nobr className='flex-class'>
                                    <p>R$ </p><span>2,00</span>
                                </nobr>
                            </div>
                        </div>

                        <div className='select flex-class'>
                            <div className='input flex-class'>
                                <input type='checkbox' name='selectADC01' value='Cream cheese'></input>
                                <label htmlFor='select01'><p><nobr>Cream cheese</nobr></p></label>
                            </div>
                            <div className='espaco flex-class'>
                                <div></div>
                            </div>
                            <div className='preco flex-class'>
                                <nobr className='flex-class'>
                                    <p>R$ </p><span>3,00</span>
                                </nobr>
                            </div>
                        </div>

                        <div className='select flex-class'>
                            <div className='input flex-class'>
                                <input type='checkbox' name='selectADC01' value='Queijo cheddar'></input>
                                <label htmlFor='select01'><p><nobr>Queijo cheddar</nobr></p></label>
                            </div>
                            <div className='espaco flex-class'>
                                <div></div>
                            </div>
                            <div className='preco flex-class'>
                                <nobr className='flex-class'>
                                    <p>R$ </p><span>3,00</span>
                                </nobr>
                            </div>
                        </div>

                        <div className='select flex-class'>
                            <div className='input flex-class'>
                                <input type='checkbox' name='selectADC01' value='Ovo'></input>
                                <label htmlFor='select01'><p><nobr>Ovo</nobr></p></label>
                            </div>
                            <div className='espaco flex-class'>
                                <div></div>
                            </div>
                            <div className='preco flex-class'>
                                <nobr className='flex-class'>
                                    <p>R$ </p><span>2,00</span>
                                </nobr>
                            </div>
                        </div>

                    </div>

                    {/* Confirmar adcionais */}
                    <div className='btnConfirma flex-class'>
                        <button onClick={() => confimaADC(Global.produto)}>Confirmar</button>
                    </div>

                </div>
            </div>


            <div className='espacoBotton'></div>
        </CardapioCategoriasContainer >
    )
}

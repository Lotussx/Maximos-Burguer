import React, { useState } from 'react';
import { CardapioCategoriasContainer } from './Styled-CardapioCategorias';

import Global from '../../../Global';
import { IoClose } from 'react-icons/io5'

export default function CardapioCategorias(props) {

    const { onADD, productsESPECIAL, productsHOTDOG, productsBATATA, productsHAMBU, productsBEBIDA } = props;

    const [allContainer, setAllContainer] = useState(true);
    const [hambuContainer, setHambuContainer] = useState(true);
    const [especialContainer, setEspecialContainer] = useState(true);
    const [hotdogContainer, setHotdogContainer] = useState(true);
    const [batataContainer, setBatataContainer] = useState(true);
    const [bebidaContainer, setBebidaContainer] = useState(true);

    const [abrirModalAdcionais, setAbrirModalAdcionais] = useState(false)

    const modalAdcionais = (product) => {
        setAbrirModalAdcionais(!abrirModalAdcionais)
        onADD(product)
        console.log(product)

        Global.nomeProdutoAdcional = product.name
        console.log(Global.nomeProdutoAdcional)
    }
    const fecharModalAdcionais = () => {
        setAbrirModalAdcionais(!abrirModalAdcionais)
    }


    const ChangeALL = () => {
        setAllContainer(true);
        setEspecialContainer(true);
        setHotdogContainer(true);
        setHambuContainer(true);
        setBatataContainer(true);
        setBebidaContainer(true);
    }
    const desativa = () => {
        setAllContainer(!true);
        setEspecialContainer(!true);
        setHotdogContainer(!true);
        setHambuContainer(!true);
        setBatataContainer(!true);
        setBebidaContainer(!true);
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
    const ChangeHAMBU = () => {
        desativa()
        setTimeout(function () {
            setHambuContainer(true)
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
                <li onClick={ChangeBATATA}>
                    <h4 className={batataContainer ? 'categoriaON' : ''}>Batata Frita</h4>
                </li>
                <li onClick={ChangeBEBIDA}>
                    <h4 className={bebidaContainer ? 'categoriaON' : ''}>Bebidas</h4>
                </li>
            </div>

            <div className={hambuContainer ? 'categoryON' : 'categoryOFF'}>
                <div className='nomeCategoria flex-class'>
                    <h3>Hamburguer</h3>
                </div>
                {productsHAMBU.map((product) => (
                    <div className='produto flex-class'>
                        <div className='produtoIMG' style={{ background: `url(${product.image})` }}>

                        </div>
                        <div className='produtoINFO flex-class'>
                            <div className='nomePreco'>
                                {product.name} | R$ {product.price.toFixed(2)}
                            </div>
                            <div className='produtoDescri'>
                                {product.description}
                            </div>
                            <div className='btnADD flex-class'>
                                <button onClick={() => onADD(product)}>Adicionar ao carrinho</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className={especialContainer ? 'categoryON' : 'categoryOFF'}>
                <div className='nomeCategoria flex-class'>
                    <h3>Hamburguers Especiais</h3>
                </div>
                {productsESPECIAL.map((product) => (

                    <div className='produto flex-class'>
                        <div className='produtoIMG' style={{ background: `url(${product.image})` }}>

                        </div>
                        <div className='produtoINFO flex-class'>
                            <div className='nomePreco'>
                                {product.name} | R$ {product.price.toFixed(2)}
                            </div>
                            <div className='produtoDescri'>
                                {product.description}
                            </div>
                            <div className='btnADD flex-class'>
                                <button onClick={() => modalAdcionais(product)}>Adcionar ao carrinho</button>
                                {/* <button onClick={() => onADD(product)}>Adicionar ao carrinho</button> */}
                            </div>
                        </div>
                    </div>

                ))}
            </div>


            <div className={hotdogContainer ? 'categoryON' : 'categoryOFF'}>
                <div className='nomeCategoria flex-class'>
                    <h3>Hot Dog</h3>
                </div>
                {productsHOTDOG.map((product) => (
                    <div className='produto flex-class'>
                        <div className='produtoIMG' style={{ background: `url(${product.image})` }}>

                        </div>
                        <div className='produtoINFO flex-class'>
                            <div className='nomePreco'>
                                {product.name} | R$ {product.price.toFixed(2)}
                            </div>
                            <div className='produtoDescri'>
                                {product.description}
                            </div>
                            <div className='btnADD flex-class'>
                                <button onClick={() => onADD(product)}>Adicionar ao carrinho</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className={batataContainer ? 'categoryON' : 'categoryOFF'}>
                <div className='nomeCategoria flex-class'>
                    <h3>Batata</h3>
                </div>
                {productsBATATA.map((product) => (
                    <div className='produto flex-class'>
                        <div className='produtoIMG' style={{ background: `url(${product.image})` }}>

                        </div>
                        <div className='produtoINFO flex-class'>
                            <div className='nomePreco'>
                                {product.name} | R$ {product.price.toFixed(2)}
                            </div>
                            <div className='produtoDescri'>
                                {product.description}
                            </div>
                            <div className='btnADD flex-class'>
                                <button onClick={() => onADD(product)}>Adicionar ao carrinho</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className={bebidaContainer ? 'categoryON' : 'categoryOFF'}>
                <div className='nomeCategoria flex-class'>
                    <h3>Bebida</h3>
                </div>
                {productsBEBIDA.map((product) => (
                    <div className='produto flex-class'>
                        <div className='produtoIMG' style={{ background: `url(${product.image})` }}>

                        </div>
                        <div className='produtoINFO flex-class'>
                            <div className='nomePreco'>
                                {product.name} | R$ {product.price}
                            </div>
                            <div className='produtoDescri'>
                                {product.description}
                            </div>
                            <div className='btnADD flex-class'>
                                <button onClick={() => onADD(product)}>Adicionar ao carrinho</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className={abrirModalAdcionais === false ? 'modalAdcionaisOFF' : 'modalAdcionaisON'}>
                <div className='modalAdcionaisContent flex-class'>

                    <div className='nomeProduto flex-class'>
                        <div className='space'></div>
                        <div className='nome'>{Global.nomeProdutoAdcional}</div>
                        <div className='space flex-class' onClick={fecharModalAdcionais}>
                            <IoClose></IoClose>
                        </div>
                    </div>

                    <div className='aviso flex-class'>
                        <p>Escolha os adcionais e clique em "Confirmar". Caso não queira nenhum, deixar caixinhas em branco e clicar em "Confirmar".</p>
                        <hr></hr>
                    </div>

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
                </div>
            </div>


            <div className='espacoBotton'></div>
        </CardapioCategoriasContainer >
    )
}

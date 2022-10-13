import React, { useState } from 'react';
import { CardapioCategoriasContainer } from './Styled-CardapioCategorias';



export default function CardapioCategorias(props) {

    const { onADD, productsCOMBO, productsPROMO, productsBATATA, productsHAMBU, productsBEBIDA } = props;

    const [allContainer, setAllContainer] = useState(true);
    const [comboContainer, setComboContainer] = useState(true);
    const [promoContainer, setPromoContainer] = useState(true);
    const [hambuContainer, setHambuContainer] = useState(true);
    const [batataContainer, setBatataContainer] = useState(true);
    const [bebidaContainer, setBebidaContainer] = useState(true);


    const ChangeALL = () => {
        setAllContainer(true);
        setComboContainer(true);
        setPromoContainer(true);
        setHambuContainer(true);
        setBatataContainer(true);
        setBebidaContainer(true);
    }
    const desativa = () => {
        setAllContainer(!true);
        setComboContainer(!true);
        setPromoContainer(!true);
        setHambuContainer(!true);
        setBatataContainer(!true);
        setBebidaContainer(!true);
    }
    const ChangeCOMBO = () => {
        desativa()
        setTimeout(function () {
            setComboContainer(true)
        }, 200)
    }
    const ChangePROMO = () => {
        desativa()
        setTimeout(function () {
            setPromoContainer(true)
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
                <li onClick={ChangeCOMBO}>
                    <h4 className={comboContainer ? 'categoriaON' : ''}>Combos</h4>
                </li>
                <li onClick={ChangePROMO}>
                    <h4 className={promoContainer ? 'categoriaON' : ''}>Promoções</h4>
                </li>
                <li onClick={ChangeHAMBU}>
                    <h4 className={hambuContainer ? 'categoriaON' : ''}>Hamburguer</h4>
                </li>
                <li onClick={ChangeBATATA}>
                    <h4 className={batataContainer ? 'categoriaON' : ''}>Batata Frita</h4>
                </li>
                <li onClick={ChangeBEBIDA}>
                    <h4 className={bebidaContainer ? 'categoriaON' : ''}>Bebidas</h4>
                </li>
            </div>


            <div className={comboContainer ? 'categoryON' : 'categoryOFF'}>
                <div className='nomeCategoria flex-class'>
                    <h3>Combos</h3>
                </div>
                {productsCOMBO.map((product) => (
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

            <div className={promoContainer ? 'categoryON' : 'categoryOFF'}>
                <div className='nomeCategoria flex-class'>
                    <h3>Promoções</h3>
                </div>
                {productsPROMO.map((product) => (
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


            <div className='espacoBotton'></div>
        </CardapioCategoriasContainer >
    )
}

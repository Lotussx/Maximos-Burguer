import React, { useState } from 'react';
import { CardapioCategoriasContainer } from './Styled-CardapioCategorias';

import Global from '../../../Global';
import Categoria from './Categoria/Categoria';
import Adicionais from './Adicionais/Adicionais';
import MenuCategorias from './MenuCategorias/MenuCategorias';
import BoxAcai from './BoxAcai/BoxAcai';


export default function CardapioCategorias({ onADD, countCartItems, productsESPECIAL, productsHOTDOG, productsBATATA, productsHAMBU, productsBEIRUTE, productsACAI }) {


    const [abrirModalAcai, setAbrirModalAcai] = useState(false)
    const [abrirModalAdicionais, setabrirModalAdicionais] = useState(false)
    const [modalAdicionaisAcai, setmodalAdicionaisAcai] = useState(false)

    const [allContainer, setAllContainer] = useState(true);
    const [hambuContainer, setHambuContainer] = useState(true);
    const [especialContainer, setEspecialContainer] = useState(true);
    const [hotdogContainer, setHotdogContainer] = useState(true);
    const [beiruteContainer, setBeiruteContainer] = useState(true);
    const [batataContainer, setBatataContainer] = useState(true);
    const [acaiContainer, setAcaiContainer] = useState(true);
    const [bebidaContainer, setBebidaContainer] = useState(true);


    const ChangeALL = () => {
        setAllContainer(true);
        setEspecialContainer(true);
        setHotdogContainer(true);
        setHambuContainer(true);
        setBatataContainer(true);
        setBebidaContainer(true);
        setBeiruteContainer(true);
        setAcaiContainer(true)
    }
    const desativa = () => {
        setAllContainer(!true);
        setEspecialContainer(!true);
        setHotdogContainer(!true);
        setHambuContainer(!true);
        setBatataContainer(!true);
        setBebidaContainer(!true);
        setBeiruteContainer(!true);
        setAcaiContainer(!true)
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
    const ChangeACAI = () => {
        desativa()
        setTimeout(function () {
            setAcaiContainer(true)
        }, 200)
    }
    const ChangeBEBIDA = () => {
        desativa()
        setTimeout(function () {
            setBebidaContainer(true)
        }, 200)
    }



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


    const confirmaADC = () => {

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



    const modalAcai = (product) => {
        Global.descriAcai = product.description
        Global.acai = product.name

        if (countCartItems === 0) {
            Global.infoAdcionais = [];
            Global.precoAdcionais = 0;
        }

        // Desmarcar todos os inputs ao abrir
        let inputs = document.querySelectorAll('.selectAdcionais input');
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].checked = false;
        }

        // Habilitar todos os inputs
        let inputsCheck = document.querySelectorAll('.selectAdcionais input')
        for (let i = 0; i < inputsCheck.length; i++) {
            inputsCheck[i].disabled = false
        }

        Global.produto = product
        setAbrirModalAcai(!abrirModalAcai)
    }


    const fecharModalAcai = () => {
        setAbrirModalAcai(false)
        setmodalAdicionaisAcai(false)
    }

    const verificaACAI = () => {
        let inputsDISABLED = document.querySelectorAll('.selectAdcionais .frutas input:disabled')
        let checkbox01 = document.querySelectorAll('.selectAdcionais .frutas input')
        let frutasCHECKED = document.querySelectorAll('.selectAdcionais .frutas input:checked')

        let inputsDISABLED02 = document.querySelectorAll('.selectAdcionais .acompanhamentos input:disabled')
        let checkbox02 = document.querySelectorAll('.selectAdcionais .acompanhamentos input')
        let acompCHECKED = document.querySelectorAll('.selectAdcionais .acompanhamentos input:checked')

        let inputsDISABLED03 = document.querySelectorAll('.selectAdcionais .caldas input:disabled')
        let checkbox03 = document.querySelectorAll('.selectAdcionais .caldas input')
        let caldasCHECKED = document.querySelectorAll('.selectAdcionais .caldas    input:checked')


        if (Global.acai === 'AÇAÍ 200ML') {

            if (frutasCHECKED.length === 1) {
                for (let i = 0; i < checkbox01.length; i++) {
                    if (checkbox01[i].checked !== true) {
                        checkbox01[i].disabled = true
                    }
                }
            } else if (frutasCHECKED.length === 0) {
                for (let i = 0; i < inputsDISABLED.length; i++) {
                    inputsDISABLED[i].disabled = false
                }
            }


            if (acompCHECKED.length === 3) {
                for (let i = 0; i < checkbox02.length; i++) {
                    if (checkbox02[i].checked !== true) {
                        checkbox02[i].disabled = true
                    }
                }
            } else if (acompCHECKED.length === 2) {
                for (let i = 0; i < inputsDISABLED02.length; i++) {
                    inputsDISABLED02[i].disabled = false
                }
            }


            if (caldasCHECKED.length === 1) {
                for (let i = 0; i < checkbox03.length; i++) {
                    if (checkbox03[i].checked !== true) {
                        checkbox03[i].disabled = true
                    }
                }
            } else if (caldasCHECKED.length === 0) {
                for (let i = 0; i < inputsDISABLED03.length; i++) {
                    inputsDISABLED03[i].disabled = false
                }
            }

        }

        if (Global.acai === 'AÇAÍ 300ML') {

            if (frutasCHECKED.length === 2) {
                for (let i = 0; i < checkbox01.length; i++) {
                    if (checkbox01[i].checked !== true) {
                        checkbox01[i].disabled = true
                    }
                }
            } else if (frutasCHECKED.length === 1) {
                for (let i = 0; i < inputsDISABLED.length; i++) {
                    inputsDISABLED[i].disabled = false
                }
            }


            if (acompCHECKED.length === 4) {
                for (let i = 0; i < checkbox02.length; i++) {
                    if (checkbox02[i].checked !== true) {
                        checkbox02[i].disabled = true
                    }
                }
            } else if (acompCHECKED.length === 3) {
                for (let i = 0; i < inputsDISABLED02.length; i++) {
                    inputsDISABLED02[i].disabled = false
                }
            }


            if (caldasCHECKED.length === 2) {
                for (let i = 0; i < checkbox03.length; i++) {
                    if (checkbox03[i].checked !== true) {
                        checkbox03[i].disabled = true
                    }
                }
            } else if (caldasCHECKED.length === 1) {
                for (let i = 0; i < inputsDISABLED03.length; i++) {
                    inputsDISABLED03[i].disabled = false
                }
            }

        }

        if (Global.acai === 'AÇAÍ 300ML' || Global.acai === 'AÇAÍ 400ML') {

            if (frutasCHECKED.length === 2) {
                for (let i = 0; i < checkbox01.length; i++) {
                    if (checkbox01[i].checked !== true) {
                        checkbox01[i].disabled = true
                    }
                }
            } else if (frutasCHECKED.length === 1) {
                for (let i = 0; i < inputsDISABLED.length; i++) {
                    inputsDISABLED[i].disabled = false
                }
            }


            if (acompCHECKED.length === 4) {
                for (let i = 0; i < checkbox02.length; i++) {
                    if (checkbox02[i].checked !== true) {
                        checkbox02[i].disabled = true
                    }
                }
            } else if (acompCHECKED.length === 3) {
                for (let i = 0; i < inputsDISABLED02.length; i++) {
                    inputsDISABLED02[i].disabled = false
                }
            }


            if (caldasCHECKED.length === 2) {
                for (let i = 0; i < checkbox03.length; i++) {
                    if (checkbox03[i].checked !== true) {
                        checkbox03[i].disabled = true
                    }
                }
            } else if (caldasCHECKED.length === 1) {
                for (let i = 0; i < inputsDISABLED03.length; i++) {
                    inputsDISABLED03[i].disabled = false
                }
            }

        }

        if (Global.acai === 'AÇAÍ 500ML') {

            if (frutasCHECKED.length === 2) {
                for (let i = 0; i < checkbox01.length; i++) {
                    if (checkbox01[i].checked !== true) {
                        checkbox01[i].disabled = true
                    }
                }
            } else if (frutasCHECKED.length === 1) {
                for (let i = 0; i < inputsDISABLED.length; i++) {
                    inputsDISABLED[i].disabled = false
                }
            }


            if (acompCHECKED.length === 5) {
                for (let i = 0; i < checkbox02.length; i++) {
                    if (checkbox02[i].checked !== true) {
                        checkbox02[i].disabled = true
                    }
                }
            } else if (acompCHECKED.length === 4) {
                for (let i = 0; i < inputsDISABLED02.length; i++) {
                    inputsDISABLED02[i].disabled = false
                }
            }


            if (caldasCHECKED.length === 2) {
                for (let i = 0; i < checkbox03.length; i++) {
                    if (checkbox03[i].checked !== true) {
                        checkbox03[i].disabled = true
                    }
                }
            } else if (caldasCHECKED.length === 1) {
                for (let i = 0; i < inputsDISABLED03.length; i++) {
                    inputsDISABLED03[i].disabled = false
                }
            }

        }



    }



    const modalAcai02 = () => {

        let inputs = document.querySelectorAll('.selectAdcionais input:checked');
        let inputsFRUTAS = document.querySelectorAll('.selectAdcionais .frutas input:checked');
        let inputsACOMPANHAMENTOS = document.querySelectorAll('.selectAdcionais .acompanhamentos input:checked');
        let inputsCALDAS = document.querySelectorAll('.selectAdcionais .caldas input:checked');

        let frutas = 'FRUTAS: '
        let acompanhamentos = 'ACOMPANHAMENTOS: '
        let caldas = 'CALDA: '
        let arrFrutas = []
        let arrAcompanhamentos = []
        let arrCaldas = []


        for (let i = 0; i < inputs.length; i++) {
            if (inputsFRUTAS[i] !== undefined) {
                arrFrutas.push(inputsFRUTAS[i].value);
            }
            if (inputsACOMPANHAMENTOS[i] !== undefined) {
                arrAcompanhamentos.push(inputsACOMPANHAMENTOS[i].value);
            }
            if (inputsCALDAS[i] !== undefined) {
                arrCaldas.push(inputsCALDAS[i].value);
            }
        }

        frutas = frutas + arrFrutas.join(' - ')
        acompanhamentos = acompanhamentos + arrAcompanhamentos.join(' - ')
        caldas = caldas + arrCaldas.join(' - ')

        console.log(frutas)
        console.log(acompanhamentos)
        console.log(caldas)

        let acai = Global.acai + ' - ' + frutas + ' | ' + acompanhamentos + ' | ' + caldas
        Global.acaitext = acai
        console.log(acai)

        setmodalAdicionaisAcai(!modalAdicionaisAcai)
    }

    const confirmaACAI = () => {
        let precos = document.querySelectorAll('')
        let inputs = document.querySelectorAll('.opcAdionaisAcai h4')

        console.log(inputs)
    }













    return (
        <CardapioCategoriasContainer className='flex-class'>

            {/* Menu de categorias */}
            <>
                <MenuCategorias
                    ChangeALL={ChangeALL} allContainer={allContainer}
                    ChangeHAMBU={ChangeHAMBU} hambuContainer={hambuContainer}
                    ChangeESPECIAL={ChangeESPECIAL} especialContainer={especialContainer}
                    ChangeHOTDOG={ChangeHOTDOG} hotdogContainer={hotdogContainer}
                    ChangeBeirute={ChangeBeirute} beiruteContainer={beiruteContainer}
                    ChangeBATATA={ChangeBATATA} batataContainer={batataContainer}
                    ChangeACAI={ChangeACAI} acaiContainer={acaiContainer}

                    ChangeBEBIDA={ChangeBEBIDA} bebidaContainer={bebidaContainer}
                />
            </>

            {/* Categorias */}
            <>
                <Categoria className={hambuContainer ? 'categoryON' : 'categoryOFF'}
                    nomeCategoria='Hamburguer'
                    modalAdicionais={modalAdicionais}
                    products={productsHAMBU}
                    btnText='Adicionar ao carrinho'
                />

                <Categoria className={especialContainer ? 'categoryON' : 'categoryOFF'}
                    nomeCategoria='Hamburguers Especiais'
                    modalAdicionais={modalAdicionais}
                    products={productsESPECIAL}
                    btnText='Adicionar ao carrinho'
                />

                <Categoria className={hotdogContainer ? 'categoryON' : 'categoryOFF'}
                    nomeCategoria='Hot Dog'
                    modalAdicionais={modalAdicionais}
                    products={productsHOTDOG}
                    btnText='Adicionar ao carrinho'
                />

                <Categoria className={beiruteContainer ? 'categoryON' : 'categoryOFF'}
                    nomeCategoria='Beirutes'
                    modalAdicionais={modalAdicionais}
                    products={productsBEIRUTE}
                    btnText='Adicionar ao carrinho'
                />

                <Categoria className={batataContainer ? 'categoryON' : 'categoryOFF'}
                    nomeCategoria='Batata Frita'
                    modalAdicionais={onADD}
                    products={productsBATATA}
                    btnText='Adicionar ao carrinho'
                />

                <Categoria className={acaiContainer ? 'categoryON' : 'categoryOFF'}
                    nomeCategoria='Açaí'
                    modalAdicionais={modalAcai}
                    products={productsACAI}
                    btnText='Monte seu açaí'
                />

            </>

            {/* Box Adicionais */}
            <>
                <Adicionais
                    className={abrirModalAdicionais === false ? 'modalAdicionaisOFF' : 'modalAdicionaisON'}
                    nomeProduto={Global.nomeProdutoAdcional}
                    fecharModalAdicionais={fecharModalAdicionais}
                    confirmaAdicional={() => confirmaADC(Global.produto)}
                />
            </>

            {/* Box Açaí */}
            <>
                <BoxAcai
                    className={abrirModalAcai === false ? 'modalAdicionaisOFF' : 'modalAdicionaisON'}
                    className2={modalAdicionaisAcai === false ? '' : 'marginModal'}
                    className3={modalAdicionaisAcai === false ? '' : 'opcAdionaisAcai'}
                    nomeProduto={Global.nomeProdutoAdcional}
                    fecharModalAdicionais={fecharModalAcai}
                    confirmaAdicional={() => confirmaADC(Global.produto)}
                    verificaACAI={verificaACAI}
                    modalAcai02={modalAcai02}
                    confirmaACAI={confirmaACAI}
                />
            </>

            <div className='espacoBotton'></div>
        </CardapioCategoriasContainer >
    )
}


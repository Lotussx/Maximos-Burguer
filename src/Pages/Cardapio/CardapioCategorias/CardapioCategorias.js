import React, { useState } from 'react';
import { CardapioCategoriasContainer } from './Styled-CardapioCategorias';

import Global from '../../../Global';
import Categoria from './Categoria/Categoria';
import Adicionais from './Adicionais/Adicionais';
import MenuCategorias from './MenuCategorias/MenuCategorias';
import BoxAcai from './BoxAcai/BoxAcai';
import BoxMilkShake from './BoxMilkShake/BoxMilkShake';


export default function CardapioCategorias({ onADD, countCartItems, productsESPECIAL, productsHOTDOG, productsBATATA, productsHAMBU, productsBEIRUTE, productsACAI, productsMILKSHAKE }) {


    const [abrirModalAcai, setAbrirModalAcai] = useState(false)
    const [abrirModalAdicionais, setabrirModalAdicionais] = useState(false)
    const [abrirModalMilkShake, setAbrirModalMilkShake] = useState(false)
    const [modalAdicionaisAcai, setmodalAdicionaisAcai] = useState(false)

    const [allContainer, setAllContainer] = useState(true);
    const [hambuContainer, setHambuContainer] = useState(undefined);
    const [especialContainer, setEspecialContainer] = useState(undefined);
    const [hotdogContainer, setHotdogContainer] = useState(undefined);
    const [beiruteContainer, setBeiruteContainer] = useState(undefined);
    const [batataContainer, setBatataContainer] = useState(undefined);
    const [acaiContainer, setAcaiContainer] = useState(undefined);
    const [milkShakeContainer, setMilkShakeContainer] = useState(undefined);
    const [bebidaContainer, setBebidaContainer] = useState(undefined);


    const ChangeALL = () => {
        setAllContainer(false);
        setEspecialContainer(false);
        setHotdogContainer(false);
        setHambuContainer(false);
        setBatataContainer(false);
        setBebidaContainer(false);
        setBeiruteContainer(false);
        setAcaiContainer(false);
        setMilkShakeContainer(false);
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
        setMilkShakeContainer(!true);
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
    const ChangeMILKSHAKE = () => {
        desativa()
        setTimeout(function () {
            setMilkShakeContainer(true)
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
            Global.milkSHAKEpronto = []
            Global.acaiPRONTO = []
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
            Global.milkSHAKEpronto = []
            Global.acaiPRONTO = []
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

        if (countCartItems === 0) {
            Global.infoAdcionais = [];
            Global.precoAdcionais = 0;
            Global.milkSHAKEpronto = []
            Global.acaiPRONTO = []
        }


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


        let acai = Global.acai + ' - ' + frutas + ' | ' + acompanhamentos + ' | ' + caldas
        Global.acaitext = acai
        console.log(acai)

        setmodalAdicionaisAcai(!modalAdicionaisAcai)

        // Desmarcar todos os inputs ao abrir
        let inputsx = document.querySelectorAll('.adicionaisAcai input');
        for (let i = 0; i < inputsx.length; i++) {
            inputsx[i].checked = false;
        }
    }

    const confirmaACAI = () => {
        let input = document.querySelectorAll('.adicionaisAcai input')
        let preco = document.querySelectorAll('.adicionaisAcai span')

        Global.adcACAI = []

        for (let i = 0; i < input.length; i++) {
            if (input[i].checked === true) {
                Global.adcACAI.push(input[i].value)
                Global.precoAdcionais = Global.precoAdcionais + parseFloat(preco[i].innerHTML)
            }
        }

        let txtADC = Global.adcACAI.join(' - ')

        let adcACAI = 'ADICIONAIS: ' + txtADC

        Global.acaitext = Global.acaitext + ' | ' + adcACAI


        Global.acaiPRONTO.push(Global.acaitext)
        console.log(Global.acaiPRONTO)

        onADD(Global.produto)
        setAbrirModalAcai(false)
        setmodalAdicionaisAcai(false)
    }

    const modalMilkSHAKE = (product) => {
        Global.descriMilkShake = product.description
        Global.milkShake = product.name

        if (countCartItems === 0) {
            Global.infoAdcionais = [];
            Global.precoAdcionais = 0;
            Global.milkSHAKEpronto = []
            Global.acaiPRONTO = []
        }

        // Desmarcar todos os inputs ao abrir
        let inputs = document.querySelectorAll('.selectMILKSHAKE input');
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].checked = false;
        }

        // Habilitar todos os inputs
        let inputsCheck = document.querySelectorAll('.selectMILKSHAKE input')
        for (let i = 0; i < inputsCheck.length; i++) {
            inputsCheck[i].disabled = false
        }

        Global.produto = product

        setAbrirModalMilkShake(!abrirModalMilkShake)
    }

    const fecharModalMilkShake = () => {
        setAbrirModalMilkShake(false)
    }

    const verificaMILKSHAKE = () => {
        let inputsDISABLED = document.querySelectorAll('.selectMILKSHAKE .sabor input:disabled')
        let checkbox01 = document.querySelectorAll('.selectMILKSHAKE .sabor input')
        let saborCHECKED = document.querySelectorAll('.selectMILKSHAKE .sabor input:checked')

        let inputsDISABLED02 = document.querySelectorAll('.selectMILKSHAKE .caldas input:disabled')
        let checkbox02 = document.querySelectorAll('.selectMILKSHAKE .caldas input')
        let caldaCHECKED = document.querySelectorAll('.selectMILKSHAKE .caldas input:checked')

        if (countCartItems === 0) {
            Global.milkSHAKEpronto = [];
        }

        if (Global.milkShake === 'MILKSHAKE 300ML' || 'MILKSHAKE 400ML') {

            if (saborCHECKED.length === 1) {
                for (let i = 0; i < checkbox01.length; i++) {
                    if (checkbox01[i].checked !== true) {
                        checkbox01[i].disabled = true
                    }
                }
            } else if (saborCHECKED.length === 0) {
                for (let i = 0; i < inputsDISABLED.length; i++) {
                    inputsDISABLED[i].disabled = false
                }
            }


            if (caldaCHECKED.length === 1) {
                for (let i = 0; i < checkbox02.length; i++) {
                    if (checkbox02[i].checked !== true) {
                        checkbox02[i].disabled = true
                    }
                }
            } else if (caldaCHECKED.length === 0) {
                for (let i = 0; i < inputsDISABLED02.length; i++) {
                    inputsDISABLED02[i].disabled = false
                }
            }
        }
    }

    const confirmaMILKSHAKE = () => {


        let sabor = 'SABOR: ';
        let saborx = []
        let saborCHECKED = document.querySelectorAll('.selectMILKSHAKE .sabor input:checked')
        for (let i = 0; i < saborCHECKED.length; i++) {
            saborx.push(saborCHECKED[i].value)
        }

        let calda = 'CALDA: ';
        let caldax = []
        let caldaCHECKED = document.querySelectorAll('.selectMILKSHAKE .caldas input:checked')
        for (let i = 0; i < caldaCHECKED.length; i++) {
            caldax.push(caldaCHECKED[i].value)
        }

        sabor = sabor + saborx.join(' - ')
        console.log(sabor)

        calda = calda + caldax.join(' - ')
        console.log(calda)

        let adc = 'ADICIONAIS: ';
        let adcx = []
        let adcINPUTS = document.querySelectorAll('.selectMILKSHAKE .adicionais input')
        let precoADC = document.querySelectorAll('.selectMILKSHAKE .adicionais span')
        let valorPreco = 0

        for (let i = 0; i < adcINPUTS.length; i++) {
            if (adcINPUTS[i].checked === true) {
                adcx.push(adcINPUTS[i].value)
                valorPreco = valorPreco + parseFloat(precoADC[i].innerHTML)
            }
        }

        adc = adc + adcx.join(' - ')
        let MilkshakePronto = Global.produto.name + ': ' + sabor + ' | ' + calda + ' | ' + adc;
        Global.milkSHAKEpronto.push(MilkshakePronto)

        Global.precoAdcionais = Global.precoAdcionais + valorPreco

        setAbrirModalMilkShake(false)

        onADD(Global.produto)
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
                    ChangeMILKSHAKE={ChangeMILKSHAKE} milkShakeContainer={milkShakeContainer}

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

                <Categoria className={milkShakeContainer ? 'categoryON' : 'categoryOFF'}
                    nomeCategoria='MilkShake'
                    modalAdicionais={modalMilkSHAKE}
                    products={productsMILKSHAKE}
                    btnText='Monte seu MilkShake'
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

            <>
                <BoxMilkShake
                    className={abrirModalMilkShake === false ? 'modalAdicionaisOFF' : 'modalAdicionaisON'}
                    fecharModalMilkShake={fecharModalMilkShake}
                    verificaMILKSHAKE={verificaMILKSHAKE}
                    confirmaMILKSHAKE={confirmaMILKSHAKE}


                />
            </>

            <div className='espacoBotton'></div>
        </CardapioCategoriasContainer >
    )
}


import React, { useState } from 'react';
import { CardapioCategoriasContainer } from './Styled-CardapioCategorias';

export default function CardapioCategorias() {

    const [ComboContainer, setComboContainer] = useState(true)
    const [PromoContainer, setPromoContainer] = useState(true)
    const [HambuContainer, setHambuContainer] = useState(true)
    const [BatataContainer, setBatataContainer] = useState(true)
    const [BebidaContainer, setBebidaContainer] = useState(true)


    const handleChangeALL = () => {
        setComboContainer(true);
        setPromoContainer(true);
        setHambuContainer(true);
        setBatataContainer(true);
        setBebidaContainer(true);
    }


    const handleChangeCOMBO = () => {
        setComboContainer(false)
        setPromoContainer(false)
        setHambuContainer(false)
        setBatataContainer(false)
        setBebidaContainer(false)

        function Teste() {
            setComboContainer(true)
        }

        setInterval(Teste, 2000);


    }

    const handleChangePROMO = () => {
        setPromoContainer(true)
        setComboContainer(false)
        setHambuContainer(false)
        setBatataContainer(false)
        setBebidaContainer(false)
    }

    const handleChangeHAMBURGUER = () => {
        setHambuContainer(true)
        setComboContainer(false)
        setPromoContainer(false)
        setBatataContainer(false)
        setBebidaContainer(false)
    }

    const handleChangeBATATA = () => {
        setBatataContainer(true)
        setComboContainer(false)
        setPromoContainer(false)
        setHambuContainer(false)
        setBebidaContainer(false)
    }

    const handleChangeBEBIDA = () => {
        setComboContainer(false)
        setPromoContainer(false)
        setHambuContainer(false)
        setBatataContainer(false)
        setBebidaContainer(true)
    }

    return (
        <CardapioCategoriasContainer className='flex-class'>
            <div className='menuCategorias flex-class'>
                <li onClick={handleChangeALL}><h4>Todos</h4></li>
                <li onClick={handleChangeCOMBO}><h4>Combos</h4></li>
                <li onClick={handleChangePROMO}><h4>Promoções</h4></li>
                <li onClick={handleChangeHAMBURGUER}><h4>Hamburguer</h4></li>
                <li onClick={handleChangeBATATA}><h4>Batata Frita</h4></li>
                <li onClick={handleChangeBEBIDA}><h4>Bebidas</h4></li>
            </div>


            <div className={ComboContainer ? 'ComboContainerON' : 'ComboContainerOFF'}>
                <p>COMBO</p>
            </div>

            <div className={PromoContainer ? 'PromoContainerON' : 'PromoContainerOFF'}>
                <p>PROMOÇÃO</p>
            </div>

            <div className={HambuContainer ? 'HambuContainerON' : 'HambuContainerOFF'}>
                <p>HAMBURGUER</p>
            </div>

            <div className={BatataContainer ? 'BatataContainerON' : 'BatataContainerOFF'}>
                <p>BATATA</p>
            </div>

            <div className={BebidaContainer ? 'BebidaContainerON' : 'BebidaContainerOFF'}>
                <p>BEBIDA</p>
            </div>


            <div className='espacoBotton'></div>
        </CardapioCategoriasContainer>
    )
}

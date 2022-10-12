import React, { useState } from 'react';
import { CardapioCategoriasContainer } from './Styled-CardapioCategorias';

export default function CardapioCategorias() {

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


            <div className={comboContainer ? 'ComboContainerON' : 'ComboContainerOFF'}>
                <p>COMBO</p>
            </div>

            <div className={promoContainer ? 'PromoContainerON' : 'PromoContainerOFF'}>
                <p>PROMOÇÃO</p>
            </div>

            <div className={hambuContainer ? 'HambuContainerON' : 'HambuContainerOFF'}>
                <p>HAMBURGUER</p>
            </div>

            <div className={batataContainer ? 'BatataContainerON' : 'BatataContainerOFF'}>
                <p>BATATA</p>
            </div>

            <div className={bebidaContainer ? 'BebidaContainerON' : 'BebidaContainerOFF'}>
                <p>BEBIDA</p>
            </div>


            <div className='espacoBotton'></div>
        </CardapioCategoriasContainer>
    )
}

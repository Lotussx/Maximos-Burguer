import React from 'react'
import { MenuCategoriasConteiner } from './Styled-MenuCategorias'

export default function MenuCategorias({ promo, ChangePROMO, promoContainer, ChangeALL, allContainer, ChangeBATATA, batataContainer, ChangeBEBIDA, bebidaContainer, acaiContainer, ChangeACAI, ChangeBeirute, beiruteContainer, ChangeHAMBU, hambuContainer, ChangeHOTDOG, hotdogContainer, ChangeESPECIAL, especialContainer, ChangeMILKSHAKE, milkShakeContainer }) {



    return (
        <MenuCategoriasConteiner className='flex-class' >
            <li onClick={ChangeALL} className={`categoria ${allContainer ? 'categoriaON' : ''}`}>
                <h4>Todos</h4>
            </li>
            {promo === true && (
                <li onClick={ChangePROMO} className={`categoria ${promoContainer ? 'categoriaON' : ''}`}>
                    <h4>Promoção de Inauguração</h4>
                </li>
            )}
            <li onClick={ChangeHAMBU} className={`categoria ${hambuContainer ? 'categoriaON' : ''}`}>
                <h4>Hamburguer</h4>
            </li>
            <li onClick={ChangeESPECIAL} className={`categoria ${especialContainer ? 'categoriaON' : ''}`}>
                <h4>Hamburguers Especiais</h4>
            </li>
            <li onClick={ChangeHOTDOG} className={`categoria ${hotdogContainer ? 'categoriaON' : ''}`}>
                <h4>Hotdog</h4>
            </li>
            <li onClick={ChangeBeirute} className={`categoria ${beiruteContainer ? 'categoriaON' : ''}`}>
                <h4>Beirutes</h4>
            </li>
            <li onClick={ChangeBATATA} className={`categoria ${batataContainer ? 'categoriaON' : ''}`}>
                <h4>Batata frita</h4>
            </li>
            <li onClick={ChangeACAI} className={`categoria ${acaiContainer ? 'categoriaON' : ''}`}>
                <h4>Açaí</h4>
            </li>
            <li onClick={ChangeMILKSHAKE} className={`categoria ${milkShakeContainer ? 'categoriaON' : ''}`}>
                <h4>Milkshake</h4>
            </li>
            <li onClick={ChangeBEBIDA} className={`categoria ${bebidaContainer ? 'categoriaON' : ''}`}>
                <h4>Bebidas</h4>
            </li>
        </MenuCategoriasConteiner>
    )
}

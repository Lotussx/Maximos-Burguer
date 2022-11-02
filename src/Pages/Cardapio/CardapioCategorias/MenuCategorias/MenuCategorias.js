import React from 'react'
import { MenuCategoriasConteiner } from './Styled-MenuCategorias'

export default function MenuCategorias({ ChangeALL, allContainer, ChangeBATATA, batataContainer, ChangeBEBIDA, bebidaContainer, acaiContainer, ChangeACAI, ChangeBeirute, beiruteContainer, ChangeHAMBU, hambuContainer, ChangeHOTDOG, hotdogContainer, ChangeESPECIAL, especialContainer, ChangeMILKSHAKE, milkShakeContainer }) {


    return (
        <MenuCategoriasConteiner className='flex-class'>
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
            <li onClick={ChangeACAI}>
                <h4 className={acaiContainer ? 'categoriaON' : ''}>Açaí</h4>
            </li>
            <li onClick={ChangeMILKSHAKE}>
                <h4 className={milkShakeContainer ? 'categoriaON' : ''}>Milk Shake</h4>
            </li>
            <li onClick={ChangeBEBIDA}>
                <h4 className={bebidaContainer ? 'categoriaON' : ''}>Bebidas</h4>
            </li>
        </MenuCategoriasConteiner>
    )
}

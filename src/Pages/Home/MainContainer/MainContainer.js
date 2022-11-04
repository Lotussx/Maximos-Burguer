import React from 'react'
import { Link } from 'react-router-dom'
import { StyledMainContainer } from './Styled-MainContainer'

export default function MainContainer() {
    return (
        <StyledMainContainer className='flex-class'>
            <div className='logo'>
            </div>
            <div className='legenda flex-class'>
                <span>(81) 99143-7844</span>
                Funcionamento: seg. à sex.
            </div>
            <Link to='/Cardapio'>
                <button>
                    FAÇA JÁ SEU PEDIDO!
                </button>
            </Link>
        </StyledMainContainer>
    )
}

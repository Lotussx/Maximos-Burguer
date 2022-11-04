import React from 'react';
import { Link } from 'react-router-dom';
import MenuLateral from './MenuLateral/MenuLateral';
import { HeaderContainer } from './Styled-Header';

export default function Header() {

    return (

        <HeaderContainer className='flex-class'>
            <div className='logo-title'>
                <Link to='/' className='flex-class'>
                    <div></div>
                    <h3 className='flex-class' >Maximos Burguer</h3>
                </Link>
            </div>
            <div className='menuLateral'>
                <MenuLateral />
            </div>
        </HeaderContainer>

    )
}

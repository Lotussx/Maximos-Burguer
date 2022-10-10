import React from 'react';
import { Link } from 'react-router-dom';

import { FooterContainer } from './Styled-Footer';

import { FaHome } from 'react-icons/fa';
import { IoRestaurant } from 'react-icons/io5';
import { BsTelephoneFill } from 'react-icons/bs';





export default function Footer() {
    return (
        <FooterContainer className='flex-class'>
            <nav className='flex-class'>
                <Link to='/' className='link'>
                    <div className='flex-class' to='/'>
                        <FaHome className='icons-footer'></FaHome>
                        <p>Home</p>
                    </div>
                </Link>
                <Link to='/Cardapio' className='link'>
                    <div c lassName='flex-class'>
                        <IoRestaurant className='icons-footer'></IoRestaurant>
                        <p>Cardápio</p>
                    </div>
                </Link>
                <Link to='/Contato' className='link'>
                    <div className='flex-class' href>
                        <BsTelephoneFill className='icons-footer'></BsTelephoneFill>
                        <p>Contato</p>
                    </div>
                </Link>
            </nav>
        </FooterContainer>
    )
}

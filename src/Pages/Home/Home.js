import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

import { HomeStyle } from './Styled-Home'

export default function Home() {
    return (
        <HomeStyle className='flex-class'>
            <Header />
            <div className='mainContainer'>
                <div className='mainContent flex-class'>
                    <div className='logoWrapper'>
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
                </div>
            </div>
            <Footer />
        </HomeStyle>
    )
}
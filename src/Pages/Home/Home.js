import React from 'react';

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

import { HomeStyle } from './Styled-Home'
import MainContainer from './MainContainer/MainContainer';

export default function Home() {
    return (
        <HomeStyle >
            <Header />
            <MainContainer />
            <Footer />
        </HomeStyle>
    )
}
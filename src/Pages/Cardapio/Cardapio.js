import React from 'react';
import { CardapioStyle } from './Styled-Cardapio.js';
import { useState } from 'react';

import data from '../../data.js';
import '../../App.css';

import ShopCart from './Carrinho/ShopCart';
import Header from '../../Components/Header/Header.js';
import SlidePromo from './SlidePromo/SlidePromo.js';
import CardapioCategorias from './CardapioCategorias/CardapioCategorias.js';


export default function Cardapio() {

    const { products, productsESPECIAL, productsHOTDOG, productsBATATA, productsHAMBU, productsBEBIDA } = data;
    const [cartItems, setCartItems] = useState([]);

    //Adcionar itens no  carrinho.
    const onADD = (product) => {
        const exist = cartItems.find(x => x.id === product.id);
        if (exist) {
            setCartItems(cartItems.map(x => x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x))
        } else {
            setCartItems([...cartItems, { ...product, qty: 1 }]);
        }
    }

    //Remover itens no  carrinho.
    const onREMOVE = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x.id !== product.id));
        } else {
            setCartItems(cartItems.map(x => x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x))
        }
    }

    return (
        <CardapioStyle className='App'>
            <Header></Header>
            <SlidePromo products={products} onADD={onADD}></SlidePromo>
            <CardapioCategorias
                productsESPECIAL={productsESPECIAL}
                productsHOTDOG={productsHOTDOG}
                productsBATATA={productsBATATA}
                productsHAMBU={productsHAMBU}
                productsBEBIDA={productsBEBIDA}
                countCartItems={cartItems.length}
                onADD={onADD}
            />
            <ShopCart countCartItems={cartItems.length} onADD={onADD} onREMOVE={onREMOVE} cartItems={cartItems}></ShopCart>
        </CardapioStyle>
    )
};

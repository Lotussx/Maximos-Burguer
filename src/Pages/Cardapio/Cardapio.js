import React from 'react';
import { CardapioStyle } from './Styled-Cardapio.js';
import { useState } from 'react';

import data from '../../data'
import '../../App.css';

import ShopCart from './Carrinho/ShopCart';
import Header from '../../Components/Header/Header.js';
import SlidePromo from './SlidePromo/SlidePromo.js';
import CardapioCategorias from './CardapioCategorias/CardapioCategorias.js';
import Promocao from './Promocao/Promocao.js';
import Global from '../../Global';

export default function Cardapio() {

    const { promoINAU, productsSUCOS, slideSEMANA, slideFDS, productsHAMBU, productsESPECIAL, productsHOTDOG, productsBEIRUTES, productsBEBIDA, productsBATATA, productsACAI, productsMILKSHAKE } = data;


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

    let todayDate = new Date()
    todayDate = todayDate.getDate()
    console.log(todayDate)



    const [promo, setPromo] = useState(false)
    const [promo2, setPromo2] = useState(false)


    const promoFunc = () => {
        if (todayDate === 17) {
            setPromo(true)
            setPromo2(true)
        } else {
            setPromo(false)
            setPromo2(false)
        }
    }

    const fecharPromo = () => {
        setPromo(false)
    }

    const confirmaPROMO = (promocao) => {
        if (cartItems.length === 0) {
            Global.infoAdcionais = [];
            Global.precoAdcionais = 0;
            Global.milkSHAKEpronto = []
            Global.acaiPRONTO = []
        }

        onADD(promocao)
        setPromo(false)
    }

    return (
        <CardapioStyle onLoad={promoFunc}>
            <Header />
            <SlidePromo slideSEMANA={slideSEMANA} slideFDS={slideFDS} onADD={onADD}></SlidePromo>

            <CardapioCategorias
                promo={promo2}
                promoINAU={promoINAU}
                productsHAMBU={productsHAMBU}
                productsESPECIAL={productsESPECIAL}
                productsHOTDOG={productsHOTDOG}
                productsBEIRUTE={productsBEIRUTES}
                productsBEBIDA={productsBEBIDA}
                productsBATATA={productsBATATA}
                productsACAI={productsACAI}
                productsSUCOS={productsSUCOS}
                productsMILKSHAKE={productsMILKSHAKE}
                countCartItems={cartItems.length}
                onADD={onADD}

            />

            <Promocao
                onADD={onADD}
                promoINAU={promoINAU}
                fecharPromo={fecharPromo}
                confirmaPROMO={confirmaPROMO}
                className01={promo === false ? 'promoDesativada' : 'promoAtivada'}
            />

            <ShopCart countCartItems={cartItems.length} onADD={onADD} onREMOVE={onREMOVE} cartItems={cartItems}></ShopCart>
        </CardapioStyle>
    )
};

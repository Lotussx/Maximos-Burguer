import React, { useState } from 'react';
import Global from '../../Global.js';
import { FinalizarPedidoContainer } from './Styled-FinalizarPedido';

import Header from '../../Components/Header/Header';

import CardPedido from './(00) CardPedido/CardPedido.js';
import InfoCliente from './(01) InfoCliente/InfoCliente.js';
import InputDelivery from './(02) InputDelivery/InputDelivery.js';
import InputPagamento from './(03) InputPagamento/InputPagamento.js';
import BtnFinalizar from './(04) BtnFinalizar/BtnFinalizar.js';
import VoltarCardapio from './(05) VoltarCardapio/VoltarCardapio.js';
import AvisoModal from './(06) AvisoModal/AvisoModal';

export default function FinalizarPedido() {

    const [modalAviso, setModalAviso] = useState(false);
    const abrirModal = () => {

        Global.nome = document.querySelector('form input[name="nome"]').value;
        Global.nomePEDIDO = Global.newMsg; //NOME PEDIDO
        Global.precoPEDIDO = Global.precoTotal; // PREÇO PEDIDO
        Global.obsPEDIDO = document.querySelector('form input[name="obsPedido"]').value;

        if (Global.nome === '') {
            alert('Preencha o campo de nome.')
            return
        }

        if (Global.opcSELECIONADAen === false) {
            alert('Escolha uma opcção de entrega.')
            return
        } else {
            if (Global.opcENTREGA === 'Delivery') {
                Global.endCEP = document.querySelector('form input[name="CEP"]').value;
                if (Global.endCEP === 0 || Global.endCEP === '') {
                    alert('Preencha o campo de CEP. Caso não queira inserir o CEP, favor digitar "000".')
                    return
                } else {
                    Global.endNUM = document.querySelector('form input[name="NUMERO"]').value;
                    if (Global.endNUM === '' || Global.endNUM === 0) {
                        alert('Preencha o campo de Número.')
                        return
                    } else {
                        Global.endRUA = document.querySelector('form input[name="RUA"]').value;
                        Global.endCID = document.querySelector('form input[name="CIDADE"]').value;
                        Global.endBAIRRO = document.querySelector('form input[name="BAIRRO"]').value;
                        Global.endCOMPLEMENTO = document.querySelector('form input[name="COMPLEMENTO"]').value;
                    }
                }
            }
        }

        if (Global.opcSELECIONADApag === false) {
            alert('Escolha uma opcção de pagamento.')
            return
        }
        setModalAviso(!modalAviso)
    }

    const fechaMODALaviso = () => {
        setModalAviso(!modalAviso)
    }

    return (

        <FinalizarPedidoContainer className='flex-class'>
            <Header></Header>
            {Global.newMsg !== '' ? (
                <div className='mainContainer flex-class'>
                    <CardPedido />
                    <form className='formContainer flex-class'>
                        {/* Nome e Obs Pedido */}
                        <InfoCliente />
                        
                        {/* Delivery */}
                        <InputDelivery />

                        {/* OPC Pagamento */}
                        <InputPagamento />
                        
                        {/* BTN para abrir o modal de aviso e pegar as informações dos input */}
                        <BtnFinalizar click={abrirModal} />
                    </form>
                </div>
            ) : (
                <VoltarCardapio />
            )}

            <AvisoModal class={modalAviso === true ? 'avisoModalOn' : 'avisoModalOff'} click={fechaMODALaviso}></AvisoModal>
        </FinalizarPedidoContainer>
    )
}


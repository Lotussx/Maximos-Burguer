import React, { useState } from 'react';
import Global from '../../Global.js';
import { FinalizarPedidoContainer } from './Styled-FinalizarPedido';

import Header from '../../Components/Header/Header';
import AvisoModal from './AvisoModal/AvisoModal';


import InputDelivery from './InputDelivery/InputDelivery.js';
import CardPedido from './CardPedido/CardPedido.js';
import VoltarCardapio from './VoltarCardapio/VoltarCardapio.js';
import InputPagamento from './InputPagamento/InputPagamento.js';

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
                        {/* Input para inserir o nome */}
                        <label htmlFor='name'>Digite seu nome:</label>
                        <input name='nome' type='text' id='name' placeholder='Digite seu nome aqui...' className='inputText' required></input>
                        {/* Input para inserir observações */}
                        <label htmlFor='obsPedido'>Observações do pedido:</label>
                        <input name='obsPedido' type='text' id='obsPedido' placeholder='Ex: sem alface e cebola...' className='inputText'></input>


                        {/* Delivery */}
                        <InputDelivery />

                        {/* OPC Pagamento */}
                        <InputPagamento />

                        <div className='buttonFinalizar' onClick={abrirModal}>
                            <button type='button'><p>Finalizar pedido</p></button>
                        </div>
                    </form>
                </div>


            ) : (

                <VoltarCardapio />
            )}

            <AvisoModal class={modalAviso === true ? 'avisoModalOn' : 'avisoModalOff'} click={fechaMODALaviso}></AvisoModal>
        </FinalizarPedidoContainer>


    )




}


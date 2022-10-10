import React, { useState } from 'react';
import Global from '../../Global.js';
import { FinalizarPedidoContainer } from './Styled-FinalizarPedido';

import Header from '../../Components/Header/Header';
import AvisoModal from './AvisoModal/AvisoModal';

import { useForm } from 'react-hook-form';

import InputDelivery from './InputDelivery/InputDelivery.js';
import CardPedido from './CardPedido/CardPedido.js';
import VoltarCardapio from './VoltarCardapio/VoltarCardapio.js';

export default function FinalizarPedido() {

    const { register, setValue } = useForm();

    // OPÇÃO ENTREGA
    const [formDelivery, setformDelivery] = useState('false');
    const handleChange = () => {
        var radioCheck = document.querySelector('input[name="opcao"]:checked')
        if (radioCheck.value === 'Delivery') {
            Global.opcENTREGA = radioCheck.value;
            Global.opcSELECIONADAen = true
            setformDelivery(!formDelivery)
        } else {
            Global.opcENTREGA = radioCheck.value;
            Global.opcSELECIONADAen = true
            setformDelivery('false')
        }
    }

    // CONSUMO DA API VIA CEP
    const checkCEP = (e) => {
        const cep = (e).target.value.replace(/\D/g, '');
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(res => res.json()).then(data => {
                console.log(data);
                setValue('CEP', data.cep);
                setValue('RUA', data.logradouro);
                setValue('CIDADE', data.localidade);
                setValue('BAIRRO', data.bairro);
            });

        console.log(e)
    }


    // PEGAR O VALOR DO INPUT COMPLEMENTO
    const complementoInput = (e) => {
        const complemento = (e).target.value
        console.log(complemento)
    }

    // PEGAR O VALOR DO INPUT TROCO
    const inputTROCO = (e) => {
        const troco = (e).target.value
        if (troco !== 0) {
            Global.trocoPAGAMENTO = troco;
        }
    }

    // OPÇÃO PAGAMENTO
    const [formPAGAMENTO, setformPAGAMENTO] = useState('false');
    const handleChangePAGAMENTO = () => {
        let radioCheck = document.querySelector('input[name="opcaoPAGA"]:checked')
        if (radioCheck.value === 'Dinheiro') {
            Global.opcSELECIONADApag = true;
            Global.opcPAGAMENTO = radioCheck.value;
            setformPAGAMENTO(!formPAGAMENTO)
        } else if (radioCheck.value === 'Pix') {
            Global.opcSELECIONADApag = true;
            Global.opcPAGAMENTO = radioCheck.value;
            setformPAGAMENTO('false')
        } else {
            Global.opcSELECIONADApag = true;
            Global.opcPAGAMENTO = radioCheck.value;
            setformPAGAMENTO('false')
        }
    }

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
                        <div className={`opcPagamento ${formPAGAMENTO ? '' : 'opcPagamentoOPEN'}`}>
                            {/* Opcão "Sim" */}
                            <input type="radio" name="opcaoPAGA" value="Dinheiro" id="radio01" className='radio' onChange={handleChangePAGAMENTO} />
                            <label htmlFor='opcao'>Dinheiro</label>
                            {/* Opcão "Pix" */}
                            <input type="radio" name="opcaoPAGA" value="Pix" id="radio02" className='radio' onChange={handleChangePAGAMENTO} />
                            <label htmlFor='opcao'>Pix</label>
                            {/* Opcão "Cartão" */}
                            <input type="radio" name="opcaoPAGA" value="Cartão" id="radio03" className='radio' onChange={handleChangePAGAMENTO} />
                            <label htmlFor='opcao'>Cartão</label>
                            <div className='trocoContainer'>
                                <label htmlFor='troco'>Valor do troco:</label>
                                <input type='number' name='troco' placeholder='Insira o valor do troco.' className='inputText' onBlur={inputTROCO}></input>
                            </div>
                        </div>

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


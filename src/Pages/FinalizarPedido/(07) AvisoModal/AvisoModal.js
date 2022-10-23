import React from 'react';
import { AvisoModalContainer } from './Styled-AvisoModal';

import Global from '../../../Global';
import { Link } from 'react-router-dom';

export default function AvisoModal(props) {

    const abrirZAP = () => {
        var url = '';
        let nomePEDIDO = Global.nomePEDIDO
        console.log(nomePEDIDO)
        Global.trocoPAGAMENTO = parseFloat(Global.trocoPAGAMENTO).toFixed(2);

        if (Global.infoAdcionais.length === 0){
            Global.infoAdcionais = 'Sem adcionais'
        }else{
            Global.infoAdcionais = Global.infoAdcionais.join('  -  ')
        }

        if (Global.opcENTREGA === 'Delivery' && Global.opcPAGAMENTO === 'Dinheiro') {
            url = ("https://api.whatsapp.com/send?phone=5581991437844&text=*PEDIDO:* " + Global.nomePEDIDO + "%0A%0A=================================%0A*NOME:* " + Global.nome + "%0A*OBS. DO PEDIDO:* " + Global.obsPEDIDO + "%0A*FORMA DE PAGAMENTO:* " + Global.opcPAGAMENTO + "%0A*VALOR PARA TROCO:* R$ " + Global.trocoPAGAMENTO + "%0A%0A=================================%0A*ADCIONAIS:* %0A%0A" + Global.infoAdcionais + "%0A=================================%0A%0A%0A*OPC. ENTREGA:* " + Global.opcENTREGA + "%0A*CEP:* " + Global.endCEP + "%0A*RUA:* " + Global.endRUA + "%0A*N°:* " + Global.endNUM + "%0A*CIDADE:* " + Global.endCID + "%0A*BAIRRO:* " + Global.endBAIRRO + "%0A*OBS. ENTREGA:* " + Global.obsPEDIDO + "%0A%0A*TOTAL:* " + Global.precoPEDIDO);
        }

        if (Global.opcENTREGA === 'Delivery' && Global.opcPAGAMENTO !== 'Dinheiro') {
            url = ("https://api.whatsapp.com/send?phone=5581991437844&text=*PEDIDO:* " + Global.nomePEDIDO + "%0A%0A=================================%0A%0A*NOME:* " + Global.nome + "%0A*OBS. DO PEDIDO:* " + Global.obsPEDIDO + "%0A*ADCIONAIS:* " + Global.infoAdcionais + "%0A*FORMA DE PAGAMENTO:* " + Global.opcPAGAMENTO + "%0A%0A=================================%0A%0A*ADCIONAIS:* %0A%0A" + Global.infoAdcionais + "%0A%0A%0A*OPC. ENTREGA:* " + Global.opcENTREGA + "%0A*CEP:* " + Global.endCEP + "%0A*RUA:* " + Global.endRUA + "%0A*N°:* " + Global.endNUM + "%0A*CIDADE:* " + Global.endCID + "%0A*BAIRRO:* " + Global.endBAIRRO + "%0A*OBS. ENTREGA:* " + Global.obsPEDIDO + "%0A%0A*TOTAL:* " + Global.precoPEDIDO);
        }

        if (Global.opcENTREGA !== 'Delivery' && Global.opcPAGAMENTO === 'Dinheiro') {
            url = ("https://api.whatsapp.com/send?phone=5581991437844&text=*PEDIDO:* " + Global.nomePEDIDO + "%0A%0A=================================%0A%0A*NOME:* " + Global.nome + "%0A*OBS. DO PEDIDO:* " + Global.obsPEDIDO + "%0A*ADCIONAIS:* " + Global.infoAdcionais + "%0A*FORMA DE PAGAMENTO:* " + Global.opcPAGAMENTO + "%0A*VALOR PARA TROCO:* R$ " + Global.trocoPAGAMENTO + "%0A%0A=================================%0A%0A*ADCIONAIS:* %0A%0A" + Global.infoAdcionais + "%0A%0A*OPC. ENTREGA:* " + Global.opcENTREGA + "%0A%0A*TOTAL:* " + Global.precoPEDIDO);
        }

        if (Global.opcENTREGA !== 'Delivery' && Global.opcPAGAMENTO !== 'Dinheiro') {
            url = ("https://api.whatsapp.com/send?phone=5581991437844&text=*PEDIDO:* " + Global.nomePEDIDO + "%0A=================================%0A%0A*NOME:* " + Global.nome + "%0A*OBS. DO PEDIDO:* " + Global.obsPEDIDO + "%0A*ADCIONAIS:* " + Global.infoAdcionais + "%0A*FORMA DE PAGAMENTO:* " + Global.opcPAGAMENTO + "%0A%0A=================================%0A%0A*ADCIONAIS:* %0A%0A" + Global.infoAdcionais + "%0A%0A*OPC. ENTREGA:* " + Global.opcENTREGA + "%0A%0A*TOTAL:* " + Global.precoPEDIDO);
        }
        window.open(url);

    }


    return (
        <AvisoModalContainer className={props.class}>
            <div className='modalAviso flex-class'>
                <div className='title flex-class'>
                    <div></div>
                    <h2>ATENÇÃO!</h2>
                    <div onClick={props.click}>
                        <div className='row1'></div>
                        <div className='row2'></div>
                    </div>
                </div>
                <p>
                    Você está sendo direcionado(a) para o Whatsapp da Maximos Burguer
                    junto com as informações que acabaram de ser preenchidas.
                    Ao chegar no Whatsapp, favor não alterar a mensagem predefinida, apenas envie-a e aguarde o atendimento.
                </p>
                <div className='btn flex-class'>
                    <Link to='/'><button onClick={abrirZAP}>OK!</button></Link>
                </div>
            </div>
        </AvisoModalContainer >
    )
}

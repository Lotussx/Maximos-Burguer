import React from 'react';
import { AvisoModalContainer } from './Styled-AvisoModal';

import Global from '../../../Global';
import { Link } from 'react-router-dom';

export default function AvisoModal(props) {

    console.log(Global.infoAdcionais)

    const abrirZAP = () => {
        Global.trocoPAGAMENTO = parseFloat(Global.trocoPAGAMENTO).toFixed(2);

        function opcPagamento() {
            if (Global.opcPAGAMENTO === 'Dinheiro' && Global.trocoPAGAMENTO !== 0) {

                return ("%0A*FORMA DE PAGAMENTO:* " + Global.opcPAGAMENTO + "%0A*VALOR PARA TROCO:* R$ " + Global.trocoPAGAMENTO)

            } else if (Global.opcPAGAMENTO === 'Dinheiro' && Global.trocoPAGAMENTO === 0) {

                return ("%0A*FORMA DE PAGAMENTO:* " + Global.opcPAGAMENTO)

            } else {

                return ("%0A*FORMA DE PAGAMENTO:* " + Global.opcPAGAMENTO + "%0A%0A=================================")

            }
        }

        function adicionais() {
            if (Global.infoAdcionais === [] || Global.infoAdcionais === '' || Global.infoAdcionais.length === 0) {
                return ''
            } else {
                return ("%0A%0A*ADCIONAIS:* " + Global.infoAdcionais + "%0A%0A=================================")
            }
        }
        function sucos() {
            if (Global.sucoPRONTO === [] || Global.sucoPRONTO === '' || Global.sucoPRONTO.length === 0) {
                return ''
            } else {
                return ("%0A%0A*SUCOS:* " + Global.sucoPRONTO + "%0A%0A=================================")
            }
        }

        function adicionaisACAI() {
            if (Global.acaiPRONTO.length === 0) {
                return ''
            } else {
                return ("%0A%0A*AÇAÍ:* " + Global.acaiPRONTO + "%0A%0A=================================")
            }
        }

        function adicionaisMILKSHAKE() {
            if (Global.milkSHAKEpronto.length === 0) {
                return ''
            } else {
                return ("%0A%0A*MILKSHAKE:* " + Global.milkSHAKEpronto + "%0A%0A=================================")
            }
        }

        function opcEntrega() {
            if (Global.opcENTREGA === 'Delivery') {

                return ("%0A%0A*OPC. ENTREGA:* " + Global.opcENTREGA + "%0A*CEP:* " + Global.endCEP + "%0A*RUA:* " + Global.endRUA + "%0A*N°:* " + Global.endNUM + "%0A*CIDADE:* " + Global.endCID + "%0A*BAIRRO:* " + Global.endBAIRRO + "%0A*OBS. ENTREGA:* " + Global.endCOMPLEMENTO)

            } else {

                return ("%0A%0A*OPC. ENTREGA:* " + Global.opcENTREGA)

            }
        }

        function precoTotal() {
            return ("%0A%0A*TOTAL:* " + Global.precoPEDIDO)
        }

        let urlZAP =
            "https://api.whatsapp.com/send?phone=5581991437844&text=*PEDIDO:* "
            + Global.nomePEDIDO +
            "%0A=================================%0A%0A*NOME:* "
            + Global.nome + "%0A*OBS. DO PEDIDO:* "
            + Global.obsPEDIDO
            + opcPagamento()
            + adicionais()
            + sucos()
            + adicionaisACAI()
            + adicionaisMILKSHAKE()
            + opcEntrega()
            + precoTotal()


        window.open(urlZAP)

    }


    return (
        <AvisoModalContainer className={props.class} >
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

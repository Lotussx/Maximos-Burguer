import React, { useState } from 'react';
import { InputDeliveryContainer } from '../InputDelivery/Styled-InputDelivery';

import Global from '../../../Global';

export default function InputPagamento() {

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

    // PEGAR O VALOR DO INPUT TROCO
    const inputTROCO = (e) => {
        const troco = (e).target.value
        if (troco !== 0) {
            Global.trocoPAGAMENTO = troco;
        }
    }

    return (
        <InputDeliveryContainer className={formPAGAMENTO ? 'opcPagamentoCLOSE' : 'opcPagamentoOPEN'}>
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
                <label htmlFor='TROCO'>Valor do troco:</label>
                <input className='teste' type='number' name='TROCO' placeholder='Insira o valor do troco.'  onBlur={inputTROCO}></input>
            </div>
        </InputDeliveryContainer>
    )
}

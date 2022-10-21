import React, { useState } from 'react';
import { InputPagamentoContainer } from './Styled-InputPagamento';

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
        <InputPagamentoContainer className={formPAGAMENTO ? '' : 'opcPagamentoOPEN'}>
            {/* Opcão "Sim" */}
            <input type="radio" name="opcaoPAGA" value="Dinheiro" id="radio01" onChange={handleChangePAGAMENTO} />
            <label htmlFor='opcaoPAGA'>Dinheiro</label>
            {/* Opcão "Pix" */}
            <input type="radio" name="opcaoPAGA" value="Pix" id="radio02" onChange={handleChangePAGAMENTO} />
            <label htmlFor='opcaoPAGA'>Pix</label>
            {/* Opcão "Cartão" */}
            <input type="radio" name="opcaoPAGA" value="Cartão" id="radio03" onChange={handleChangePAGAMENTO} />
            <label htmlFor='opcaoPAGA'>Cartão</label>


            <div className='trocoContainer'>
                <label htmlFor='TROCO'>Valor do troco:</label>
                <input className='inputText' type='number' name='TROCO' placeholder='Insira o valor do troco.' onBlur={inputTROCO}></input>
            </div>
        </InputPagamentoContainer>
    )
}

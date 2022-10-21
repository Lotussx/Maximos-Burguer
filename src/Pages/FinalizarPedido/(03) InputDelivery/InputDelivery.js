import React, { useState } from 'react';
import { InputDeliveryContainer } from './Styled-InputDelivery'
import { useForm } from 'react-hook-form';


import Global from '../../../Global'

export default function InputDelivery() {

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

    return (
        <InputDeliveryContainer className={formDelivery ? '' : 'inputRadioDeliveryOpen'}>
            {/* Opcão "Sim" */}
            <input type="radio" name="opcao" value="Delivery" id="radio01" className='radio' onChange={handleChange} />
            <label htmlFor='opcao'>Delivery</label>
            {/* Opcão "Não" */}
            <input type="radio" name="opcao" value="Retirada no estabelicimento" id="radio02" className='radio' onChange={handleChange} />
            <label htmlFor='opcao'>Retirada no estabelicimento</label>

            {/* Div para inserir as info de endereço */}
            <div className='enderecoContainer flex-class'>
                <input type='text' {...register('CEP')} placeholder='Digite seu CEP' className='inputText' onBlur={checkCEP}></input>
                <div className='ruaNum flex-class'>
                    <input type='text' {...register('RUA')} placeholder='Digite o nome da sua rua' className='inputText'></input>
                    <input type='number' {...register('NUMERO')} placeholder='N°' className='inputText'></input>
                </div>
                <div className='bairroCidade flex-class'>
                    <input type='text' {...register('CIDADE')} placeholder='Insira sua cidade' className='inputText'></input>
                    <input type='text' {...register('BAIRRO')} placeholder='Insira seu bairro' className='inputText'></input>
                </div>
                <input type='text' {...register('COMPLEMENTO')} placeholder='Complemento...' className='inputText' onBlur={complementoInput}></input>
            </div>
        </InputDeliveryContainer>
    )
}

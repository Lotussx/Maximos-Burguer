import React from 'react';
import Header from '../../Components/Header/Header';
import { ContatoContainer } from './Styled-Contato';

import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import { SiWhatsapp } from 'react-icons/si';



export default function Contato() {

    const enviarContato = () => {
        let nomeContato = document.querySelector('form input[name="nome"]').value;
        let emailContato = document.querySelector('form input[name="email"]').value;
        let assuntoContato = document.querySelector('form input[name="assunto"]').value;
        let msgContato = document.querySelector('form textarea[name="msg"]').value;

        let url = ("https://api.whatsapp.com/send?phone=5581991437844&text=*CONTATO*%0A=================================%0A*NOME:* " + nomeContato + "%0A*E-MAIL:* " + emailContato + "%0A*ASSUNTO:* " + assuntoContato + "%0A*MENSAGEM:* " + msgContato);

        window.open(url)
    }

    return (
        <>
            <Header />
            <ContatoContainer>
                <div className='contatoForm flex-class'>
                    <div>Envie-nos uma mensagem</div>
                    <form action=''>
                        <label htmlFor='nome'>Nome</label>
                        <input type='text' name='nome' placeholder='Insira seu nome'></input>

                        <label htmlFor='email'>Email</label>
                        <input type='email' name='email' placeholder='Insira seu nome'></input>

                        <label htmlFor='assunto'>Assunto</label>
                        <input type='text' name='assunto' placeholder='Insira seu nome'></input>

                        <label htmlFor='msg'>Mensagem</label>
                        <textarea placeholder='Insira sua mensagem' name='msg'></textarea>

                        <button type='button' onClick={enviarContato}>Enviar</button>
                    </form>

                </div>

                
                <div className='redesSociais flex-class'>
                    <h3>Nossas redes sociais</h3>
                    <div className='icons'>
                        <a href='https://api.whatsapp.com/send?phone=558197216235' target='_blank' rel="noopener noreferrer">
                            <SiWhatsapp className='icons01'></SiWhatsapp>
                        </a>
                        <FaFacebookSquare className='icons02'></FaFacebookSquare>
                        <a href='https://www.instagram.com/hamburgueria_maximosburguer/' target='_blank' rel="noopener noreferrer">
                            <FaInstagram className='icons03'></FaInstagram>
                        </a>
                    </div>
                </div>
            </ContatoContainer>
        </>
    )
}

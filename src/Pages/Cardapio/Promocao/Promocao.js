import React from 'react'
import { PromoContainer } from './Styled-Promocao'
import { IoClose } from 'react-icons/io5';



export default function Promocao({ className01, className02, promoINAU, fecharPromo, confirmaPROMO }) {
    return (
        <PromoContainer className={className01} onClick={fecharPromo}>
            <div className='promoContainer'>
                {promoINAU.map((promocao) => (
                    <div className='produto flex-class'>
                        <div className='title flex-class'>
                            <div className='space'></div>
                            <h3>Promoção de Inauguração</h3>
                            <div className='space flex-class' onClick={fecharPromo}>
                                <IoClose />
                            </div>
                        </div>

                        <div className='img' style={{ background: `url(${promocao.image})` }} ></div>

                        <div className='nomeDescri flex-class'>
                            <h3>{promocao.name} - R$ {promocao.price}</h3>
                            <p>{promocao.description}</p>
                        </div>

                        <button onClick={() => confirmaPROMO(promocao)}>Adicionar ao carrinho</button>
                    </div>
                ))}

            </div>

        </PromoContainer >
    )
}

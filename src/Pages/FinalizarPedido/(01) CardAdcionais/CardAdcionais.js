import React from 'react';
import { CardAdcionaisContainer } from './Styled-CardAdcionais';

export default function CardAdcionais({adicionais, arrMap}) {


    return (

        <CardAdcionaisContainer >
            <h3>{adicionais}</h3>
            <hr className='barra'></hr>
            <div className='infoADC'>
                {arrMap.map((item) => (
                    <div className='item'>{item}</div>
                ))}
            </div>
        </CardAdcionaisContainer>

    )
}

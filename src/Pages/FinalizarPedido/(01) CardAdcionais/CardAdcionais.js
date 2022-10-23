import React from 'react';
import { CardAdcionaisContainer } from './Styled-CardAdcionais';

import Global from '../../../Global';

export default function CardAdcionais() {


    return (

        <CardAdcionaisContainer >
            <h3>Adcionais:</h3>
            <hr className='barra'></hr>
            <div className='infoADC'>
                {Global.infoAdcionais.map((item) => (
                    <div>{item}</div>
                ))}
            </div>
            <div className='precoADC'>
                <span>R$ {Global.precoAdcionais.toFixed(2)}</span>
            </div>
        </CardAdcionaisContainer>

    )
}

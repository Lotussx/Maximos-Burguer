import React from 'react';
import { BtnFinalizarContainer } from './Styled-BtnFinalizar';


export default function BtnFinalizar(props) {
    return (
        <BtnFinalizarContainer onClick={props.click}>
            <button type='button'><p>Finalizar pedido</p></button>
        </BtnFinalizarContainer>
    )
}

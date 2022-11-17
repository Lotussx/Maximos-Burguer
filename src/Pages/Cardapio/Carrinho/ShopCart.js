import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { ContainerShopCart } from './Styled-ShopCart';

import { MdShoppingCart } from 'react-icons/md';
import seta from '../../../Images/seta-baixo.png';
import Global from '../../../Global.js';



export default function ShopCart(props) {


    const { countCartItems } = props;
    const { cartItems, onADD, onREMOVE } = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0) + Global.precoAdcionais;


    //expandir o carrnho
    const [openCart, setOpenCart] = useState(undefined);
    const expandCart = () => {
        if (openCart === undefined) {
            setOpenCart(true)
        } else if (openCart !== undefined) {
            setOpenCart(!openCart)
        }
    }

    //finalizar o pedido
    const finalizarPedido = () => {
        Global.msg = [];
        let itensCarrinho = document.querySelectorAll('.item .itemName');
        let QTYitensCarrinho = document.querySelectorAll('.itemPrice p');

        for (let i = 0; i < itensCarrinho.length; i++) {
            let cartInfo = QTYitensCarrinho[i].innerHTML + 'x - ' + itensCarrinho[i].innerHTML;
            Global.msg.push(cartInfo);
            Global.newMsg = Global.msg.join(' | ');
            Global.precoTotal = document.getElementById("preco").innerHTML
        }

        console.log(Global.precoTotal)
    }



    const excluiADC = () => {
        Global.infoAdcionais = [];
        Global.precoAdcionais = 0;
        Global.milkSHAKEpronto = []
        Global.acaiPRONTO = []
        setOpenCart(!openCart)
    }




    return (
        <ContainerShopCart className={openCart === undefined ? '' : openCart === true ? 'carrinhoAberto' : 'carrinhoFechado'}>


            <div className='cartContent flex-class'>
                <div className='cartIcon flex-class'>
                    <MdShoppingCart onClick={expandCart} className='iconCart'></MdShoppingCart>
                    <button className='contador' onClick={expandCart}>
                        {countCartItems}
                    </button>
                    <div className='arrowContainer flex-class' onClick={expandCart}>
                        <img src={seta} alt='' />
                    </div>
                </div>

                {openCart &&
                    <hr className='barraDivisora'></hr>
                }

                {cartItems.length === 0 &&
                    <div className='carrinhoVazio'>
                        <div className='carrinhoVazio flex-class'>Carrinho vazio....</div>
                    </div>
                }

                {cartItems.length !== 0 &&
                    <div className='buttonExpandCart flex-class' onClick={expandCart}>
                        <button>Abrir carrinho</button>
                    </div>
                }

                <>
                    {openCart &&
                        <div className='containerItensCart'>
                            {cartItems.map((item) => (
                                <div key={item.id} className="item flex-class">
                                    <h4 className='itemName'>{item.name}</h4>
                                    <div className='buttonDiv flex-class'>
                                        <div className='addREMOVE flex-class'>
                                            <button onClick={() => onADD(item)}> + </button>
                                            <button onClick={() => onREMOVE(item)}> - </button>
                                        </div>
                                        <div className='itemPrice flex-class'>
                                            <p>{item.qty}</p> x R$ <span>{item.price.toFixed(2)} </span>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    }
                </>

                {openCart &&
                    <hr className='barraDivisora'></hr>
                }


                {cartItems.length !== 0 &&
                    <>
                        {Global.precoAdcionais !== 0 && openCart === true &&
                            <div className='precoAdcionais flex-class'>
                                <h4>ADICIONAIS: </h4>
                                <button onClick={excluiADC}>Excluir adicionais</button>
                                <p>R$ {Global.precoAdcionais.toFixed(2)}</p>
                            </div>
                        }
                        <div className='precoTotalContainer flex-class'>
                            <h4>Preço Total:</h4>
                            <div className='preco flex-class'>
                                <span>R$</span>
                                <p id='preco'>{itemsPrice.toFixed(2)}</p>
                            </div>
                        </div>
                    </>
                }

                {openCart && countCartItems !== 0 &&
                    <div className='finalizarPedido flex-class' onClick={finalizarPedido} >
                        <Link to='/FinalizarPedido' className='flex-class'> <button>Finalizar Pedido</button> </Link>
                    </div>
                }
            </div>



        </ContainerShopCart >
    )
}

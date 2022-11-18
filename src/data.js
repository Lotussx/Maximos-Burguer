import Promo01 from './Images/Promo/Promo01.png'
// import Promo02 from './Images/Promo/Promo02.png'
// import Promo03 from './Images/Promo/Promo03.png'

// SLIDE SEMANA - PROMOÇÕES

import PROMO_2DUPLOCHEDDAR from './Images/Slide/Promos/PROMO-2DUPLOCHEDDAR.png'
import PROMO_2XBACON from './Images/Slide/Promos/PROMO-2XBACON.png'
import PROMO_2XEGG from './Images/Slide/Promos/PROMO-2XEGG.png'
import PROMO_2XTUDO from './Images/Slide/Promos/PROMO-2XTUDO.png'
import PROMO_3XBACON from './Images/Slide/Promos/PROMO-3XBACON.png'
import PROMO_3XCALABRESA from './Images/Slide/Promos/PROMO-3XCALABRESA.png'
import PROMO_3XEGG from './Images/Slide/Promos/PROMO-3XEGG.png'
import PROMO_4XCHEDDAR from './Images/Slide/Promos/PROMO-4X-CHEDDAR.png'
import PROMO_DUPLOBACON from './Images/Slide/Promos/PROMO-DUPLOBACON.png'
import PROMO_HOTDOG from './Images/Slide/Promos/PROMO-HOTDOG.png'
import PROMO_MINIBARCA from './Images/Slide/Promos/PROMO-MINIBARCA.png'


const data = {
    slideSEMANA: [
        {
            id: '300',
            name: 'PROMO 2 DUPLO CHEDDAR',
            price: 30.00,
            image: PROMO_2DUPLOCHEDDAR,
            description: '02 Duplo Cheddar + 01 Refri 1L' 
        },
        {
            id: '301',
            name: 'PROMO 2 X-BACON',
            price: 29.99,
            image: PROMO_2XBACON,
            description: '02 X-Bacon + 01 Refri 1L + 01 Batata P' 
        },
        {
            id: '302',
            name: 'PROMO 02 X-EGG',
            price: 39.99,
            image: PROMO_2XEGG,
            description: '02 X-Egg + 01 Batata P + 02 Milkshake' 
        },
        {
            id: '303',
            name: 'PROMO 02 X-TUDO',
            price: 35.99,
            image: PROMO_2XTUDO,
            description: '02 X-Tudo + 01 Refri 1L' 
        },
        {
            id: '304',
            name: 'PROMO 03 X-BACON',
            price: 39.99,
            image: PROMO_3XBACON,
            description: '03 X-Bacon + 01 Refri 1L + 01 Batata P' 
        },
        {
            id: '305',
            name: 'PROMO 03 X-CALABRESA',
            price: 39.99,
            image: PROMO_3XCALABRESA,
            description: '03 X-Calabresa + 01 Refri 1L' 
        },
        {
            id: '306',
            name: 'PROMO 03 X-EGG',
            price: 35.99,
            image: PROMO_3XEGG,
            description: '03 X-Egg + 01 Refri 1L' 
        },
        {
            id: '307',
            name: 'PROMO 04 X-CHEDDAR',
            price: 43.99,
            image: PROMO_4XCHEDDAR,
            description: '04 X-Cheddar + 01 Refri 1L' 
        },
        {
            id: '308',
            name: 'PROMO 02 DUPLO BACON',
            price: 35.00,
            image: PROMO_DUPLOBACON,
            description: '02 Duplo Bacon + 01 Refri 1L' 
        },
        {
            id: '309',
            name: 'PROMO 04 HOTDOG TRADICIONAL',
            price: 25.00,
            image: PROMO_HOTDOG,
            description: '04 Hotdog Tradicional + 01 Refri 1L' 
        },
        {
            id: '310',
            name: '01 MINIBARCA',
            price: 19.99,
            image: PROMO_MINIBARCA,
            description: '01 X-Burguer + Batata + Cheddar + Calabresa' 
        },
        
    ],

    slideFDS: [
        {
            id: '111',
            name: 'FIM DE SEMANA 01',
            price: 25.99,
            image: Promo01,
            description: '1 X-EGG + 1 Batata P + Antarctica'
        },
        {
            id: '222',
            name: 'FIM DE SEMANA 02',
            price: 25.99,
            image: Promo01,
            description: '1 X-EGG + 1 Batata P + Antarctica'
        },
        {
            id: '333',
            name: 'FIM DE SEMANA 03',
            price: 25.99,
            image: Promo01,
            description: '1 X-EGG + 1 Batata P + Antarctica'
        },
    ],

    promoINAU: [
        {
            id: '10022',
            name: 'PROMOÇÃO DE INAUGURAÇÃO',
            price: 25.99,
            image: Promo01,
            description: 'Pão, carne (130g), cheddar, salada c/cebola caramelizada, creme e barbecue.'
        }
    ],

    productsHAMBU: [
        {
            id: '01',
            name: 'HAMBURGUER',
            price: 8.00,
            image: Promo01,
            description: 'Pão, carne (130g), salada c/cebola caramelizada, creme e barbecue.'
        },
        {
            id: '02',
            name: 'X-BURGUER',
            price: 10.00,
            image: 'https://drive.google.com/file/d/1JWvqIC0lHiSkXLC5fgzSmv44ztbYQB8U/view?usp=share_link',
            description: 'Pão, carne (130g), queijo, salada c/cebola caramelizada, creme e barbecue.            '
        },
        {
            id: '03',
            name: 'X-EGG',
            price: 12.00,
            image: 'https://drive.google.com/file/d/1RRKhFq6VWFORgBfapbZ0MCH817I2WclC/view?usp=sharing',
            description: 'Pão, carne (130g), queijo, ovo, salada c/cebola caramelizada, creme e barbecue.'
        },
        {
            id: '04',
            name: 'X-CHEDDAR',
            price: 13.00,
            image: 'https://drive.google.com/file/d/10XxZCeTbdG6pEVva3oF1XrBaTzf9WLsr/view?usp=share_link',
            description: 'Pão, carne (130g), cheddar, salada c/cebola caramelizada, creme e barbecue.'
        },
        {
            id: '05',
            name: 'X-BACON',
            price: 13.00,
            image: 'https://drive.google.com/file/d/1IN9DSUrVG15l64v_3R6zD24mbzXswq1X/view?usp=share_link',
            description: 'Pão, carne (130g), queijo, bacon, salada c/cebola caramelizada, creme e barbecue.'
        },
        {
            id: '06',
            name: 'X-EGG BACON',
            price: 15.00,
            image: 'https://drive.google.com/file/d/1RoWlJwtTcY08R01AXKZqOYP-7URb2CRY/view?usp=share_link',
            description: 'Pão, carne (130g), queijo, ovo, bacon, salada c/cebola caramelizada, creme e barbecue.'
        },
        {
            id: '07',
            name: 'X-CALABRESA',
            price: 13.00,
            image: 'https://drive.google.com/file/d/1x0nSW33HUb_MSxTfd9xoe_VFaz0vORy7/view?usp=share_link',
            description: 'Pão, carne (130g), queijo, calabresa, salada c/cebola caramelizada, creme e barbecue.'
        },
        {
            id: '08',
            name: 'X-EGG CALABRESA',
            price: 13.00,
            image: Promo01,
            description: 'Pão, carne (130g), queijo, calabresa, ovo, salada c/cebola caramelizada, creme e barbecue.'
        },
        {
            id: '09',
            name: 'X-DOG',
            price: 12.00,
            image: Promo01,
            description: 'Pão, carne (130g), queijo, salsicha, salada c/cebola caramelizada, creme e barbecue.'
        },
        {
            id: '10',
            name: 'X-FRANGO',
            price: 13.00,
            image: Promo01,
            description: 'Pão, frango (130g), queijo, salada c/cebola caramelizada, creme e barbecue.'
        },
        {
            id: '11',
            name: 'X-TUDO',
            price: 18.00,
            image: 'https://drive.google.com/file/d/1N8YgkoPSS1VuuhoyiaICoXzMH-sWaZC0/view?usp=share_link',
            description: 'Pão, carne (130g), queijo, calabresa, bacon, salsicha, ovo, presunto, salada c/cebola caramelizada, creme e barbecue.'
        },
        {
            id: '12',
            name: 'X-TUDÃO',
            price: 18.00,
            image: Promo01,
            description: 'Pão, carne (220g), queijo, calabresa, bacon, salsicha, ovo, presunto, frango, cheddar, salada c/cebola caramelizada, creme e barbecue.'
        },
    ],

    productsESPECIAL: [
        {
            id: '13',
            name: 'CHEDDAR DUPLO',
            price: 17.00,
            image: 'https://drive.google.com/file/d/1SErO36EDsRcs2ZOFWYs9vktVc4u5NSKR/view?usp=share_link',
            description: 'Pão, 2 carnes (130g), queijo, cheddar, salada c/cebola caramelizada, creme e barbecue.'
        },
        {
            id: '14',
            name: 'ESPECIAL COALHO',
            price: 18.00,
            image: Promo01,
            description: 'Pão, 2 carnes (130g), queijo coalho, salada c/cebola caramelizada creme e barbecue.'
        },
        {
            id: '15',
            name: 'X-CORAÇÃO',
            price: 18.00,
            image: Promo01,
            description: 'Pão, coração, queijo coalho, salada c/cebola caramelizada creme e barbecue.'
        },
        {
            id: '16',
            name: 'X-CARNE DE SOL',
            price: 19.00,
            image: Promo01,
            description: 'Pão, carne de Sol em cubos (130g), queijo coalho, salada c/cebola caramelizada, creme e barbecue.'
        },
        {
            id: '17',
            name: 'X-PICANHA',
            price: 20.00,
            image: Promo01,
            description: 'Pão, picanha em cubos (130g), queijo coalho, cheddar, salada c/cebola caramelizada, creme e barbecue.'
        },
        {
            id: '18',
            name: 'X-BACON DUPLO',
            price: 18.00,
            image: Promo01,
            description: 'Pão, 2 carne (130g), bacon, cheddar, salada c/cebola caramelizada, creme e barbecue.'
        },
        {
            id: '19',
            name: 'X-DUPLO BACON',
            price: 17.00,
            image: 'https://drive.google.com/file/d/1QExVLTzM7VZ5zOix0phKlOWnFDaPm8gq/view?usp=share_link',
            description: 'Pão, 2 carne (130g), bacon, salada c/cebola caramelizada, creme e barbecue.'
        },
        {
            id: '20',
            name: 'MÁXIMOS BURGUER',
            price: 34.00,
            image: Promo01,
            description: 'Pão grande, 2 carnes (220g), queijo, calabresa, bacon, salcicha, ovos, presunto, frango, cheddar, salada c/cebola caramelizada, creme e barbecue.'
        },
        {
            id: '21',
            name: 'BIG MÁXIMOS',
            price: 40.00,
            image: Promo01,
            description: 'Pão super grande, 4 carnes 130gm, queijo, salcicha, bacon, ovo, presunto, calabresa, salada c/cebola caramelizada, creme e barbecue.'
        },
    ],

    productsHOTDOG: [
        {
            id: '22',
            name: 'HOT DOG TRADICIONAL',
            price: 8.00,
            image: 'https://drive.google.com/file/d/1xZ4EBLfzZKDwgPlrlBktWiYAzZ0wluJG/view?usp=share_link',
            description: 'Pão, carne moída, salcicha, cheddar, cebola, tomate, milho, ervilha, batata palha, queijo maçaricado, maionese da casa e barbecue.'
        },
        {
            id: '23',
            name: 'HOT DOG FRANGO',
            price: 11.00,
            image: Promo01,
            description: 'Pão, carne moída, salcicha, frango, cheddar, cebola, tomate, milho, ervilha, batata palha, queijo maçaricado, molho da casa e barbecue.'
        },
        {
            id: '24',
            name: 'HOT DOG CARNE DE SOL',
            price: 13.00,
            image: Promo01,
            description: 'Pão, carne moída, salcicha, carne de sol, cheddar, cebola, tomate, milho, ervilha, batata palha, queijo maçaricado, molho da casa e barbecue.'
        },
        {
            id: '25',
            name: 'HOT DOG CALABRESA',
            price: 12.00,
            image: Promo01,
            description: 'Pão, carne moída, salcicha, calabresa, cheddar, cebola, tomate, milho, ervilha, batata palha, queijo maçaricado, molho da casa e barbecue.'
        },
        {
            id: '26',
            name: 'HOT DOG BACON',
            price: 12.00,
            image: Promo01,
            description: 'Pão, carne moída, salcicha, bacon, cheddar, cebola, tomate, milho, ervilha, barata palha, queijo maçaricado, molho da casa e barbecue.'
        },
        {
            id: '27',
            name: 'HOT DOG CARQUE',
            price: 13.00,
            image: Promo01,
            description: 'Pão, carne moída, salcicha, charque, cheddar, cebola, tomate, milho, ervilha, batata palha, queijo maçaricado, molho da casa e barbecue.'
        },
    ],

    productsBEIRUTES: [
        {
            id: '28',
            name: 'BEIRUTE DE FRANGO',
            price: 25.00,
            image: Promo01,
            description: 'Pão sírio, frango em cubos, queijo mussarela, presunto, salada, cream chesse, batata frita crocante e molho da casa.'
        },
        {
            id: '29',
            name: 'BEIRUTE DE FRALDINHA',
            price: 28.00,
            image: Promo01,
            description: 'Pão sírio, fraudinha, queijo mussarela, presunto, salada, cream chesse, batata frita crocante e molho da casa.'
        },
        {
            id: '30',
            name: 'BEIRUTE DE CAMARÃO',
            price: 35.00,
            image: Promo01,
            description: 'Pão sírio, camarão, queijo mussarela, presunto, salada, cream chesse, batata frita crocante e molho da casa.'
        },
        {
            id: '31',
            name: 'BEIRUTE MISTO',
            price: 32.00,
            image: Promo01,
            description: 'Pão sírio, frango em cubos, fraldinha, queijo mussarela, presunto, salada, cream chesse, batata frita crocante e molho da casa.'
        },
        {
            id: '32',
            name: 'BEIRUTE DE PICANHA',
            price: 38.00,
            image: Promo01,
            description: 'Pão sírio, picanha, queijo mussarela, presunto, salada, cream chesse, batata frita crocante e molho da casa.'
        },
        {
            id: '33',
            name: 'BEIRUTE DE CARNE DE SOL',
            price: 36.00,
            image: Promo01,
            description: 'Pão sírio, carne de sol, queijo mussarela, presunto, salada, cream chesse, batata frita crocante e molho da casa.'
        },

    ],

    productsBATATA: [
        {
            id: '34',
            name: 'Tadicional P',
            price: 7.00,
            image: 'https://picsum.photos/200',
            description: 'Batata, sal e parmesão'
        },
        {
            id: '35',
            name: 'Tradicional M',
            price: 10.00,
            image: 'https://picsum.photos/200',
            description: 'Batata, sal e parmesão'
        },
        {
            id: '36',
            name: 'Tradicional G',
            price: 14.00,
            image: 'https://picsum.photos/200',
            description: 'Batata, sal e parmesão'
        },
        {
            id: '37',
            name: 'Calabrasesa',
            price: 16.00,
            image: 'https://picsum.photos/200',
            description: 'Batata, calabresa, cheddar e parmesão.'
        },
        {
            id: '38',
            name: 'Bacon',
            price: 17.00,
            image: 'https://picsum.photos/200',
            description: 'Batata, bacon, cheddar e parmesão.'
        },
    ],

    productsACAI: [
        {
            id: '39',
            name: 'AÇAÍ 200ML',
            price: 7.00,
            image: 'https://picsum.photos/200',
            description: '1 fruta, 3 acompanhamento, 1 caldas.'
        },
        {
            id: '40',
            name: 'AÇAÍ 300ML',
            price: 10.00,
            image: 'https://picsum.photos/200',
            description: '2 frutas, 4 acompanhamento, 2 caldas.'
        },
        {
            id: '41',
            name: 'AÇAÍ 400ML',
            price: 13.00,
            image: 'https://picsum.photos/200',
            description: '2 frutas, 4 acompanhamento, 2 caldas.'
        },
        {
            id: '42',
            name: 'AÇAÍ 500ML',
            price: 16.00,
            image: 'https://picsum.photos/200',
            description: '2 frutas, 5 acompanhamento, 2 caldas.'
        },

    ],

    productsMILKSHAKE: [
        {
            id: '43',
            name: 'MILKSHAKE 300ML',
            price: 7.00,
            image: Promo01,
            description: '1 sabor, 1 calda.'
        },
        {
            id: '44',
            name: 'MILKSHAKE 400ML',
            price: 10.00,
            image: Promo01,
            description: '1 sabor, 1 calda.'
        },
    ],

    productsBEBIDA: [
        {
            id: '22',
            name: 'BEBIDA 01',
            price: 25.99,
            image: Promo01,
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, perspiciatis.'
        },
        {
            id: '23',
            name: 'BEBIDA 02',
            price: 27.99,
            image: Promo01,
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, perspiciatis.'
        },
        {
            id: '24',
            name: 'BEBIDA 03',
            price: 21.99,
            image: Promo01,
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, perspiciatis.'
        },
    ]


};

export default data;
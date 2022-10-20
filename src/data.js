import Promo01 from './Images/Promo/Promo01.png'
// import Promo02 from './Images/Promo/Promo02.png'
// import Promo03 from './Images/Promo/Promo03.png'


const data = {
    products: [
        {
            id: '999',
            name: 'PROMO X-EGG 01',
            price: 25.99,
            image: Promo01,
            description: '1 X-EGG + 1 Batata P + Antarctica'
        },
        {
            id: '888',
            name: 'PROMO X-EGG 02',
            price: 25.99,
            image: Promo01,
            description: '1 X-EGG + 1 Batata P + Antarctica'
        },
        {
            id: '777',
            name: 'PROMO X-EGG 03',
            price: 25.99,
            image: Promo01,
            description: '1 X-EGG + 1 Batata P + Antarctica'
        },
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
            image: Promo01,
            description: 'Pão, carne (130g), queijo, salada c/cebola caramelizada, creme e barbecue.            '
        },
        {
            id: '03',
            name: 'X-EGG',
            price: 12.00,
            image: Promo01,
            description: 'Pão, carne (130g), queijo, ovo, salada c/cebola caramelizada, creme e barbecue.'
        },
        {
            id: '04',
            name: 'X-CHEDDAR',
            price: 13.00,
            image: Promo01,
            description: 'Pão, carne (130g), cheddar, salada c/cebola caramelizada, creme e barbecue.'
        },
        {
            id: '05',
            name: 'X-BACON',
            price: 13.00,
            image: Promo01,
            description: 'Pão, carne (130g), queijo, bacon, salada c/cebola caramelizada, creme e barbecue.'
        },
        {
            id: '06',
            name: 'X-EGG BACON',
            price: 15.00,
            image: Promo01,
            description: 'Pão, carne (130g), queijo, ovo, bacon, salada c/cebola caramelizada, creme e barbecue.'
        },
        {
            id: '07',
            name: 'X-CALABRESA',
            price: 13.00,
            image: Promo01,
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
            image: Promo01,
            description: 'Pão, carne (130g), queijo, calabresa, bacon, salsicha, ovo, presunto, salada c/cebola caramelizada, creme e barbecue.'
        },
        {
            id: '12',
            name: 'X-TUDO',
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
            image: Promo01,
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
            image: Promo01,
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
            image: Promo01,
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




    productsBATATA: [
        {
            id: '19',
            name: 'Tadicional P',
            price: 7.00,
            image: 'https://picsum.photos/200',
            description: 'Batata, sal e parmesão'
        },
        {
            id: '20',
            name: 'Tradicional M',
            price: 10.00,
            image: 'https://picsum.photos/200',
            description: 'Batata, sal e parmesão'
        },
        {
            id: '21',
            name: 'Tradicional G',
            price: 14.00,
            image: 'https://picsum.photos/200',
            description: 'Batata, sal e parmesão'
        },
        {
            id: '22',
            name: 'Calabrasesa',
            price: 16.00,
            image: 'https://picsum.photos/200',
            description: 'Batata, calabresa, cheddar e parmesão.'
        },
        {
            id: '23',
            name: 'Bacon',
            price: 17.00,
            image: 'https://picsum.photos/200',
            description: 'Batata, bacon, cheddar e parmesão.'
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
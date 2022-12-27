let hamburguerJson = [
    {id:0, name:'Simples', img:'imagens/hamburguer.png', price:8.00, description:'Ovo, carne, queijo, presunto, salada e cheddar.', type: 'Hamburguer'},
    {id:1, name:'X-Frango', img:'imagens/hamburguer.png', price:11.00, description:'Frango ao molho branco, carne, salada, queijo e presunto.', type: 'Hamburguer'},
    {id:2, name:'X-Calabresa', img:'imagens/hamburguer.png', price:10.00, description:'Carne, ovo, queijo, presunto, calabresa e salada.', type: 'Hamburguer'},
    {id:3, name:'X-Carne de Sol', img:'imagens/hamburguer.png', price:13.00, description:'Carne de sol acebolada, ovo, presunto, queijo, salada, calabresa e milho.', type: 'Hamburguer'},
    {id:4, name:'2x Carne', img:'imagens/hamburguer.png', price:9.00, description:'2x carne, queijo cheddar, bacon, tomate e cebola.', type: 'Hamburguer'},
    {id:5, name:'X-Modinha', img:'imagens/hamburguer.png', price:12.00, description:'Carne, ovo, catupiry, bacon, calabresa e salada.', type: 'Hamburguer'},
    {id:6, name:'Moda da Casa', img:'imagens/hamburguer.png', price:15.00, description:'2x carne, ovo, queijo, presunto, salada, bacon, calabresa e frango.', type: 'Hamburguer'},
    {id:7, name:'4x Carne', img:'imagens/hamburguer.png', price:14.00, description:'Pão americano, 4 carnes, bacon, queijo prato e salada.', type: 'Hamburguer'},
    {id:8, name:'Senhor da Casa', img:'imagens/hamburguer.png', price:22.00, description:'4x carne, ovo, salada, queijo, cheddar, presunto, bateta palha, carne de sol, e frango.', type: 'Hamburguer'},
    {id:9, name:'X-Bacon', img:'imagens/hamburguer.png', price:10.00, description:'Carne, ovo, queijo, presunto, bacon e salada.', type: 'Hamburguer'}
];


let pizzaJson = [
    {id:0, name:'Calabresa', img:'imagens/pizza.png', price:8.00, description:'Molho, mussarela, calabresa, cebola, orégano e azeitona.', type: 'Pizza'},
    {id:1, name:'Calabresa c/ Catupiry', img:'imagens/pizza.png', price:11.00, description:'Molho, mussarela, calabresa, catupiry, cabola, orégano e azeitona.', type: 'Pizza'},
    {id:2, name:'Frango', img:'imagens/pizza.png', price:10.00, description:'Molho, mussarela, frango, milho, ervilha, e orégano', type: 'Pizza'},
    {id:3, name:'Frango c/ Cheddar', img:'imagens/pizza.png', price:13.00, description:'Carne de sol acebolada, ovo, presunto, queijo, salada, calabresa e milho.', type: 'Pizza'},
    {id:4, name:'Frango c/ Catupiry', img:'imagens/pizza.png', price:9.00, description:'2x carne, queijo cheddar, bacon, tomate e cebola.', type: 'Pizza'},
    {id:5, name:'Marquerita', img:'imagens/pizza.png', price:12.00, description:'Carne, ovo, catupiry, bacon, calabresa e salada.', type: 'Pizza'},
    {id:6, name:'Mista', img:'imagens/pizza.png', price:15.00, description:'2x carne, ovo, queijo, presunto, salada, bacon, calabresa e frango.', type: 'Pizza'},
    {id:7, name:'Napolitano', img:'imagens/pizza.png', price:14.00, description:'Pão americano, 4 carnes, bacon, queijo prato e salada.', type: 'Pizza'},
    {id:8, name:'Portuguesa', img:'imagens/pizza.png', price:22.00, description:'4x carne, ovo, salada, queijo, cheddar, presunto, bateta palha, carne de sol, e frango.', type: 'Pizza'},
    {id:9, name:'4 Queijos', img:'imagens/pizza.png', price:10.00, description:'Carne, ovo, queijo, presunto, bacon e salada.', type: 'Pizza'},
    {id:10, name:'Presunto', img:'imagens/pizza.png', price:10.00, description:'Carne, ovo, queijo, presunto, bacon e salada.', type: 'Pizza'}
];

let pastelJson = [
    {id:0, name:'Mussarela', img:'imagens/pastel.png', price:8.00, description:'Queijo Mussarela.', type: 'Pastel'},
    {id:1, name:'Calabresa', img:'imagens/pastel.png', price:11.00, description:'Queijo mussarela, calabresa e cebola.', type: 'Pastel'},
    {id:2, name:'Queijo coalho', img:'imagens/pastel.png', price:10.00, description:'Queijo coelho', type: 'Pastel'},
    {id:3, name:'Pizza', img:'imagens/pastel.png', price:13.00, description:'Queijo mussarela, presunto, tomate e orégano..', type: 'Pastel'},
    {id:4, name:'Calabresa c/ Requeijão', img:'imagens/pastel.png', price:9.00, description:'2x carne, queijo cheddar, bacon, tomate e cebola.', type: 'Pastel'},
    {id:5, name:'Calabresa c/ Cheddar', img:'imagens/pastel.png', price:12.00, description:'Carne, ovo, catupiry, bacon, calabresa e salada.', type: 'Pastel'},
    {id:6, name:'Português', img:'imagens/pastel.png', price:15.00, description:'2x carne, ovo, queijo, presunto, salada, bacon, calabresa e frango.', type: 'Pastel'},
    {id:7, name:'Frango', img:'imagens/pastel.png', price:14.00, description:'Pão americano, 4 carnes, bacon, queijo prato e salada.', type: 'Pastel'},
    {id:8, name:'Carne de sol', img:'imagens/pastel.png', price:22.00, description:'4x carne, ovo, salada, queijo, cheddar, presunto, bateta palha, carne de sol, e frango.', type: 'Pastel'},
    {id:9, name:'Carne a moda', img:'imagens/pastel.png', price:10.00, description:'Carne, ovo, queijo, presunto, bacon e salada.', type: 'Pastel'},
];

let petiscoJson = [
    {id:0, name:'Batata Fritas', img:'imagens/pastel.png', price:6.00, description:'Opcionais: Cheddar, Catupiry ou Queijo Ralado', type: 'Batata de 6'},
    {id:1, name:'Batata Fritas', img:'imagens/pastel.png', price:8.00, description:'Opcionais: Cheddar, Catupiry ou Queijo Ralado', type: 'Batata de 8'},
    {id:2, name:'Iscas de frango c/ Fritas', img:'imagens/pastel.png', price:10.00, description:' ', type: 'Petisco'},
    {id:3, name:'Filé c/ Fritas', img:'imagens/pastel.png', price:13.00, description:' ', type: 'Petisco'},
    {id:4, name:'Camarão c/ Fritas e salada', img:'imagens/pastel.png', price:9.00, description:' ', type: 'Pastel'},
    {id:5, name:'Calabresa c/ Cheddar', img:'imagens/pastel.png', price:12.00, description:'Carne, ovo, catupiry, bacon, calabresa e salada.', type: 'Pastel'},
    {id:6, name:'Português', img:'imagens/pastel.png', price:15.00, description:'2x carne, ovo, queijo, presunto, salada, bacon, calabresa e frango.', type: 'Pastel'},
    {id:7, name:'Frango', img:'imagens/pastel.png', price:14.00, description:'Pão americano, 4 carnes, bacon, queijo prato e salada.', type: 'Pastel'},
    {id:8, name:'Carne de sol', img:'imagens/pastel.png', price:22.00, description:'4x carne, ovo, salada, queijo, cheddar, presunto, bateta palha, carne de sol, e frango.', type: 'Pastel'},
    {id:9, name:'Carne a moda', img:'imagens/pastel.png', price:10.00, description:'Carne, ovo, queijo, presunto, bacon e salada.', type: 'Pastel'},
];
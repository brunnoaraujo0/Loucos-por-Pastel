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
    {id:0, name:'Batata Fritas de 6', img:'imagens/batataFritas.png', price:6.00, description:'Opcionais: Cheddar, Catupiry ou Queijo Ralado', type: 'Petisco'},
    {id:1, name:'Batata Fritas de 8', img:'imagens/batataFritas.png', price:8.00, description:'Opcionais: Cheddar, Catupiry ou Queijo Ralado', type: 'Petisco'},
    {id:2, name:'Iscas de frango c/ Fritas', img:'imagens/frangoFritas.png', price:22.00, description:' ', type: 'Petisco'},
    {id:3, name:'Filé c/ Fritas', img:'imagens/fileFritas.png', price:25.00, description:' ', type: 'Petisco'},
    {id:4, name:'Camarão c/ Fritas e salada', img:'imagens/camaraoFritas.png', price:25.00, description:' ', type: 'Petisco'},
];

let bebidasJson = [
    {id:0, name:'Coca Cola 350ml', img:'imagens/cocaCola350.png', price:4.50, description:' ', type: 'Refrigerante'},
    {id:1, name:'Guaraná 350ml', img:'imagens/guarana350.png', price:4.00, description:' ', type: 'Refrigerante'},
    {id:2, name:'Fanta Uva 350ml', img:'imagens/fantaUva350.png', price:4.00, description:' ', type: 'Refrigerante'},
    {id:3, name:'Coca Cola 1L', img:'imagens/cocaCola1l.png', price:7.00, description:' ', type: 'Refrigerante'},
    {id:4, name:'Guaraná 1L', img:'imagens/guarana1l.png', price:6.00, description:' ', type: 'Refrigerante'},
    {id:5, name:'Coca Cola 2L', img:'imagens/cocaCola2l.jpg', price:13.00, description:' ', type: 'Refrigerante'},
    {id:6, name:'Guaraná 2L', img:'imagens/guaran2l.png', price:12.00, description:' ', type: 'Refrigerante'},
    {id:7, name:'Suco de Laranja 300ml', img:'imagens/sucoLaranja.png', price:4.00, description:' ', type: 'Suco'},
    {id:8, name:'Suco de Acerola 300ml', img:'imagens/sucoAcerola.png', price:4.00, description:' ', type: 'SUco'},
    {id:9, name:'Sukita 1l', img:'imagens/sukita1l.png', price:6.00, description:' ', type: 'Refrigerante'},
    {id:10, name:'Suco de laranja 1L', img:'imagens/sucoLaranja.png', price:10.00, description:' ', type: 'Suco'}
];


let hotdogJson = [
    {id:0, name:'Hot dog', img:'imagens/cachorroQuente.png', price:4.00, description:'Carne ou frango, salsicha, queijo ralado, milho, ervilha, batata palha, ovo de codorna, cheddar ou requeijão', type: 'Cachorro quente'},
    {id:1, name:'Big Hot Dog', img:'imagens/cachorroQuente.png', price:9.00, description:'Salsicha, 3x mais carne, 3x mais frango, 2 ovos de codorna, bacon, calabresa, requeijão, cheddar, batata, milho, ervilha e queijo ralado', type: 'Cachorro quente'},
    {id:2, name:'Hot Nordestino', img:'imagens/cachorroQuente.png', price:8.00, description:'Salsicha, carne de sol, vinagrete, batata palha, queijo coalho maçaricano', type: 'Cachorro quente'},
];


let combosJson = [
    {id:0, name:'Combo Familia', img:'imagens/pizza.png', price:30.00, description:'15 Mini Pasteis + 2 Hot dog + Batata fritas + Guaraná 1L', type: 'Combo'},
    {id:1, name:'Mega Combo', img:'imagens/pizza.png', price:35.00, description:'Batata fritas + Calabresa + Frango Empanado', type: 'Combo'},
    {id:2, name:'Mistão', img:'imagens/pizza.png', price:40.00, description:'Batata Fritas + Calabresa + Frango empanado + Carne de sol', type: 'Combo'},
    {id:3, name:'Combo Casal', img:'imagens/pizza.png', price:30.00, description:'2 Bauru simples + Batata c/ cheddar + 10 mini pasteis', type: 'Combo'},
    {id:4, name:'Combo Batata', img:'imagens/pizza.png', price:10.00, description:'Batata + bacon + cheddar', type: 'Combo'},
    {id:5, name:'Combo Batata 2', img:'imagens/pizza.png', price:10.00, description:'Batata + Calabresa + cheddar', type: 'Combo'},
    {id:6, name:'Combo Pastel 1', img:'imagens/pizza.png', price:8.00, description:'10 mini Pastéis + 1 refrigerante ', type: 'Combo'},
    {id:7, name:'Combo Pastel 2', img:'imagens/pizza.png', price:16.00, description:'20 mini Pastéis + 1 Coca lata', type: 'Combo'},
    {id:8, name:'Combo Pastel 3', img:'imagens/pizza.png', price:24.00, description:'30 mini Pastéis + 1 refrigerante 1L', type: 'Combo'},
    {id:9, name:'Combo Pastel 4', img:'imagens/pizza.png', price:32.00, description:'40 mini Pastéis 2 coca lata 350ml', type: 'Combo'},
    {id:10, name:'Combo Pastel 5', img:'imagens/pizza.png', price:46.00, description:'60 mini Pastéis + guaraná 1L + Coca Lata', type: 'Combo'}
];
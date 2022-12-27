let produtosCarrinho = []; //Array que guarda os pedidos

const produtoModal = document.querySelector('.produto-modal');
const iconeCarrinho = document.querySelector('#header-carrinho');
const modalCarrinho = document.querySelector('.modal-carrinho');
const carrinhoQuantidade = document.querySelector('#header-carrinho button span');
const carrinhoProdutos = document.querySelector('.area-carrinho-pedidos');
const todosButaoAdd = document.querySelectorAll('#add');
const setaFecharCarrinho = document.querySelector('.carrinho-seta button');
const botaoAddMaisItens = document.querySelector('.area-adicionar-mais-itens button');
const modalTamanho = document.querySelector('.produto-pizza-tamanho');

let keyCarrinho = 0; //variavel que guarda o index da lista do carrinho
let keyEscolhido;  //variavel que guarda qual item voce clicou para comprar
let itemEscolhido; //variavel que guarda o tipo de lanche escolhido, pizza, hamburguer etc...

let marginHamburguer = 0; //Margin para movimentar o carrosel de hamburguer
let marginpizza = 0; //Margin para movimentar o carrosel de pizza
let marginPastel = 0; //Margin para movimentar o carrosel de pizza



// CARROSEL HAMBURGUER ///////////////////////////////////////////////////////////////////////////////////////////

document.querySelector('.hamburguer-setaLeft-icone').addEventListener('click', ()=> {
   
    if(window.innerWidth >460){
    marginHamburguer = marginHamburguer + 340;
    if(marginHamburguer > 0){
        marginHamburguer = 0;
    }
    
    document.querySelector('.hamburguer-list').style.marginLeft = marginHamburguer  + 'px';}
    else {
        marginHamburguer = marginHamburguer + (window.innerWidth - 60);
        if(marginHamburguer > 0){
            marginHamburguer = 0;
        }
        document.querySelector('.hamburguer-list').style.marginLeft = marginHamburguer + 'px'; ;
    }
})

document.querySelector('.hamburguer-setaRigth-icone').addEventListener('click', () => {
    if(window.innerWidth > 460){
    let x = marginHamburguer - 340;
    if((window.innerWidth - 4080) > x){
        x = 0;
    }
    marginHamburguer = x;
    document.querySelector('.hamburguer-list').style.marginLeft = marginHamburguer + 'px';}
    else{
        marginHamburguer = marginHamburguer - (window.innerWidth - 60)  ;
        let x = -(window.innerWidth * 10) - 10;
        if(marginHamburguer < x){
            marginHamburguer = 0;
        }
        document.querySelector('.hamburguer-list').style.marginLeft = marginHamburguer + 'px';
    }
})





// CARROSEL PIZZA ///////////////////////////////////////////////////////////////////////////////////////////


document.querySelector('.pizza-setaLeft-icone').addEventListener('click', ()=> {
   
    if(window.innerWidth >460){
    marginpizza = marginpizza + 340;
    if(marginpizza > 0){
        marginpizza = 0;
    }
    
    document.querySelector('.pizza-list').style.marginLeft = marginpizza  + 'px';}
    else {
        marginpizza = marginpizza + (window.innerWidth - 60);
        if(marginpizza > 0){
            marginpizza = 0;
        }
        document.querySelector('.pizza-list').style.marginLeft = marginpizza + 'px'; ;
    }
})

document.querySelector('.pizza-setaRigth-icone').addEventListener('click', () => {
    if(window.innerWidth > 460){
    let x = marginpizza - 340;
    if((window.innerWidth - 4420) > x){
        x = 0;
    }
    marginpizza = x;
    document.querySelector('.pizza-list').style.marginLeft = marginpizza + 'px';}
    else{
        marginpizza = marginpizza - (window.innerWidth - 60)  ;
        let x = -(window.innerWidth * 11) - 10;
        if(marginpizza < x){
            marginpizza = 0;
        }
        document.querySelector('.pizza-list').style.marginLeft = marginpizza + 'px';
    }
})



// CARROSEL PASTEL ///////////////////////////////////////////////////////////////////////////////////////////

document.querySelector('.pastel-setaLeft-icone').addEventListener('click', ()=> {
   
    if(window.innerWidth >460){
    marginPastel = marginPastel + 340;
    if(marginPastel > 0){
        marginPastel = 0;
    }
    
    document.querySelector('.pastel-list').style.marginLeft = marginPastel  + 'px';}
    else {
        marginPastel = marginPastel + (window.innerWidth - 60);
        if(marginPastel > 0){
            marginPastel = 0;
        }
        document.querySelector('.pastel-list').style.marginLeft = marginPastel + 'px'; ;
    }
})

document.querySelector('.pastel-setaRigth-icone').addEventListener('click', () => {
    if(window.innerWidth > 460){
    let x = marginPastel - 340;
    if((window.innerWidth - 4080) > x){
        x = 0;
    }
    marginPastel = x;
    document.querySelector('.pastel-list').style.marginLeft = marginPastel + 'px';}
    else{
        marginPastel = marginPastel - (window.innerWidth - 60)  ;
        let x = -(window.innerWidth * 10) - 10;
        if(marginPastel < x){
            marginPastel = 0;
        }
        document.querySelector('.pastel-list').style.marginLeft = marginPastel + 'px';
    }
})




// MAPEANDO LISTA DE HAMBURGUER ///////////////////////////////////////////////////////////////////////////////////////////

hamburguerJson.map((item, index) => {
    const hamburguerList = document.querySelector('.hamburguer-list');
    const hamburguerDiv = document.createElement("div"); 
    hamburguerDiv.classList.add("hamburguer-item"); 
    hamburguerList.appendChild(hamburguerDiv); 
    
    const hamburguerDiv1 = document.createElement("div"); 
    hamburguerDiv1.classList.add("hamburguer-item-area1");
    hamburguerDiv.appendChild(hamburguerDiv1);
    const hamburguerImg = document.createElement("img");
    hamburguerImg.src = item.img;
    hamburguerDiv1.appendChild(hamburguerImg);
   
    const hamburguerDiv2 = document.createElement("div"); 
    hamburguerDiv2.classList.add("hamburguer-item-area2");
    hamburguerDiv.appendChild(hamburguerDiv2);
    const hamburguerTitle = document.createElement("h2"); 
    const hamburguerDescriptopn = document.createElement("p");
    hamburguerTitle.innerText = item.name;
    hamburguerDescriptopn.innerHTML = item.description;
    hamburguerDiv2.appendChild(hamburguerTitle);
    hamburguerDiv2.appendChild(hamburguerDescriptopn);

    const hamburguerDiv3 = document.createElement("div"); 
    hamburguerDiv3.classList.add("hamburguer-item-area3");
    hamburguerDiv.appendChild(hamburguerDiv3);
    const hamburguerPrice = document.createElement("h2"); 
    const hamburguerButton = document.createElement("div");
    hamburguerPrice.innerText = 'R$' + item.price.toFixed(2);
    hamburguerButton.classList.add("hamburguer-plus");
    hamburguerButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>'

    hamburguerDiv3.appendChild(hamburguerPrice);
    hamburguerDiv3.appendChild(hamburguerButton);
    hamburguerButton.addEventListener('click', (e) => {
        keyEscolhido = index;
        itemEscolhido = 0;
        
        e.preventDefault();
        modalTamanho.style.display = 'none';
        produtoModal.classList.add("show");

        let numeroQuantidade = 1;
        const modalTitle = document.querySelector(".produto-informacoes-area1 h2");
        const modalDescription = document.querySelector(".produto-informacoes-area1 p");
        const modalPrice = document.querySelector(".produto-preco h2");
        const buttonCancel = document.querySelector('.cancela');
        const buttonLess = document.querySelector('.quantidade-less');
        const buttonPlus = document.querySelector('.quantidade-plus');
        const buttonAdd = document.querySelector('#add');
        const quantidade = document.querySelector('.produto-quantidade .quantidade');
        const modalImg = document.querySelector('.produto-img img');
        modalTitle.innerHTML = hamburguerJson[index].name;
        modalDescription.innerHTML = hamburguerJson[index].description;
        modalPrice.innerHTML = 'R$' + hamburguerJson[index].price.toFixed(2);
        modalImg.src = hamburguerJson[index].img;

        quantidade.innerHTML = numeroQuantidade;

        buttonLess.addEventListener('click', ()=> {
            numeroQuantidade = numeroQuantidade - 1;
            if(numeroQuantidade <= 0){
                numeroQuantidade = 1
            }
            quantidade.innerHTML = numeroQuantidade;
        })

        buttonPlus.addEventListener('click', () => {
            numeroQuantidade = numeroQuantidade +1;
            quantidade.innerHTML = numeroQuantidade;
        })


        buttonCancel.addEventListener('click', () => {
            produtoModal.classList.remove("show");
        })
        
  
    })

    hamburguerList.appendChild(hamburguerDiv); 


})



// MAPEANDO LISTA DE PIZZAS ///////////////////////////////////////////////////////////////////////////////////////////

pizzaJson.map((item, index) => {
    const pizzaList = document.querySelector('.pizza-list');
    const pizzaDiv = document.createElement("div"); 
    pizzaDiv.classList.add("pizza-item");
    pizzaList.appendChild(pizzaDiv);
    
    const pizzaDiv1 = document.createElement("div"); 
    pizzaDiv1.classList.add("pizza-item-area1");
    pizzaDiv.appendChild(pizzaDiv1);
    const pizzaImg = document.createElement("img");
    pizzaImg.src = item.img;
    pizzaDiv1.appendChild(pizzaImg);
   
    const pizzaDiv2 = document.createElement("div"); 
    pizzaDiv2.classList.add("pizza-item-area2");
    pizzaDiv.appendChild(pizzaDiv2);
    const pizzaTitle = document.createElement("h2"); 
    const pizzaDescriptopn = document.createElement("p");
    pizzaTitle.innerText = item.name;
    pizzaDescriptopn.innerHTML = item.description;
    pizzaDiv2.appendChild(pizzaTitle);
    pizzaDiv2.appendChild(pizzaDescriptopn);

    const pizzaDiv3 = document.createElement("div"); 
    pizzaDiv3.classList.add("pizza-item-area3");
    pizzaDiv.appendChild(pizzaDiv3);
    const pizzaPrice = document.createElement("h2"); 
    const pizzaButton = document.createElement("div");
    pizzaButton.classList.add("pizza-plus");
    pizzaButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>'

    pizzaDiv3.appendChild(pizzaPrice);
    pizzaDiv3.appendChild(pizzaButton);
    pizzaButton.addEventListener('click', (e) => {
        keyEscolhido = index;
        itemEscolhido = 1;
         
        modalTamanho.style.display = 'flex';
        e.preventDefault();
        
        produtoModal.classList.add("show");

        let numeroQuantidade = 1;
        const modalTitle = document.querySelector(".produto-informacoes-area1 h2");
        const modalDescription = document.querySelector(".produto-informacoes-area1 p");
        const modalPrice = document.querySelector(".produto-preco h2");
        const buttonCancel = document.querySelector('.cancela');
        const buttonLess = document.querySelector('.quantidade-less');
        const buttonPlus = document.querySelector('.quantidade-plus');
        const modalImg = document.querySelector('.produto-img img');
        const buttonAdd = document.querySelector('#add');
        const quantidade = document.querySelector('.produto-quantidade .quantidade');
        
        modalTitle.innerHTML = pizzaJson[index].name;
        modalDescription.innerHTML = pizzaJson[index].description;
        modalPrice.innerHTML = 'R$' + pizzaJson[index].price.toFixed(2);
        modalImg.src = pizzaJson[index].img;
        quantidade.innerHTML = numeroQuantidade;

        buttonLess.addEventListener('click', ()=> { //Botão de tirar 1 item do modal 1
            numeroQuantidade = numeroQuantidade - 1;
            if(numeroQuantidade <= 0){
                numeroQuantidade = 1
            }
            quantidade.innerHTML = numeroQuantidade;
        })

        buttonPlus.addEventListener('click', () => { //Botão de adicionar 1 item do modal 1
            numeroQuantidade = numeroQuantidade +1;
            quantidade.innerHTML = numeroQuantidade;
        })


        buttonCancel.addEventListener('click', () => { //Botão cancelar do modal 1
            produtoModal.classList.remove("show");
        })
        
  
    })

    pizzaList.appendChild(pizzaDiv); 


})


// MAPEANDO LISTA DE PIZZAS ///////////////////////////////////////////////////////////////////////////////////////////

pastelJson.map((item, index) => {
    const pastelList = document.querySelector('.pastel-list');
    const pastelDiv = document.createElement("div"); 
    pastelDiv.classList.add("pastel-item"); 
    pastelList.appendChild(pastelDiv); 
    
    const pastelDiv1 = document.createElement("div"); 
    pastelDiv1.classList.add("pastel-item-area1");
    pastelDiv.appendChild(pastelDiv1);
    const pastelImg = document.createElement("img");
    pastelImg.src = item.img;
    pastelDiv1.appendChild(pastelImg);
   
    const pastelDiv2 = document.createElement("div"); 
    pastelDiv2.classList.add("pastel-item-area2");
    pastelDiv.appendChild(pastelDiv2);
    const pastelTitle = document.createElement("h2"); 
    const pastelDescriptopn = document.createElement("p");
    pastelTitle.innerText = item.name;
    pastelDescriptopn.innerHTML = item.description;
    pastelDiv2.appendChild(pastelTitle);
    pastelDiv2.appendChild(pastelDescriptopn);

    const pastelDiv3 = document.createElement("div"); 
    pastelDiv3.classList.add("pastel-item-area3");
    pastelDiv.appendChild(pastelDiv3);
    const pastelPrice = document.createElement("h2"); 
    const pastelButton = document.createElement("div");
    pastelPrice.innerText = 'R$' + item.price.toFixed(2);
    pastelButton.classList.add("pastel-plus");
    pastelButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>'

    pastelDiv3.appendChild(pastelPrice);
    pastelDiv3.appendChild(pastelButton);
    pastelButton.addEventListener('click', (e) => {
        keyEscolhido = index;
        itemEscolhido = 2;
        
        e.preventDefault();
        modalTamanho.style.display = 'none';
        produtoModal.classList.add("show");

        let numeroQuantidade = 1;
        const modalTitle = document.querySelector(".produto-informacoes-area1 h2");
        const modalDescription = document.querySelector(".produto-informacoes-area1 p");
        const modalPrice = document.querySelector(".produto-preco h2");
        const buttonCancel = document.querySelector('.cancela');
        const buttonLess = document.querySelector('.quantidade-less');
        const buttonPlus = document.querySelector('.quantidade-plus');
        const buttonAdd = document.querySelector('#add');
        const quantidade = document.querySelector('.produto-quantidade .quantidade');
        const modalImg = document.querySelector('.produto-img img');
        modalTitle.innerHTML = pastelJson[index].name;
        modalDescription.innerHTML = pastelJson[index].description;
        modalPrice.innerHTML = 'R$' + pastelJson[index].price.toFixed(2);
        modalImg.src = pastelJson[index].img;

        quantidade.innerHTML = numeroQuantidade;

        buttonLess.addEventListener('click', ()=> {
            numeroQuantidade = numeroQuantidade - 1;
            if(numeroQuantidade <= 0){
                numeroQuantidade = 1
            }
            quantidade.innerHTML = numeroQuantidade;
        })

        buttonPlus.addEventListener('click', () => {
            numeroQuantidade = numeroQuantidade +1;
            quantidade.innerHTML = numeroQuantidade;
        })


        buttonCancel.addEventListener('click', () => {
            produtoModal.classList.remove("show");
        })
        
  
    })

    pastelList.appendChild(pastelDiv); 


})



//EVENTOS ///////////////////////////////////////////////////////////////////////////////////////////////////

iconeCarrinho.addEventListener('click', () => { //Botao do carrinho para mostrar os pedidos
    mostrarPedidos();
})



todosButaoAdd.forEach((item) => { //Botão adicionar o item no carrinho
    item.addEventListener('click', () => {
       addCarrinho(keyEscolhido, itemEscolhido);
       produtoModal.classList.remove("show");
       mostrarPedidos();
    })
})


setaFecharCarrinho.addEventListener('click', () => { //Botao da seta fechar o carrinho
    document.querySelector('.carrinho').style.animationName = 'slideout';
    setTimeout(() => {
        modalCarrinho.classList.remove("show");
    }, 500); 
})



botaoAddMaisItens.addEventListener('click', () =>{ //Botão adicionar mais itens
    document.querySelector('.carrinho').style.animationName = 'slideout';
    setTimeout(() => {
        modalCarrinho.classList.remove("show");
    }, 500); 
    
})











//FUNCOES ////////////////////////////////////////////////////////////////////////////////////////



function addCarrinho(keyEscolhido, itemEscolhido){
    const compra = new Object();
    compra.quantidade = document.querySelector('.produto-quantidade .quantidade').innerText;
    if(itemEscolhido == 0){
        compra.produto = hamburguerJson[keyEscolhido];
        produtosCarrinho[keyCarrinho] = compra;
    }
    else if(itemEscolhido == 1){
        compra.produto = pizzaJson[keyEscolhido];
        produtosCarrinho[keyCarrinho] = compra;
    }
    else if(itemEscolhido == 2){
        compra.produto = pastelJson[keyEscolhido];
        produtosCarrinho[keyCarrinho] = compra;
    }
    keyCarrinho = keyCarrinho + 1;
    
    produtoModal.classList.remove("show");
    contagemCarrinho();  
}


function contagemCarrinho(){ //funcao que conta quantos itens tem no carrinho
    let qt = 0;
    produtosCarrinho.forEach((item) => {
        qt = qt + parseInt(item.quantidade);
         
    })
    carrinhoQuantidade.innerText = qt;  
}



function mostrarPedidos(){
    modalCarrinho.classList.add("show");
    document.querySelector('.carrinho').style.animationName = 'slidein';
    carrinhoProdutos.innerHTML = "";
    let totalItens = 0;


    produtosCarrinho.forEach((item, index) => {
        const carrinhoItem = document.createElement("div");
        const carrinhodiv1 = document.createElement("div");
        const carrinhoqt = document.createElement("h3");
        const carrinhoNome = document.createElement("h2");
        const carrinhodiv2 = document.createElement("div");
        const carrinhoPrice = document.createElement("h4");
        const valorReal =  item.quantidade * item.produto.price.toFixed(2);
        const carrinhoButton = document.createElement("button");
        const carrinhoSpan = document.createElement("span");

        carrinhoItem.classList.add("carrinho-item");
        carrinhoqt.innerText = item.quantidade + "x";
        carrinhoNome.innerText = item.produto.type + "\n" + item.produto.name;
        carrinhoPrice.innerText = "R$" + valorReal.toFixed(2);
        carrinhoButton.classList.add("butao-delete");
        carrinhoSpan.classList.add("material-symbols-outlined");
        carrinhoSpan.innerText = "delete_forever";
        totalItens = totalItens + valorReal;
        document.querySelector('.carrinho .total-itens h2').innerText = "R$" + totalItens.toFixed(2);
        carrinhoButton.appendChild(carrinhoSpan);
        carrinhodiv2.appendChild(carrinhoPrice);
        carrinhodiv2.appendChild(carrinhoButton);
        carrinhodiv1.appendChild(carrinhoqt);
        carrinhodiv1.appendChild(carrinhoNome);
        carrinhoItem.appendChild(carrinhodiv1);
        carrinhoItem.appendChild(carrinhodiv2);

        carrinhoButton.addEventListener('click', () => {
            item.quantidade = item.quantidade -1;
            produtosCarrinho.splice(index, 1);
            mostrarPedidos();
            contagemCarrinho();

        })

        carrinhoProdutos.appendChild(carrinhoItem); 
    })
}

const menuItens = document.querySelectorAll('#header-menu a[href^="#"]'); //pega todos a

menuItens.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick); //coloca um evento de click para cada a
})

const menuMobileItens = document.querySelectorAll('#header-menu-mobile a[href^="#"]'); //pega todos a

menuMobileItens.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick); //coloca um evento de click para cada a
})


function scrollToIdOnClick(event) { //esse event e passado cada a cada vez que e clicado, addeventlistener
    event.preventDefault();
    const element = event.target; // o event vem com varios atributos, o target pega so a tag "a"
    const id = element.getAttribute('href'); //pega so atributo href dentro do element
    const to = document.querySelector(id).offsetTop; //esse offsettop pega o top da section

    window.scroll({
        top: to - 160,
        behavior: "smooth",
    })
}
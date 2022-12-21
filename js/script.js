let produtosCarrinho = [];

const produtoModal = document.querySelector('.produto-modal');
const iconeCarrinho = document.querySelector('#header-carrinho');
const modalCarrinho = document.querySelector('.modal-carrinho');
const carrinhoQuantidade = document.querySelector('#header-carrinho button span');
const carrinhoProdutos = document.querySelector('.area-carrinho-pedidos');

let keyCarrinho = 0;
let keyEscolhido;
let itemEscolhido;

let marginHamburguer = 0;
let marginpizza = 0;

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


// ADICIONANDO HAMBURGUER ///////////////////////////////////////////////////////////////////////////////////////////

hamburguerJson.map((item, index) => {
    const hamburguerList = document.querySelector('.hamburguer-list');
    const hamburguerDiv = document.createElement("div"); //cria um h3
    hamburguerDiv.classList.add("hamburguer-item"); //adiciona uma class finish-todo ao botao
    hamburguerList.appendChild(hamburguerDiv); // adiciona o botao na div todo
    
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



// ADICIONANDO PIZZAS ///////////////////////////////////////////////////////////////////////////////////////////

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
    pizzaPrice.innerText = 'R$' + item.price.toFixed(2);
    pizzaButton.classList.add("pizza-plus");
    pizzaButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>'

    pizzaDiv3.appendChild(pizzaPrice);
    pizzaDiv3.appendChild(pizzaButton);
    pizzaButton.addEventListener('click', (e) => {
        keyEscolhido = index;
        itemEscolhido = 1;
         
        
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

    pizzaList.appendChild(pizzaDiv); 


})


//EVENTOS ///////////////////////////////////////////////////////////////////////////////////////////////////

iconeCarrinho.addEventListener('click', () => {
    modalCarrinho.classList.add("show");
    document.querySelector('.carrinho').style.animationName = 'slidein';
    carrinhoProdutos.innerHTML = "";
    let totalItens = 0;
    produtosCarrinho.forEach((item, index) => {
        const carrinhoItem = document.createElement("div");
        carrinhoItem.classList.add("carrinho-item");
        const carrinhodiv1 = document.createElement("div");
        const carrinhoqt = document.createElement("h3");
        carrinhoqt.innerText = item.quantidade + "x";
        const carrinhoNome = document.createElement("h2");
        carrinhoNome.innerText = item.produto.type + "\n" + item.produto.name;
        const carrinhodiv2 = document.createElement("div");
        const carrinhoPrice = document.createElement("h4");
        const valorReal =  item.quantidade * item.produto.price.toFixed(2)
        carrinhoPrice.innerText = "R$" + valorReal.toFixed(2);
        const carrinhoButton = document.createElement("button");
        carrinhoButton.classList.add("butao-delete");
        const carrinhoSpan = document.createElement("span");
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
            carrinhoqt.innerText = item.quantidade + "x";
            if(item.quantidade <= 0){
                produtosCarrinho.splice(index, 1);
            }
            
        })


        carrinhoProdutos.appendChild(carrinhoItem); // adiciona o botao na div todo
    })
})

document.querySelectorAll('#add').forEach((item) => {
    item.addEventListener('click', () => {
       addCarrinho(keyEscolhido, itemEscolhido);
       produtoModal.classList.remove("show");
    })
})





document.querySelector('.carrinho-seta button').addEventListener('click', () => {
    document.querySelector('.carrinho').style.animationName = 'slideout';
    setTimeout(() => {
        modalCarrinho.classList.remove("show");
    }, 500); 
})

document.querySelector('.area-adicionar-mais-itens button').addEventListener('click', () =>{
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
    keyCarrinho = keyCarrinho + 1;
    
    console.log(produtosCarrinho);
    produtoModal.classList.remove("show");
    contagemCarrinho();
}


function contagemCarrinho(){
    let qt = 0;
    produtosCarrinho.forEach((item) => {
        qt = qt + parseInt(item.quantidade);
         
    })
    carrinhoQuantidade.innerText = qt;
    
}
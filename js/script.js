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
let marginPetisco = 0; //Margin para movimentar o carrosel de pizza
let marginHotdog = 0; //Margin para movimentar o carrosel de pizza
let marginBebidas = 0; //Margin para movimentar o carrosel de pizza
let marginCombos = 0; //Margin para movimentar o carrosel de pizza



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
        let x = -(window.innerWidth * 8) - 10;
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
        let x = -(window.innerWidth * 9) - 10;
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
        let x = -(window.innerWidth * 8) - 10;
        if(marginPastel < x){
            marginPastel = 0;
        }
        document.querySelector('.pastel-list').style.marginLeft = marginPastel + 'px';
    }
})



// CARROSEL PETISCO ///////////////////////////////////////////////////////////////////////////////////////////

document.querySelector('.petisco-setaLeft-icone').addEventListener('click', ()=> {
   
    if(window.innerWidth >460){
    marginPetisco = marginPetisco + 340;
    if(marginPetisco > 0){
        marginPetisco = 0;
    }
    
    document.querySelector('.petisco-list').style.marginLeft = marginPetisco  + 'px';}
    else {
        marginPetisco = marginPetisco + (window.innerWidth - 60);
        if(marginPetisco > 0){
            marginPetisco = 0;
        }
        document.querySelector('.petisco-list').style.marginLeft = marginPetisco + 'px'; ;
    }
})

document.querySelector('.petisco-setaRigth-icone').addEventListener('click', () => {
    if(window.innerWidth > 460){
    let x = marginPetisco - 340;
    if((window.innerWidth - 2280) > x){
        x = 0;
    }
    marginPetisco = x;
    document.querySelector('.petisco-list').style.marginLeft = marginPetisco + 'px';}
    else{
        marginPetisco = marginPetisco - (window.innerWidth - 60)  ;
        let x = -(window.innerWidth * 4) - 10;
        if(marginPetisco < x){
            marginPetisco = 0;
        }
        document.querySelector('.petisco-list').style.marginLeft = marginPetisco + 'px';
    }
})


// CARROSEL HOTDOG ///////////////////////////////////////////////////////////////////////////////////////////

document.querySelector('.hotdog-setaLeft-icone').addEventListener('click', ()=> {
   
    if(window.innerWidth >460){
    marginHotdog = marginHotdog + 340;
    if(marginHotdog > 0){
        marginHotdog = 0;
    }
    
    document.querySelector('.hotdog-list').style.marginLeft = marginHotdog  + 'px';}
    else {
        marginHotdog = marginHotdog + (window.innerWidth - 60);
        if(marginHotdog > 0){
            marginHotdog = 0;
        }
        document.querySelector('.hotdog-list').style.marginLeft = marginHotdog + 'px'; ;
    }
})

document.querySelector('.hotdog-setaRigth-icone').addEventListener('click', () => {
    if(window.innerWidth > 460){
    let x = marginHotdog - 340;
    if((window.innerWidth - 1070) > x){
        x = 0;
    }
    marginHotdog = x;
    document.querySelector('.hotdog-list').style.marginLeft = marginHotdog + 'px';}
    else{
        marginHotdog = marginHotdog - (window.innerWidth - 60)  ;
        let x = -(window.innerWidth * 2) - 10;
        if(marginHotdog < x){
            marginHotdog = 0;
        }
        document.querySelector('.hotdog-list').style.marginLeft = marginHotdog + 'px';
    }
})



// CARROSEL BEBIDAS ///////////////////////////////////////////////////////////////////////////////////////////


document.querySelector('.bebidas-setaLeft-icone').addEventListener('click', ()=> {
   
    if(window.innerWidth >460){
    marginBebidas = marginBebidas + 340;
    if(marginBebidas > 0){
        marginBebidas = 0;
    }
    
    document.querySelector('.bebidas-list').style.marginLeft = marginBebidas  + 'px';}
    else {
        marginBebidas = marginBebidas + (window.innerWidth - 60);
        if(marginBebidas > 0){
            marginBebidas = 0;
        }
        document.querySelector('.bebidas-list').style.marginLeft = marginBebidas + 'px'; ;
    }
})

document.querySelector('.bebidas-setaRigth-icone').addEventListener('click', () => {
    if(window.innerWidth > 460){
    let x = marginBebidas - 340;
    if((window.innerWidth - 4420) > x){
        x = 0;
    }
    marginBebidas = x;
    document.querySelector('.bebidas-list').style.marginLeft = marginBebidas + 'px';}
    else{
        marginBebidas = marginBebidas - (window.innerWidth - 60)  ;
        let x = -(window.innerWidth * 9) - 10;
        if(marginBebidas < x){
            marginBebidas = 0;
        }
        document.querySelector('.bebidas-list').style.marginLeft = marginBebidas + 'px';
    }
})

// CARROSEL COMBOS ///////////////////////////////////////////////////////////////////////////////////////////


document.querySelector('.combos-setaLeft-icone').addEventListener('click', ()=> {
   
    if(window.innerWidth >460){
    marginCombos = marginCombos + 340;
    if(marginCombos > 0){
        marginCombos = 0;
    }
    
    document.querySelector('.combos-list').style.marginLeft = marginCombos  + 'px';}
    else {
        marginCombos = marginCombos + (window.innerWidth - 60);
        if(marginCombos > 0){
            marginCombos = 0;
        }
        document.querySelector('.combos-list').style.marginLeft = marginCombos + 'px'; ;
    }
})

document.querySelector('.combos-setaRigth-icone').addEventListener('click', () => {
    if(window.innerWidth > 460){
    let x = marginCombos - 340;
    if((window.innerWidth - 4420) > x){
        x = 0;
    }
    marginCombos = x;
    document.querySelector('.combos-list').style.marginLeft = marginCombos + 'px';}
    else{
        marginCombos = marginCombos - (window.innerWidth - 60)  ;
        let x = -(window.innerWidth * 9) - 10;
        if(marginCombos < x){
            marginCombos = 0;
        }
        document.querySelector('.combos-list').style.marginLeft = marginCombos + 'px';
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
    hamburguerButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path d="M13.299 3.74c-.207-.206-.299-.461-.299-.711 0-.524.407-1.029 1.02-1.029.262 0 .522.1.721.298l3.783 3.783c-.771.117-1.5.363-2.158.726l-3.067-3.067zm3.92 14.84l-.571 1.42h-9.296l-3.597-8.961-.016-.039h9.441c.171-.721.459-1.395.848-2h-14.028v2h.643c.535 0 1.021.304 1.256.784l4.101 10.216h12l1.21-3.015c-.698-.03-1.367-.171-1.991-.405zm-6.518-14.84c.207-.206.299-.461.299-.711 0-.524-.407-1.029-1.02-1.029-.261 0-.522.1-.72.298l-4.701 4.702h2.883l3.259-3.26zm8.799 4.26c-2.484 0-4.5 2.015-4.5 4.5s2.016 4.5 4.5 4.5c2.482 0 4.5-2.015 4.5-4.5s-2.018-4.5-4.5-4.5zm2.5 5h-2v2h-1v-2h-2v-1h2v-2h1v2h2v1z"/></svg>'

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
    pizzaButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path d="M13.299 3.74c-.207-.206-.299-.461-.299-.711 0-.524.407-1.029 1.02-1.029.262 0 .522.1.721.298l3.783 3.783c-.771.117-1.5.363-2.158.726l-3.067-3.067zm3.92 14.84l-.571 1.42h-9.296l-3.597-8.961-.016-.039h9.441c.171-.721.459-1.395.848-2h-14.028v2h.643c.535 0 1.021.304 1.256.784l4.101 10.216h12l1.21-3.015c-.698-.03-1.367-.171-1.991-.405zm-6.518-14.84c.207-.206.299-.461.299-.711 0-.524-.407-1.029-1.02-1.029-.261 0-.522.1-.72.298l-4.701 4.702h2.883l3.259-3.26zm8.799 4.26c-2.484 0-4.5 2.015-4.5 4.5s2.016 4.5 4.5 4.5c2.482 0 4.5-2.015 4.5-4.5s-2.018-4.5-4.5-4.5zm2.5 5h-2v2h-1v-2h-2v-1h2v-2h1v2h2v1z"/></svg>'

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


// MAPEANDO LISTA DE PASTEIS ///////////////////////////////////////////////////////////////////////////////////////////

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
    pastelButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path d="M13.299 3.74c-.207-.206-.299-.461-.299-.711 0-.524.407-1.029 1.02-1.029.262 0 .522.1.721.298l3.783 3.783c-.771.117-1.5.363-2.158.726l-3.067-3.067zm3.92 14.84l-.571 1.42h-9.296l-3.597-8.961-.016-.039h9.441c.171-.721.459-1.395.848-2h-14.028v2h.643c.535 0 1.021.304 1.256.784l4.101 10.216h12l1.21-3.015c-.698-.03-1.367-.171-1.991-.405zm-6.518-14.84c.207-.206.299-.461.299-.711 0-.524-.407-1.029-1.02-1.029-.261 0-.522.1-.72.298l-4.701 4.702h2.883l3.259-3.26zm8.799 4.26c-2.484 0-4.5 2.015-4.5 4.5s2.016 4.5 4.5 4.5c2.482 0 4.5-2.015 4.5-4.5s-2.018-4.5-4.5-4.5zm2.5 5h-2v2h-1v-2h-2v-1h2v-2h1v2h2v1z"/></svg>'

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



// MAPEANDO LISTA DE PETISCOS ///////////////////////////////////////////////////////////////////////////////////////////

petiscoJson.map((item, index) => {
    const petiscoList = document.querySelector('.petisco-list');
    const petiscoDiv = document.createElement("div"); 
    petiscoDiv.classList.add("petisco-item"); 
    petiscoList.appendChild(petiscoDiv); 
    
    const petiscoDiv1 = document.createElement("div"); 
    petiscoDiv1.classList.add("petisco-item-area1");
    petiscoDiv.appendChild(petiscoDiv1);
    const petiscoImg = document.createElement("img");
    petiscoImg.src = item.img;
    petiscoDiv1.appendChild(petiscoImg);
   
    const petiscoDiv2 = document.createElement("div"); 
    petiscoDiv2.classList.add("petisco-item-area2");
    petiscoDiv.appendChild(petiscoDiv2);
    const petiscoTitle = document.createElement("h2"); 
    const petiscoDescriptopn = document.createElement("p");
    petiscoTitle.innerText = item.name;
    petiscoDescriptopn.innerHTML = item.description;
    petiscoDiv2.appendChild(petiscoTitle);
    petiscoDiv2.appendChild(petiscoDescriptopn);

    const petiscoDiv3 = document.createElement("div"); 
    petiscoDiv3.classList.add("petisco-item-area3");
    petiscoDiv.appendChild(petiscoDiv3);
    const petiscoPrice = document.createElement("h2"); 
    const petiscoButton = document.createElement("div");
    petiscoPrice.innerText = 'R$' + item.price.toFixed(2);
    petiscoButton.classList.add("petisco-plus");
    petiscoButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path d="M13.299 3.74c-.207-.206-.299-.461-.299-.711 0-.524.407-1.029 1.02-1.029.262 0 .522.1.721.298l3.783 3.783c-.771.117-1.5.363-2.158.726l-3.067-3.067zm3.92 14.84l-.571 1.42h-9.296l-3.597-8.961-.016-.039h9.441c.171-.721.459-1.395.848-2h-14.028v2h.643c.535 0 1.021.304 1.256.784l4.101 10.216h12l1.21-3.015c-.698-.03-1.367-.171-1.991-.405zm-6.518-14.84c.207-.206.299-.461.299-.711 0-.524-.407-1.029-1.02-1.029-.261 0-.522.1-.72.298l-4.701 4.702h2.883l3.259-3.26zm8.799 4.26c-2.484 0-4.5 2.015-4.5 4.5s2.016 4.5 4.5 4.5c2.482 0 4.5-2.015 4.5-4.5s-2.018-4.5-4.5-4.5zm2.5 5h-2v2h-1v-2h-2v-1h2v-2h1v2h2v1z"/></svg>'

    petiscoDiv3.appendChild(petiscoPrice);
    petiscoDiv3.appendChild(petiscoButton);
    petiscoButton.addEventListener('click', (e) => {
        keyEscolhido = index;
        itemEscolhido = 3;
        
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
        modalTitle.innerHTML = petiscoJson[index].name;
        modalDescription.innerHTML = petiscoJson[index].description;
        modalPrice.innerHTML = 'R$' + petiscoJson[index].price.toFixed(2);
        modalImg.src = petiscoJson[index].img;

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

    petiscoList.appendChild(petiscoDiv); 


})


// MAPEANDO LISTA DE HOTDOG ///////////////////////////////////////////////////////////////////////////////////////////

hotdogJson.map((item, index) => {
    const hotdogList = document.querySelector('.hotdog-list');
    const hotdogDiv = document.createElement("div"); 
    hotdogDiv.classList.add("hotdog-item"); 
    hotdogList.appendChild(hotdogDiv); 
    
    const hotdogDiv1 = document.createElement("div"); 
    hotdogDiv1.classList.add("hotdog-item-area1");
    hotdogDiv.appendChild(hotdogDiv1);
    const hotdogImg = document.createElement("img");
    hotdogImg.src = item.img;
    hotdogDiv1.appendChild(hotdogImg);
   
    const hotdogDiv2 = document.createElement("div"); 
    hotdogDiv2.classList.add("hotdog-item-area2");
    hotdogDiv.appendChild(hotdogDiv2);
    const hotdogTitle = document.createElement("h2"); 
    const hotdogDescriptopn = document.createElement("p");
    hotdogTitle.innerText = item.name;
    hotdogDescriptopn.innerHTML = item.description;
    hotdogDiv2.appendChild(hotdogTitle);
    hotdogDiv2.appendChild(hotdogDescriptopn);

    const hotdogDiv3 = document.createElement("div"); 
    hotdogDiv3.classList.add("hotdog-item-area3");
    hotdogDiv.appendChild(hotdogDiv3);
    const hotdogPrice = document.createElement("h2"); 
    const hotdogButton = document.createElement("div");
    hotdogPrice.innerText = 'R$' + item.price.toFixed(2);
    hotdogButton.classList.add("hotdog-plus");
    hotdogButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path d="M13.299 3.74c-.207-.206-.299-.461-.299-.711 0-.524.407-1.029 1.02-1.029.262 0 .522.1.721.298l3.783 3.783c-.771.117-1.5.363-2.158.726l-3.067-3.067zm3.92 14.84l-.571 1.42h-9.296l-3.597-8.961-.016-.039h9.441c.171-.721.459-1.395.848-2h-14.028v2h.643c.535 0 1.021.304 1.256.784l4.101 10.216h12l1.21-3.015c-.698-.03-1.367-.171-1.991-.405zm-6.518-14.84c.207-.206.299-.461.299-.711 0-.524-.407-1.029-1.02-1.029-.261 0-.522.1-.72.298l-4.701 4.702h2.883l3.259-3.26zm8.799 4.26c-2.484 0-4.5 2.015-4.5 4.5s2.016 4.5 4.5 4.5c2.482 0 4.5-2.015 4.5-4.5s-2.018-4.5-4.5-4.5zm2.5 5h-2v2h-1v-2h-2v-1h2v-2h1v2h2v1z"/></svg>'

    hotdogDiv3.appendChild(hotdogPrice);
    hotdogDiv3.appendChild(hotdogButton);
    hotdogButton.addEventListener('click', (e) => {
        keyEscolhido = index;
        itemEscolhido = 4;
        
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
        modalTitle.innerHTML = hotdogJson[index].name;
        modalDescription.innerHTML = hotdogJson[index].description;
        modalPrice.innerHTML = 'R$' + hotdogJson[index].price.toFixed(2);
        modalImg.src = hotdogJson[index].img;

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

    hotdogList.appendChild(hotdogDiv); 


})



// MAPEANDO LISTA DE BEBIDAS ///////////////////////////////////////////////////////////////////////////////////////////

bebidasJson.map((item, index) => {
    const bebidasList = document.querySelector('.bebidas-list');
    const bebidasDiv = document.createElement("div"); 
    bebidasDiv.classList.add("bebidas-item");
    bebidasList.appendChild(bebidasDiv);
    
    const bebidasDiv1 = document.createElement("div"); 
    bebidasDiv1.classList.add("bebidas-item-area1");
    bebidasDiv.appendChild(bebidasDiv1);
    const bebidasImg = document.createElement("img");
    bebidasImg.src = item.img;
    bebidasDiv1.appendChild(bebidasImg);
   
    const bebidasDiv2 = document.createElement("div"); 
    bebidasDiv2.classList.add("bebidas-item-area2");
    bebidasDiv.appendChild(bebidasDiv2);
    const bebidasTitle = document.createElement("h2"); 
    const bebidasDescriptopn = document.createElement("p");
    bebidasTitle.innerText = item.name;
    bebidasDescriptopn.innerHTML = item.description;
    bebidasDiv2.appendChild(bebidasTitle);
    bebidasDiv2.appendChild(bebidasDescriptopn);

    const bebidasDiv3 = document.createElement("div"); 
    bebidasDiv3.classList.add("bebidas-item-area3");
    bebidasDiv.appendChild(bebidasDiv3);
    const bebidasPrice = document.createElement("h2"); 
    const bebidasButton = document.createElement("div");
    bebidasPrice.innerText = 'R$' + item.price.toFixed(2);
    bebidasButton.classList.add("bebidas-plus");
    bebidasButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path d="M13.299 3.74c-.207-.206-.299-.461-.299-.711 0-.524.407-1.029 1.02-1.029.262 0 .522.1.721.298l3.783 3.783c-.771.117-1.5.363-2.158.726l-3.067-3.067zm3.92 14.84l-.571 1.42h-9.296l-3.597-8.961-.016-.039h9.441c.171-.721.459-1.395.848-2h-14.028v2h.643c.535 0 1.021.304 1.256.784l4.101 10.216h12l1.21-3.015c-.698-.03-1.367-.171-1.991-.405zm-6.518-14.84c.207-.206.299-.461.299-.711 0-.524-.407-1.029-1.02-1.029-.261 0-.522.1-.72.298l-4.701 4.702h2.883l3.259-3.26zm8.799 4.26c-2.484 0-4.5 2.015-4.5 4.5s2.016 4.5 4.5 4.5c2.482 0 4.5-2.015 4.5-4.5s-2.018-4.5-4.5-4.5zm2.5 5h-2v2h-1v-2h-2v-1h2v-2h1v2h2v1z"/></svg>'

    bebidasDiv3.appendChild(bebidasPrice);
    bebidasDiv3.appendChild(bebidasButton);
    bebidasButton.addEventListener('click', (e) => {
        keyEscolhido = index;
        itemEscolhido = 5;
         
        modalTamanho.style.display = 'none';
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
        
        modalTitle.innerHTML = bebidasJson[index].name;
        modalDescription.innerHTML = bebidasJson[index].description;
        modalPrice.innerHTML = 'R$' + bebidasJson[index].price.toFixed(2);
        modalImg.src = bebidasJson[index].img;
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

    bebidasList.appendChild(bebidasDiv); 


})





// MAPEANDO LISTA DE COMBOS ///////////////////////////////////////////////////////////////////////////////////////////

combosJson.map((item, index) => {
    const combosList = document.querySelector('.combos-list');
    const combosDiv = document.createElement("div"); 
    combosDiv.classList.add("combos-item");
    combosList.appendChild(combosDiv);
    
    const combosDiv1 = document.createElement("div"); 
    combosDiv1.classList.add("combos-item-area1");
    combosDiv.appendChild(combosDiv1);
    const combosImg = document.createElement("img");
    combosImg.src = item.img;
    combosDiv1.appendChild(combosImg);
   
    const combosDiv2 = document.createElement("div"); 
    combosDiv2.classList.add("combos-item-area2");
    combosDiv.appendChild(combosDiv2);
    const combosTitle = document.createElement("h2"); 
    const combosDescriptopn = document.createElement("p");
    combosTitle.innerText = item.name;
    combosDescriptopn.innerHTML = item.description;
    combosDiv2.appendChild(combosTitle);
    combosDiv2.appendChild(combosDescriptopn);

    const combosDiv3 = document.createElement("div"); 
    combosDiv3.classList.add("combos-item-area3");
    combosDiv.appendChild(combosDiv3);
    const combosPrice = document.createElement("h2"); 
    const combosButton = document.createElement("div");
    combosPrice.innerText = 'R$' + item.price.toFixed(2);
    combosButton.classList.add("combos-plus");
    combosButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path d="M13.299 3.74c-.207-.206-.299-.461-.299-.711 0-.524.407-1.029 1.02-1.029.262 0 .522.1.721.298l3.783 3.783c-.771.117-1.5.363-2.158.726l-3.067-3.067zm3.92 14.84l-.571 1.42h-9.296l-3.597-8.961-.016-.039h9.441c.171-.721.459-1.395.848-2h-14.028v2h.643c.535 0 1.021.304 1.256.784l4.101 10.216h12l1.21-3.015c-.698-.03-1.367-.171-1.991-.405zm-6.518-14.84c.207-.206.299-.461.299-.711 0-.524-.407-1.029-1.02-1.029-.261 0-.522.1-.72.298l-4.701 4.702h2.883l3.259-3.26zm8.799 4.26c-2.484 0-4.5 2.015-4.5 4.5s2.016 4.5 4.5 4.5c2.482 0 4.5-2.015 4.5-4.5s-2.018-4.5-4.5-4.5zm2.5 5h-2v2h-1v-2h-2v-1h2v-2h1v2h2v1z"/></svg>'

    combosDiv3.appendChild(combosPrice);
    combosDiv3.appendChild(combosButton);
    combosButton.addEventListener('click', (e) => {
        keyEscolhido = index;
        itemEscolhido = 6;
         
        modalTamanho.style.display = 'none';
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
        
        modalTitle.innerHTML = combosJson[index].name;
        modalDescription.innerHTML = combosJson[index].description;
        modalPrice.innerHTML = 'R$' + combosJson[index].price.toFixed(2);
        modalImg.src = combosJson[index].img;
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

    combosList.appendChild(combosDiv); 


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
    else if(itemEscolhido == 3){
        compra.produto = petiscoJson[keyEscolhido];
        produtosCarrinho[keyCarrinho] = compra;
    }
    else if(itemEscolhido == 4){
        compra.produto = hotdogJson[keyEscolhido];
        produtosCarrinho[keyCarrinho] = compra;
    }
    else if(itemEscolhido == 5){
        compra.produto = bebidasJson[keyEscolhido];
        produtosCarrinho[keyCarrinho] = compra;
    }
    else if(itemEscolhido == 6){
        compra.produto = combosJson[keyEscolhido];
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
            mostrarPedidos();
            produtosCarrinho.splice(index, 1);
            mostrarPedidos();
            contagemCarrinho();

        })

        carrinhoProdutos.appendChild(carrinhoItem); 
    })
}

const menuItens = document.querySelectorAll('#header-menu a[href^="#"]'); //pega todos a

menuItens.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick); 
})

const menuMobileItens = document.querySelectorAll('#header-menu-mobile a[href^="#"]'); //pega todos a

menuMobileItens.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick); 
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


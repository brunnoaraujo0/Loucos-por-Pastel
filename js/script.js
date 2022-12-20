let produtosCarrinho = [];

const produtoModal = document.querySelector('.produto-modal');
const iconeCarrinho = document.querySelector('#header-carrinho');
const modalCarrinho = document.querySelector('.modal-carrinho');
const carrinhoQuantidade = document.querySelector('#header-carrinho button span');

let keyCarrinho = 0;
let keyEscolhido;

let marginHamburguer = 0;

// CARROSEL ///////////////////////////////////////////////////////////////////////////////////////////

document.querySelector('.setaLeft').addEventListener('click', ()=> {
   
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

document.querySelector('.setaRigth').addEventListener('click', () => {
    if(window.innerWidth >460){
    let x = marginHamburguer - 340;
    if((window.innerWidth - 3060) > x){
        x = 0;
    }
    marginHamburguer = x;
    document.querySelector('.hamburguer-list').style.marginLeft = marginHamburguer + 'px';}
    else{
        marginHamburguer = marginHamburguer - (window.innerWidth - 60)  ;
        let x = -(window.innerWidth * 6) - 1;
        if(marginHamburguer < x){
            marginHamburguer = 0;
        }
        document.querySelector('.hamburguer-list').style.marginLeft = marginHamburguer + 'px';
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
        
        modalTitle.innerHTML = hamburguerJson[index].name;
        modalDescription.innerHTML = hamburguerJson[index].description;
        modalPrice.innerHTML = 'R$' + hamburguerJson[index].price.toFixed(2);

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


//EVENTOS ///////////////////////////////////////////////////////////////////////////////////////////////////Q

iconeCarrinho.addEventListener('click', () => {
    modalCarrinho.classList.add("show");
})

document.querySelectorAll('#add').forEach((item) => {
    item.addEventListener('click', () => {
       addCarrinho(keyEscolhido);
       produtoModal.classList.remove("show");
    })

})

document.querySelector('.carrinho-seta').addEventListener('click', () => {
    
    modalCarrinho.classList.remove("show");
    

})

//FUNCOES ////////////////////////////////////////////////////////////////////////////////////////



function addCarrinho(keyEscolhido){
    const compra = new Object();
    compra.quantidade = document.querySelector('.produto-quantidade .quantidade').innerText;
    compra.produto = hamburguerJson[keyEscolhido];
    produtosCarrinho[keyCarrinho] = compra;
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
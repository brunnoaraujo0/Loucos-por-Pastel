let marginHamburguer = 0;

document.querySelector('.setaLeft').addEventListener('click', ()=> {
   
    
    marginHamburguer = marginHamburguer + 340;
    if(marginHamburguer > 0){
        marginHamburguer = 0;
    }
    
    document.querySelector('.hamburguer-list').style.marginLeft = marginHamburguer  + 'px';
})

document.querySelector('.setaRigth').addEventListener('click', () => {
    
    marginHamburguer = marginHamburguer - 340;
    document.querySelector('.hamburguer-list').style.marginLeft = marginHamburguer + 'px';
})



export function switchel (e) {
    let carrinho = document.querySelector('.carrinho')
    let favorito = document.querySelector('.favoritos')
    let loja = document.querySelector('.container')
    let perfil = document.querySelector('.criarperfil')
    let slid = document.querySelector('.slid')
    if (e == 1){
       slid.style.marginLeft='0px'
    }
    if (e == 2){
       slid.style.marginLeft='-100%'
    }
    if (e == 3){
        if(carrinho.classList.contains('hide')){

            if (favorito.classList.contains('hide')){
                loja.classList.toggle('hide') 
                carrinho.classList.toggle('hide')
            }else{
                carrinho.classList.toggle('hide')
                favorito.classList.toggle('hide')
            }
            
            
        }else{
            console.log(loja)
        }
    }
        
        

    
    
}
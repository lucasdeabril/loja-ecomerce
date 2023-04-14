
export function switchel (e) {
    let carrinho = document.querySelector('.carrinho')
    let favorito = document.querySelector('.favoritos')
    let loja = document.querySelector('.container')
    if (e == 2){
        if(loja.classList.contains('hide')){

            if (favorito.classList.contains('hide')){
                loja.classList.toggle('hide') 
                carrinho.classList.toggle('hide')
            }else{
                loja.classList.toggle('hide')
                favorito.classList.toggle('hide')
            }
            
            
        }else{
            console.log(loja)
        }
    }
    if (e == 1){
        if(favorito.classList.contains('hide')){

            if (loja.classList.contains('hide')){
                favorito.classList.toggle('hide') 
                carrinho.classList.toggle('hide')
            }else{
                loja.classList.toggle('hide')
                favorito.classList.toggle('hide')
            }
            
            
        }else{
            console.log(loja)
        }
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
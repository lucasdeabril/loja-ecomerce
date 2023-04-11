// let favorito = document.querySelector('favorito')
import { favoritar } from "./favorito.js"
import { filtrofav } from "./filtrofav.js"
import { filtrocar } from "./filtrofav.js"
import { remove } from "./remove.js"
import { addcarrinho } from "./addcarrinho.js"
import { remover_item_carrinho } from "./remove.js"
import { subtotal } from "./addcarrinho.js"


let indice = 1
addEventListener('click', (e)=>{
    
    let targetEl = e.target

    
    // toda a parte referente ao favoritos
    if (targetEl.classList.contains('favorito')){
        targetEl.classList.toggle('checado')
        if(targetEl.classList.contains('checado')){
            console.log('checado')
            let F = favoritar(targetEl)

            // targetEl.classList.toggle('hide')

            let filtro_fav = filtrofav(targetEl,indice)
        }else{
            let removeitm = remove(targetEl,indice)
        }
        
    }
    
    if(targetEl.classList.contains('addcarrinho')){
        let c = addcarrinho(targetEl)
        let f = filtrocar(targetEl)
        let s = subtotal(targetEl)
    }
    if(targetEl.classList.contains('removeritm')){
        let r = remover_item_carrinho(targetEl)
    }
    
    if(targetEl.classList.contains('inputnbr')){
        let s = subtotal(targetEl)
    }
})

// let favorito = document.querySelector('favorito')
import { favoritar } from "./favorito.js"
import { filtrofav } from "./filtrofav.js"
import { filtrocar } from "./filtrofav.js"
import { remove } from "./remove.js"
import { addcarrinho } from "./addcarrinho.js"
import { remover_item_carrinho } from "./remove.js"
import { subtotal } from "./addcarrinho.js"
import { switchel } from "./switchel.js"
import { validador } from "./perfil.js"
import { login } from "./perfil.js"
import { sethist } from "./historico.js"
import { userfav } from "./userfav.js"
import { nextimg } from "./banner.js"


let indice = 1
addEventListener('click', (e)=>{
    
    let targetEl = e.target

    
    // toda a parte referente ao favoritos
    if (targetEl.classList.contains('favorito')){
        let id = document.querySelector('#perfilinicio')
        if (id.innerText == 'Faça o login ou cadastre-se'){
            alert('Faça o login ou cadastre-se no nosso site antes de prosseguir')
        }else{
            
            targetEl.classList.toggle('checado')
        
            if(targetEl.classList.contains('checado')){
                console.log('checado')
                let F =  favoritar(targetEl)
                let filtro_fav = filtrofav(targetEl,indice)
                
                let u = userfav()

            }else{
                let removeitm = remove(targetEl,indice)
                let u =  userfav()
            } 
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

    if(targetEl.classList.contains('buttonfav')){
        let removeitm = remove(targetEl,indice)
    }
    
    if(targetEl.classList.contains('loja')){
        let s = switchel(1)
    }
    if(targetEl.classList.contains('cessao')){
        let s = switchel(2)
    }
    if(targetEl.classList.contains('compra')){
        let s = switchel(3)
    }
    if(targetEl.classList.contains('boxperfil')){
        let s = switchel(4)
    }
    if(targetEl.classList.contains('criarconta')){
        let c = validador()
    }
    if(targetEl.classList.contains('login')){
        let l = login()
    }
    if(targetEl.classList.contains('comprar')){
        let h = sethist()
    }

    
})


setInterval(function(){
    let b = nextimg()
} ,3000)
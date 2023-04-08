// let favorito = document.querySelector('favorito')
import { favoritar } from "./favorito.js"
import { filtrofav } from "./filtrofav.js"
import { remove } from "./remove.js"


let indice = 1
addEventListener('click', (e)=>{
    
    let targetEl = e.target

    
    
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
    
    
    
    

})

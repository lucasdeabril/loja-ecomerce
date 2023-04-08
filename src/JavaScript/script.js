// let favorito = document.querySelector('favorito')
import { favoritar } from "./favorito.js"
import { filtrofav } from "./filtrofav.js"


let indice = 1
addEventListener('click', (e)=>{
    
    let targetEl = e.target

    
    
    if (targetEl.classList.contains('favorito')){

        let F = favoritar(targetEl)

        // targetEl.classList.toggle('hide')

        let filtro_fav = filtrofav(targetEl,indice)
    }
    
    
    
    

})
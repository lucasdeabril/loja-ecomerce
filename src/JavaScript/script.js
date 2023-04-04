// let favorito = document.querySelector('favorito')
import { favoritar } from "./favorito.js"

addEventListener('click', (e)=>{
    
    let targetEl = e.target
    
    
    
    if (targetEl.classList.contains('favorito')){
        let F = favoritar(targetEl)
        // F
    }
    
})
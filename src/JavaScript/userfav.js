// código responsável por salvar o favoritos no perfil do usuário
import userid from './perfil.js';
const favoritos = document.querySelector('.favoritos');
const url = `https://nodejs-production-03bf.up.railway.app/usuarios/${userid}/favoritos`
export function userfav (){
    
    fetch(url , {
        method: 'PUT',
        headers:{'Content-Type': 'application-json'},
        body: JSON.stringify({
            id:userid,
            favoritos:favoritos.innerHTML
        })
    }.then(response=> response.json())
    .catch(err =>{
        console.log('Erro ao favoritar o ítem')
    })

    )
    
}

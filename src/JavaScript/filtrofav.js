
// essa função impede o usuário de repetir o item nos favoritos
export async function filtrofav(e , i){
    let parentEl = e.closest('div');
    let divfav = document.querySelectorAll('.divfav')
    
    let indice = i
    for (let i = 0; i< divfav.length; i++){
        let imagem = divfav[i].querySelector('img')
        let nome = imagem.name
        
        if (parentEl.id == divfav[i].id){
            
            indice ++
           
            if (indice >=3){
                let ultimoI= divfav[divfav.length -1]
                ultimoI.remove();
                
                indice=1
            }

        }
    }

    
}

export function filtrocar (e){
    let indice_car = 0
    let contitm = document.querySelectorAll('.itemcar')
    let parent= e.closest('div')
    let ultimo = contitm[contitm.length-1]
    
    for(let i = 0;i<contitm.length; i++){
        if(contitm[i].id == parent.id){
        indice_car ++
        }
    }
    if(indice_car>=2){
        ultimo.remove()
        indice_car = 0
    }

}



export function filtrofav(e , i){
    let parentEl = e.closest('div');
    let divfav = document.querySelectorAll('.divfav')
    
    // let container=document.querySelector('.container')
    // console.log(imagemfilho)
    
    let indice = i
    for (let i = 0; i< divfav.length; i++){
        let imagem = divfav[i].querySelector('img')
        let nome = imagem.name
        
        if (parentEl.id == divfav[i].id){
            // console.log('gus')
            
            indice ++
            // console.log(indice)
           
            if (indice >=3){
                let ultimoI= divfav[divfav.length -1]
                ultimoI.remove();
                
                indice=1
            }

        }
    }

    
}

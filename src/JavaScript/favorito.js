
export function favoritar(e){
    let conteiner = e.closest('div')
    let P_origin = conteiner.querySelectorAll('p')
    let img_origin = conteiner.querySelector('img')
    let input_origin = conteiner.querySelectorAll('input')
    
    let destino = document.querySelector('.produtos')
    

    let cont = document.createElement('div')
    let foto = document.createElement('img')
    let p1 = document.createElement('p')
    let p2 = document.createElement('p')
    let input = document.createElement('input')
    input.type='button'
    
    cont.appendChild(foto)
    cont.appendChild(p1)
    cont.appendChild(p2)
    cont.appendChild(input)
    destino.appendChild(cont)

    
    foto.src = img_origin.src
    let pdest = cont.querySelectorAll('p')
    for(let i=0 ; i<P_origin.length ;i++){
       pdest[i].innerText= P_origin[i].innerText
    }

    

    


}
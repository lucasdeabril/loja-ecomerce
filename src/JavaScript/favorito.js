

export function favoritar(e){

    // let x = document.querySelector('#placa')
    // console.log(x)

    let conteiner = e.closest('div')
    let P_origin = conteiner.querySelectorAll('p')
    let img_origin = conteiner.querySelector('img')
    let input_origin = conteiner.querySelector('input')
    
    let destino = document.querySelector('.favoritos')
    

    let cont = document.createElement('div')
    let foto = document.createElement('img')
    let p1 = document.createElement('p')
    let p2 = document.createElement('p')
    let p3 = document.createElement('p')
    let input = document.createElement('input')
    input.type='button'
    input.classList.add('buttonfav')

    cont.classList.add('divfav')
    cont.id=conteiner.id
    
    foto.name =('imgdiv')

    
    cont.appendChild(foto)
    cont.appendChild(p1)
    cont.appendChild(p2)
    cont.appendChild(p3)
    cont.appendChild(input)
    destino.appendChild(cont)

    

    foto.src = img_origin.src
    let pdest = cont.querySelectorAll('p')
    for(let i=0 ; i<3 ;i++){
       pdest[i].innerText= P_origin[i].innerText
    }

    
}

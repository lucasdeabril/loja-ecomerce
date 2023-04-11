
export function addcarrinho(e){
    let target = e
    let parent = target.closest('.itens')
    let paragrafo = parent.querySelectorAll('p')
    let fotoor = parent.querySelector('img')

    let conteiner = document.querySelector('.containeritm')

    
    
    
    //container principal do item criado
    let cont = document.createElement('div')
    cont.classList.add('itemcar')
    cont.id= parent.id
    
    let foto = document.createElement('img')
    foto.classList.add('imgitm')
    foto.src=fotoor.src

    let divdiscri = document.createElement('div')
    divdiscri.classList.add('discricar')
    
    let p1 = document.createElement('p')
    p1.innerText = paragrafo[0].innerText

    let p2 = document.createElement('p')
    p2.innerText = paragrafo[1].innerText

    let montante = document.createElement('div')
    montante.classList.add('montante')
    

    let input = document.createElement('input')
    input.type='Number'
    input.classList.add('inputnbr')
    input.value=1

    let delet = document.createElement('img')
    delet.src='./src/fotos/remover.png'
    delet.classList.add('removeritm')

    let valor_tot = document.createElement('div')
    valor_tot.classList.add('valortot')

    montante.appendChild(input)
    montante.appendChild(delet)
    divdiscri.appendChild(p1)
    divdiscri.appendChild(p2)
    cont.appendChild(foto)
    cont.appendChild(divdiscri)
    cont.appendChild(montante)
    conteiner.appendChild(cont)

}

export function subtotal(e){

    console.log(e)
}
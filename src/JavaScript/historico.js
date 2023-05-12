export function sethist(){

let carrinho = document.querySelector('.containeritm')
let perfilinicio = document.querySelector('#perfilinicio')

let user = JSON.parse(localStorage.getItem(perfilinicio.innerHTML))

if(perfilinicio.innerHTML=='Faça o login ou cadastre-se'){
    alert('faça seu login cadastre-se para prosseguir')
}else{
    
    user.historico+=carrinho.innerHTML
    console.log(user.historico)
    localStorage.setItem(perfilinicio.innerHTML,JSON.stringify(user))
}
}
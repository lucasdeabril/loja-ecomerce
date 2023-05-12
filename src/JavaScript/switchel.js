
export function switchel (e) {
    let carrinho = document.querySelector('.carrinho')
    let favorito = document.querySelector('.favoritos')
    let loja = document.querySelector('.container')
    let perfil = document.querySelector('.criarperfil')
    let slid = document.querySelector('.slid')
    if (e == 1){
       slid.style.marginLeft='0px'
    }
    if (e == 2){
       slid.style.marginLeft='-100%'
    }
    if (e == 3){
       slid.style.marginLeft='-200%'
    }
    if (e == 4){
       slid.style.marginLeft='-300%'
    }
}
// código responsável por salvar o favoritos no perfil do usuário

export function userfav (){
    let id = document.querySelector('#perfilinicio')
    let user = JSON.parse(localStorage.getItem(id.innerText))
    let fav = document.querySelector('.favoritos')
    user.favoritos = fav.innerHTML

    localStorage.setItem(user.username,JSON.stringify(user))
    console.log(user)
}

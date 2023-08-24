// código responsável por salvar o favoritos no perfil do usuário


export function userfav() {
    const userid = document.querySelector('#response').textContent; // Use .textContent para obter o conteúdo
    const favoritos = document.querySelector('.favoritos');
    let url = `https://nodejs-production-03bf.up.railway.app/usuarios/${userid}/favoritos`;
    fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            id: userid,
            favoritos: favoritos.innerHTML
        })
    })
    .then(response => response.json())
    .then(() =>{
        console.log(userid) // Exibe o valor de userid
        console.log(url) // Exibe a URL construída
    })
    .catch(err => {
        console.log('Erro ao favoritar o ítem', err);
    });
}
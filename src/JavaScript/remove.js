
export function remove (e, i){
    let parentEl = e.closest('div');
    let divfav = document.querySelectorAll('.divfav')
    let indice = i

    for (let i = 0; i< divfav.length; i++){
        
        
        if (parentEl.id == divfav[i].id){
            divfav[i].remove();
        }
    }
}
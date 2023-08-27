export function sethist(){

    
    

    if(perfilinicio.innerHTML=='Faça o login ou cadastre-se'){
        alert('faça seu login cadastre-se para prosseguir')
    }else{
        
        const discricar = document.querySelectorAll('.discricar')
        
        let carrinho = ""
        for(let i=0;i<discricar.length;i++){
            const pdisc = discricar[i].querySelector('p')
            carrinho += "  " + pdisc.innerText + "  ||"
        }
            // user.historico+= `<div class='cupom'>Cupom de compra</div>${carrinho.innerHTML}`
        const userid = document.querySelector('#response').textContent; // Use .textContent para obter o conteúdo
        const seuhist = document.querySelector('.seuhist').innerHTML
        let url = `https://nodejs-production-03bf.up.railway.app/usuarios/${userid}/historico`;
        let historico = document.querySelector('.historico')
        fetch(url, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: userid,
                historico:  historico.innerHTML + "<div class='cupom'>Cupom de compra</div>"+ carrinho
            })
        })
        .then(response => response.json())
        .then(() =>{
            console.log(userid) // Exibe o valor de userid
            console.log(url) // Exibe a URL construída
        })
        .catch(err => {
            console.log('Erro ao registrar a compra', err);
        });
    }
}
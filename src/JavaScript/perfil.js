let newuser = document.querySelector('#newuser');
let senha1 = document.querySelector('#senha1');
let senha2 = document.querySelector('#senha2');
let newemail = document.querySelector('#email');

let registreduser = document.querySelector('.registreduser')
let registredpasword = document.querySelector('.registredpasword')

let perfilinicio = document.querySelector('#perfilinicio')


let userid = ''

export function validador(){
    event.preventDefault();
    if(senha1.value==senha2.value && newuser.value!= ''){
        const url = `https://nodejs-production-03bf.up.railway.app/usuarios/${newemail.value}`;
        fetch(url, {
            method: 'GET',
            headers: {'content-type': 'application/json'}
        })
        .then(response => response.json())
        .then(data => {
            if(newemail.value==data.email){
                alert('Email já cadastrado')
            }else{
                
                criar_perfil()
            }
        })

        
    }else{
        alert('preencha todos os campos corretamente para criar uma conta')
    }
}

function criar_perfil (){
    const url = `https://nodejs-production-03bf.up.railway.app/usuarios`;
    const user = document.querySelector('#newuser')
    const senha = document.querySelector('#senha1')
    const email = document.querySelector('#email')
    fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        "nome" : `${user.value}`,
        "email": `${email.value}`,
        "senha": `${senha.value}`,
        "favoritos": "",
        "historico": ""
    })
        
    //   JSON.stringify(jsondata)
    })
    .then(response => response.json())
    .then(data => {
      document.getElementById('response').textContent = 'Dados enviados com sucesso!';
    })
    .catch(error => {
      document.getElementById('response').textContent = 'Ocorreu um erro ao enviar os dados.';
    });
    alert('Perfil criado com sucesso')

    perfilinicio.innerHTML= newuser.value
}


export function login(){
    

    const user = document.querySelector('.registreduser')
    const url = `https://nodejs-production-03bf.up.railway.app/usuarios/${user.value}`;
    console.log(user.value)
    fetch(url, {
        method: 'GET',
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())
    .then(data => {
        // "data" agora contém os dados do usuário em formato JSON
        console.log(data); // Exibir os dados no console para verificação
        if(data.senha == registredpasword.value){
            let favoritos = document.querySelector('.favoritos')
            perfilinicio.innerHTML= 'bem vindo(a), '+data.nome
        }else{
            alert('Usuário ou senha incorretos')
        }
        
        userid = data.id
        
    })
    .catch(error => {
        console.error('Ocorreu um erro:', error);
    });
        
}
export default userid;
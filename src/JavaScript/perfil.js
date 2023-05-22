let newuser = document.querySelector('#newuser');
let senha1 = document.querySelector('#senha1');
let senha2 = document.querySelector('#senha2');

let registreduser = document.querySelector('.registreduser')
let registredpasword = document.querySelector('.registredpasword')

let perfilinicio = document.querySelector('#perfilinicio')

let user = {
    username:'',
    password:'',
    historico:'1',
    favoritos: ''
};

let userplace = ''

export function validador(){
    if(senha1.value==senha2.value && newuser.value!= ''){
        alert('deu certo')
        criar_perfil()
    }else{
        alert('preencha todos os campos corretamente para criar uma conta')
    }
}

function criar_perfil (){
    user.username=`${newuser.value}`
    user.password=senha1.value 
    console.log(user)
    localStorage.setItem(`${newuser.value}`,JSON.stringify(user));
    perfilinicio.innerHTML= newuser.value
}


export function login(){
    let consulta = JSON.parse(localStorage.getItem(registreduser.value))

    if(localStorage.getItem(`${registreduser.value}`)){
        if(consulta.password == registredpasword.value){//apos passar pelos validadores
            let historico = document.querySelector('.historico')
            perfilinicio.innerHTML= `${registreduser.value}`
            userplace = consulta
            historico.innerHTML = userplace.historico
            alert(`Bem vindo ${userplace.username}`)

            let loghide = document.querySelector('.loghide')
            let seuhist = document.querySelector('.seuhist')
            loghide.classList.toggle('hide')
            seuhist.classList.toggle('hide')

        }else{
            alert('Senha ou nome de usuário errado')
        }
    }else{
        alert('nome de usuário não encontrado no banco de dados')
    }
    let favoritos = document.querySelector('.favoritos')
    favoritos.innerHTML=consulta.favoritos
}
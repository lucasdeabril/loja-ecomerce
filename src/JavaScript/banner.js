let counter = 0
let position = 0
let less = 70
let an= document.querySelector('.an').style.width
    
export function nextimg (){
    let banner = document.querySelector('.anunciochild')
    
    if(counter>2){
        counter = 0
        position = 0
        banner.style.marginLeft = `${position}rem`
    }else{
        position-= 70
        banner.style.marginLeft = `${position}rem`
        counter++
        console.log(an)
    }
    
}
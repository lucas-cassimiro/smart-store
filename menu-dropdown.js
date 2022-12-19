let botaoIphone = document.querySelector('.botao-iphone');
let categoriaIphone = document.querySelector('#categoria-iphone');


let teste = botaoIphone.addEventListener('mouseout',function(){
})

botaoIphone.addEventListener('mouseover', function(){
    console.log('ok')
    categoriaIphone.style.visibility = 'visible'
})

categoriaIphone.addEventListener('mouseover', function(){
    console.log('passou por cima da div')
})

categoriaIphone.addEventListener('mouseleave', function(){
    categoriaIphone.style.visibility = 'hidden'
})

let hamburger = document.querySelector('.hamburger');
let navigation = document.querySelector('.header-navegation')

hamburger.addEventListener('click', function() {
    if(navigation.style.transform == "translateX(-100%)"){
        navigation.style.transform = 'translateX(0%)'
    } else {
        navigation.style.transform = "translateX(-100%)"
    }
    return
} )
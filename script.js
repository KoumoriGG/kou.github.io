const menu = document.querySelector('.menu-toggle')
const ul = document.querySelector('nav ul')

// menu.addEventListener('click', function() {
//     span1.style.transform = 'rotate(45deg) translate(-1px,-1px)'
//     span1.style.transformOrigin = '0 0'

//     span2.style.transform = 'scale(0)'

//     span3.style.transform = 'rotate(-45deg) translate(-1px, 0)'
//     span3.style.transformOrigin = '0 100%'

// })

menu.addEventListener('click', function() {
    ul.classList.toggle('slide')
})


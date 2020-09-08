// burguer icon

const showMenu = document.querySelector('.burger-menu');
const icon = document.querySelector('.icon');
const mobileMenu = document.querySelector('.mobile-menu')

showMenu.addEventListener('click', () => {

    if (mobileMenu.style.width === '100%') {
        icon.style.transform = 'rotate(0deg)'
        mobileMenu.style.width = '0px';
    }
    else {
        icon.style.transform = 'rotate(90deg)'
        mobileMenu.style.width = '100%';
    }

})

// button

const quote = document.querySelector('.getQuote');

quote.addEventListener('click', () => {
    window.location = '#'
})
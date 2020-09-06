const showMenu = document.querySelector('.burger-menu');
const icon = document.querySelector('.icon');
const mobileMenu = document.querySelector('.mobile-menu')


showMenu.addEventListener('click', () => {

    if (mobileMenu.style.width === '0px') {
        icon.style.transform ='rotate(90deg)'
        mobileMenu.style.width = '250px';
    } 
    else {
        icon.style.transform = 'rotate(0deg)'
        mobileMenu.style.width = '0px';
    } 

})



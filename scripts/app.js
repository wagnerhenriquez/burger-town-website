const showMenu = document.querySelector('.burger-menu');
const icon = document.querySelector('.icon');
const mobileMenu = document.querySelector('.mobile-menu');
const btn = document.querySelector('.btn');


showMenu.addEventListener('click', () => {

    if (mobileMenu.style.width === '100%') {
       icon.style.transform = 'rotate(0deg)'
        mobileMenu.style.width = '0px';
    } 
    else {
         icon.style.transform ='rotate(90deg)'
        mobileMenu.style.width = '100%';
    } 

})

btn.addEventListener('click', () => {
    window.location = './menu/'
})
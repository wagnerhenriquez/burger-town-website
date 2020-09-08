// initialize the map
var map = L.map('map').setView([29.76428, -95.387], 8);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})
    .addTo(map);

L.marker([29.8240, -95.6339]).addTo(map)
    .bindPopup('Burger Town Restaurant<br> 201 South Tryon, Ste 120-B<br>Houston TX 77044<br><br>Phone: (123) 355-667')
L.marker([29.76428, -95.36776]).addTo(map)
    .bindPopup('Burger Town Restaurant<br> Downtown, Ste 120-B<br>Houston TX 77056<br><br>Phone: (123) 355-667')
    .openPopup();
L.marker([29.2337, -94.9194]).addTo(map)
    .bindPopup('Burger Town Restaurant<br> Galveston, 1 Avenue<br>Houston TX 77650<br><br>Phone: (123) 355-667')
    
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

//quote button

// button

const quote = document.querySelector('.getQuote');

quote.addEventListener('click', () => {
    window.location = '../contact/'
})
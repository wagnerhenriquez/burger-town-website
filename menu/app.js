//items
const menu = [
    {
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "./images/item-1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 2,
        title: "diner double",
        category: "lunch",
        price: 13.99,
        img: "./images/item-2.jpeg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. `,
    },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        img: "./images/item-3.jpeg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "./images/item-4.jpeg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price: 22.99,
        img: "./images/item-5.jpeg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: 18.99,
        img: "./images/item-6.jpeg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 8.99,
        img: "./images/item-7.jpeg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 8,
        title: "american classic",
        category: "lunch",
        price: 12.99,
        img: "./images/item-8.jpeg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 9,
        title: "quarantine buddy",
        category: "shakes",
        price: 16.99,
        img: "./images/item-9.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: "steak dinner",
        category: "dinner",
        price: 39.99,
        img: "./images/item-10.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    }
];

//get parent elements
const containerBtn = document.querySelector('.btns');
const categories = document.querySelector('.categories');


//window will load this fuction when dom is loaded
window.addEventListener('DOMContentLoaded', () => {
    menuDisplay(menu);
    displayMenuButtons();
})

//gettins function to display all items
function menuDisplay(menuItems) {
//create variable "showItems" to iterate item elements with map

let showItems = menuItems.map((item) => {
    
//return the entire section html to show all items inside "categories"
    
    return `<article class="category">
    </div><div class="box-item" id="box">
    <img src=${item.img} alt=${item.img}>
    <p class="title">${item.title}</p>
    <p class="parraf">${item.desc}</p>
    <p class="price">$ ${item.price}</p>
    </div></article>`

}); 
// console.log(showItems);
    
//now showItems has return has an array [], let's use join now
showItems = showItems.join('');
    
//finally, categories id will  be equal to showItems, now all items will display in the DOM
categories.innerHTML = showItems;
// box2.innerHTML = showItems;
// box3.innerHTML = showItems;
};
//display items by category with btns
function displayMenuButtons() {
    const allCategories = menu.reduce(function (values, item) {
        if (!values.includes(item.category)) {
            values.push(item.category)
        } return values;
    }, ['all']);

    const btnsCategory = allCategories.map(function (category) {
        return `<button class="btn" data-id=${category}>${category}</button>`
    }).join('');
    
    containerBtn.innerHTML = btnsCategory;

    const filterBtn = document.querySelectorAll('.btn');

    filterBtn.forEach(function (btn) {
        btn.addEventListener('click', (e) => {
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter((menuItem) => {
                if (menuItem.category === category) {
                    return menuItem;
                }
            });
            if (category === 'all') {
                menuDisplay(menu);
            } else {
                menuDisplay(menuCategory);
            };
        });
    });
};

//menu burger icon

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
    window.location = '../contact/'
})

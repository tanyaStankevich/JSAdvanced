
const items = [
    {
        imgsrc: './img/FI1.png',
        tovar: 'Mango People T-shirt',
        price: '$52.00',
    },
    {
        imgsrc: './img/FI2.png',
        tovar: 'Mango People T-shirt',
        price: '$52.00',
    },
    {
        imgsrc: './img/FI3.png',
        tovar: 'Mango People T-shirt',
        price: '$52.00',
    },
    {
        imgsrc: './img/FI4.png',
        tovar: 'Mango People T-shirt',
        price: '$52.00',
    },
    {
        imgsrc: './img/FI5.png',
        tovar: 'Mango People T-shirt',
        price: '$52.00',
    },
    {
        imgsrc: './img/FI6.png',
        tovar: 'Mango People T-shirt',
        price: '$52.00',
    },
    {
        imgsrc: './img/FI7.png',
        tovar: 'Mango People T-shirt',
        price: '$52.00',
    },
    {
        imgsrc: './img/FI8.png',
        tovar: 'Mango People T-shirt',
        price: '$52.00',
    }
]

const $cards = document.querySelector('.cards');
console.log(items);

const createItem = ({ imgsrc, tovar, price }) => {
    return `<div class='card'><img class='img_hov' src=${imgsrc}><div class='text_card'><p class='tov'>${tovar}</p><p class='price'>${price}</p></div></div>`;
};

const addItem = (list = items) => {
    let itemsList = list.map(
        item => createItem(item)
    ).join(' ');
    $cards.insertAdjacentHTML('beforeend', itemsList);
}

addItem();

// function addItem() {

//     for (var i of items) {
//         var divItem1 = document.createElement('div');
//         divItem1.setAttribute('class', 'card');

//         var imgItem = document.createElement('img');
//         imgItem.src = 'this.imgsrc';
//         imgItem.setAttribute('class', 'img_hov');

//         document.append('divItem1');
//         divItem1.append('imgItem');

//         var divItem2 = document.createElement('div');
//         divItem2.setAttribute('class', 'text_card');

//         var tovarItem = document.createElement('p');
//         tovarItem.setAttribute('class', 'tov');

//         var priceItem = document.createElement('p');
//         priceItem.setAttribute('class', 'price');

//         divItem2.appendChild('tovarItem');
//         divItem2.appendChild('priceItem');

//         divItem1.appendChild('divItem2');
//     }
// }


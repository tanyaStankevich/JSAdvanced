const goods = [
    { title: 'short', price: 10 },
    { title: 'short', price: 10 },
    { title: 'short', price: 10 },
    {title: 'short', price: 10},
]
const renderGoodItem=(title,price)=>{
    return `<div class='goodsItem'><h3>${title}</h3><p>${price}</p></div>`;
}

const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodItem(item.title, item.price));
    document.querySelector('.good-list').innerHTML = goodsList;
}

renderGoodsList();
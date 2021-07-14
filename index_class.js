class Good {
    constructor(imgsrc, title, stars, count, price, deletes) {
        this.imgsrc = imgsrc;
        this.title = title;
        this.stars = stars;
        this.count = count;
        this.price = price;
        this.deletes = deletes;
    }
    getPrice() {
        return this.price;
    }
    getFinishPrice() {
        return this.price * this.count;
    }
    render() {
        return `<div class="korz_sod_1"><img class='korz_sod_img' src=${this.imgsrc}><div class='sod'><p class="korz_sod_txt">${this.title}</p>
        <p class="stars">${this.stars}</p>
        <p> <span class="paragraph1">${this.count}</span><span class="paragraph1"> * </span><span class="paragraph3">${this.price}</span><span class="paragraph1"> $ </span></p></div><p class="krest">${this.deletes}</p></div><div class="line"></div>`
    }
}

class ShoppingCart {
    constructor() {
        this.goods = [];
    }
    fetchShoppingCart() {
        this.items = [
            {
                imgsrc: './img/korz_men.png',
                title: 'Rebox Zane',
                stars: '&#9733;&#9733;&#9733;&#9733;&#9734;',
                count: '1',
                price: '250',
                deletes: '&#x2297;',
            },
            {
                imgsrc: './img/korz_wom.png',
                title: 'Rebox Zane',
                stars: '&#9733;&#9733;&#9733;&#9733;&#9734;',
                count: '1',
                price: '250',
                deletes: '&#x2297;',
            },
        ]
    }
    renderShoppingCart() {
        let listHTML = '';
        this.items.forEach(item => {
            const cartItem = new Good(item.imgsrc, item.title, item.stars, item.count, item.price, item.deletes);
            listHTML += cartItem.render();
        });

        document.querySelector('.mainkorz').innerHTML = listHTML;

    }
    finishCostCart() {
        var finishCost = 0;
        this.items.forEach(item => {
            finishCost += item.price * item.count;
        });

        document.querySelector('.costCart').innerHTML = finishCost + ' $ ';
    }

}
const list = new ShoppingCart();
list.fetchShoppingCart();
list.renderShoppingCart();
list.finishCostCart();
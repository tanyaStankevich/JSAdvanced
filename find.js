
const butFind = document.querySelector('.but_header2');
butFind.addEventListener('click', (e) => {
    const valueFind = document.querySelector('.search').value;
    list.filterGoods(valueFind);
})

const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

function makeGETRequest(API_URL, callback) {
    return new Promise((resolve, reject) => {
        var xhr;
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
            resolve(xhr);
        } else if (window.ActiveXObject) {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
            resolve(xhr);
        } else reject('Error');
    })

        .then((xhr) => {
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    callback(xhr.responseText);
                }
            }
        }, (Error) => { console.log('error') }
        )

        .then((xhr) => {
            xhr.open('GET', API_URL, true);
        }, (Error) => { console.log('error') }
        )


        .then((xhr) => {
            xhr.send();
        }, (Error) => { console.log('error') }
        )
}

function makePOSTRequest(API_URL, callback) {

    var xhr;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            callback(xhr.responseText);
        }
    }
    xhr.open('POST', API_URL, true);
    xhr.send();
}

// function makeGETRequest(API_URL, callback) {

//     var xhr;
//     if (window.XMLHttpRequest) {
//         xhr = new XMLHttpRequest();
//     } else if (window.ActiveXObject) {
//         xhr = new ActiveXObject("Microsoft.XMLHTTP");
//     }

//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4) {
//             callback(xhr.responseText);
//         }
//     }
//     xhr.open('GET', API_URL, true);
//     xhr.send();
// }

class Good {
    constructor({ id_product, product_name, price }) {
        this.id_product = id_product;
        this.product_name = product_name;
        this.price = price;
    }
    getPrice() {
        return this.price;
    }
    // getFinishPrice() {
    //     return this.price * this.count;
    // }
    render() {
        return `<div class="korz_sod_1"><div class='sod'><p class="korz_sod_txt">${this.id_product}</p>
        <p class="stars">${this.product_name}</p>
        <p> ${this.price}</p></div></div><div class="line"></div>`
    }
}

class ShoppingCart {
    constructor() {
        this.goods = [];
        this.filterGoods = [];
    }
    // add(good) {
    //     this.goods.push(good);
    // }
    fetchShoppingCart() {

        return new Promise((resolve, reject) => {
            makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
                this.goods = JSON.parse(goods);
                this.filterGoods = JSON.parse(goods);
                resolve(this.goods, this.filterGoods);
                //cb();
            }, reject('Error'));
        })

            .then((goods) => {

                function renderShoppingCart() {

                    let listHTML = '';
                    this.goods.forEach(good => {
                        const goodCart = new Good(good.id_product, good.product_name, good.price)
                        listHTML += goodCart.render();
                    });

                    document.querySelector('.mainkorz').innerHTML = listHTML;
                };
            })
    }

    finishCostCart() {
        var finishCost = 0;
        this.goods.forEach(good => {
            finishCost += good.price;
        });

        document.querySelector('.costCart').innerHTML = finishCost + ' $ ';
    }
    getBasket(cb) {
        makeGETRequest(`${API_URL}/getBasket.json`, (goods) => {
            this.goods = JSON.parse(goods);
            console.log(this.goods);
            cb();
        })
    }
    addToBasket() {
        makePOSTRequest(`${API_URL}/addToBasket.json`, (goods) => {
            goods = JSON.stringify(this.goods);
            console.log(goods);
            cb();
        })
    }
    deleteFromBasket() {
        const deleteGood = 'ноутбук';
        makeGETRequest(`${API_URL}/deleteFromBasket.json`, (goods) => {
            this.goods = JSON.parse(goods);
            console.log(goods);
            cb();
        })
        this.goods.forEach(good => {
            for (i = 0; i <= this.goods.length - 1; i++) {
                if (good.product_name[i] == deleteGood) {
                    this.goods = this.goods.splice(i, 1);
                }
            }
        })
        makePOSTRequest(`${API_URL}/deleteFromBasket.json`, (goods) => {
            goods = JSON.stringify(this.goods);
            cb();
        })
    }

}

const list = new ShoppingCart();
list.fetchShoppingCart(() => {
    list.renderShoppingCart();
});


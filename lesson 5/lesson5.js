const butCart = document.querySelector('.buttonCart');

butCart.addEventListener('click', (e) => {
    
    class Good {
        constructor({ id_product, product_name, price }) {
            this.id_product = id_product;
            this.product_name = product_name;
            this.price = price;
        }
        getPrice() {
            return this.price;
        }

        render() {
            return `<div class="korz_sod_1"><div class='sod'><p>${this.id_product}</p>
        <p>${this.product_name}</p>
        <p> ${this.price}</p></div></div>`
        }
    }

    class ShoppingCart {
        constructor() {
            this.goods = [];
            this.filterGoods = [];
        }
 
        getShoppingCart() {

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
        renderShoppingCart() {
            let listHTML = '';
            this.items.forEach(item => {
                const cartItem = new Good(item.id_product, item.product_name, item.price);
                listHTML += cartItem.render();
            });
            document.querySelector('.mainkorz').innerHTML = listHTML;
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
})


        
const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';


const app = new Vue({
    el: '#app',
    data: {
        goods: [],
        filterGoods: [],
        searchLine: '',
        isVisibleCart: false
    },
    methods: {
        makeGetReq(url, cb) {
            var xhr;
            if (window.XMLHttpRequest) {
                xhr = new XMLHttpRequest();
            }
            else if (window.ActiveXObject) {
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    cb(xhr.responseText);
                }
            }
            xhr.open('GET', url, true);
            xhr.send();
        },

        filteredGoods(searchLine) {
            
            const regexp = new RegExp(searchLine, 'i');
            this.filterGoods = this.goods.filter(good =>
                regexp.test(good.product_name));
            
           // this.render();

        },
    
        search() {
        const butFind = document.querySelector('.buttonSearch');
        butFind.addEventListener('click', (e) => {
        const searchLine = document.querySelector('.search').value;
            console.log(searchLine);
            return searchLine;
        //list.filterGoods(searchLine);
})
}

    },
    mounted() {
            

            this.makeGetReq(`${API_URL}/catalogData.json`, (goods) => {
                this.goods = goods;
                this.filterGoods = goods;
                console.log(this.goods);
                console.log(this.filterGoods);
            })

        }
})
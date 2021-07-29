// function makeGETRequest(url, callback) {
//     var xhr;
//     if (window.XMLHttpRequest) {
//         xhr = new XMLHttpRequest();
//     } else if (window.ActiveXObject) {
//         xhr = new ActiveXObject("Microsoft.XMLHTTP");
//     }
//     xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//         callback(xhr.responseText);
//     }
//     }
//     xhr.open('GET', url, true);
//     xhr.send();
// }
// const API_URL='https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

// class GoodItem{
//     constructor(id_product, product_name, price) {
//         this.id_product = id_product;
//         this.product_name = product_name;
//         this.price = price;
//     }
//     render () {
//     return `<div class='goodsItem'><p class='goodsP'>${this.id_product}</p><h3 class='goodsH'>${this.product_name}</h3><p class='goodsP'>${this.price}</p></div>`;
// }
// }

// class GoodList{
//     constructor() {
//         this.goods = [];
//         this.filteredGoods = [];
//     }
//     // fetchGoods() {
//     //     this.goods = [
//     //         { title: 'short', price: 10 },
//     //         { title: 'short', price: 10 },
//     //         { title: 'short', price: 10 },
//     //         { title: 'short', price: 10 },
//     //         { title: 'short', price: 10 },
//     //         { title: 'short', price: 10 },
//     //         { title: 'short', price: 10 },
//     //         { title: 'short', price: 10 },
//     //         { title: 'short', price: 10 },
//     //         { title: 'short', price: 10 },
//     //         { title: 'short', price: 10 },
//     //         { title: 'short', price: 10 }
//     //     ]
//     // }
//     fetchGoods(cb) {
//         makeGETRequest(`${API_URL}/catalogData.json`, (goods)=> {
//             this.goods = JSON.parse(goods);
//             this.filteredGoods=JSON.parse(goods);
//             console.log(this.goods);
//             console.log(goods);
//             cb();
// })

//      }
//     renderGoodsList() {
//         let goodsList = '';
//         this.filteredGoods.forEach(good => {
//             const goodsItem = new GoodItem(good.id_product, good.product_name, good.price);
//             goodsList +=goodsItem.render();

//         })
          
//     document.querySelector('.good-list').innerHTML = goodsList;
//     }
//     finishCost() {
//        var finCostCart=0;
//         this.goods.forEach(good => {
//             finCostCart += good.price;
//         })
//         document.querySelector('.finishCost').innerHTML = finCostCart;
       
//     }
//     filterGoods(value) {
//         const regexp = new RegExp(value, 'i');
//         this.filteredGoods = this.goods.filter(good =>
//             regexp.test(good.product_name));
//         this.renderGoodsList();

//     }
// }
// const searchButton = document.querySelector('.search');
// const searchInput=document.querySelector('.searchGood');
// searchButton.addEventListener('click', (e) => {
//     const value = searchInput.value;
//     list.filterGoods(value);
// })
// const list = new GoodList();
// list.fetchGoods(() => {
//     list.renderGoodsList();
//     list.finishCost();
// });
const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
const statusServer = '';
const app = new Vue({
    el: '#app',
    data: {
        goods: [],
        filteredGoods: [],
        cart:[],
        searchInput: '',
        isVisibleCart: false
    },
    methods: {
        
        makeGetRequest(url, callback) {
            const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
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
            if (xhr.status == '404' & xhr.status == '500') {
                statusServer = 'Сервер не доступен';
                return statusServer;
            }

            xhr.open('GET', url, true);
            xhr.send();
        },
        filterGoods() {
            const regexp = new RegExp(searchInput, 'i');
            this.filteredGoods = this.goods.filter(good =>
            regexp.test(good.product_name));
        
        },
       addHandler(id) {
            const good = this.goods.find(good => good.id_product === id_product)
            this.cart.push(good);

            console.log(this.cart)
        },
       filterGoods(value) {
        const regexp = new RegExp(value, 'i');
        this.filteredGoods = this.goods.filter(good =>
            regexp.test(good.product_name));
        this.renderGoodsList();

        },
        repaintPage() {
           //тут должен быть код изменения страницы с основной на корзину
       }
    },
     mounted() {
        this.makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
            this.goods = goods;
            this.filteredGoods = goods;
            
        })
    },
    
})

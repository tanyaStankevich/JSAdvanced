const API_URL='https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'

const searchButton = document.querySelector('.searchBut');
    const searchInp = document.querySelector('.searchInp');
    searchButton.addEventListener('click', (e) => {
    const value = searchInp.value;
    list.filterGoods(value);
    })

const butAdd = document.querySelector('.add');
butAdd.addEventListener('click', (e) => {
   
        makeGETRequest(`${API_URL}/addToBasket.json`, (result) => {
            console.log(result);
            this.result = JSON.parse(result);
            result +=1;
            makePOSTRequest(`${API_URL}/addToBasket.json`, (result) => {
                this.result = JSON.stringify(result);
                return result;
            })
        })
    
});

const butDel = document.querySelector('.del');
butDel.addEventListener('click', (e) => {
  
        makeGETRequest(`${API_URL}/addToBasket.json`, (result) => {
            console.log(result);
            this.result = JSON.parse(result);
            result -=1;
            makePOSTRequest(`${API_URL}/addToBasket.json`, (result) => {
                this.result = JSON.stringify(result);
                return result;
            })}
    )
});    

const app = new Vue({
    el: '#app',
    data: {
        goods: [],
        filterGoods: [],
        cart: [],
        contents:[],
        searchInp: '',
        countGoods: null,
        amount:null
    },
    methods: {
        makeGETRequest(url, callback) {
    
       var xhr;
        if(window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
            } else if (window.ActiveXObject) {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    
        xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
        callback(xhr.responseText);
        }
    }
    xhr.open('GET', url, true);
    xhr.send();
    
    
    },

    makePOSTRequest(url, callback) {
    
       var xhr;
        if(window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
            } else if (window.ActiveXObject) {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    
        xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
        callback(xhr.responseText);
        }
        }
        xhr.open('POST', url, true);
        xhr.setRequestHeader('ContentType', 'application/json; charset=UTF-8')
        xhr.send();
        
        
        }
    },
     filterGoods(value) {
        const regexp = new RegExp(value, 'i');
        
        this.filteredGoods = this.goods.filter(good => {
            regexp.test(good.product_name);
            //this.renderListGoods();
        })
    },
     
    mounted() {
        
        this.makeGETRequest(`/catalogData`, (goods) => {
           
            this.goods = goods;
            console.log(this.goods);
            this.filteredGoods = goods;
            console.log(this.filteredGoods);
        }),
           
        this.makeGETRequest(`${API_URL}/getBasket.json`, (cart) => {
           
            this.cart = cart;
            console.log(this.cart);
            this.contents =  cart.contents;
            console.log(this.contents);
            countGoods = cart.countGoods;
            amount = cart.amount;
     
        })
    
    
    },
   
})

import module from './module.js'
const calc = module.calc;
console.log(calc(2, 3));


// class GoodsItem{
//     constructor(id_product, product_name, price) {
//         this.id_product=id_product,
//         this.product_name = product_name;
//         this.price = price;
//     }
    
//     renderGoodsItem() {
//         return `<div class="goods-item"><p>${this.id_product}</p><h3>${this.product_name}</h3><p>${this.price}</p><button class='add' type='button'>+</button><button class='del' type='button'>-</button></div>`
//     }
    
// }
// class CartItem {
//     constructor(id_product, product_name, price,quantity) {
//         this.id_product=id_product,
//         this.product_name = product_name;
//         this.price = price;
//         this.quantity = quantity;
//     }
//     renderGoodsCart (){
//   return `<div class="goods-item"><p>${this.id_product}</p><h3>${this.product_name}</h3><p>${this.price}</p><p>${this.quantity}</p><button class='add' type='button'>+</button><button class='del' type='button'>-</button></div>`  
//     }
// }

// class GoodsList{
//     constructor(goods) {
//         this.goods = [];
//         this.filteredGoods = [];
//     }
    
//     filterGoods(value) {
//         const regexp = new RegExp(value, 'i');
        
//         this.filteredGoods = this.goods.filter(good => {
//             regexp.test(good.product_name);
//             this.renderListGoods();
//         })
//     }
    

//     // renderListGoods() {
//     //     let listHTML = '';
//     //     this.filteredGoods.forEach(good => {
//     //         const goodItem = new GoodsItem(good.id_product, good.product_name, good.price);
//     //         listHTML += goodItem.renderGoodsItem();
//     //     })
//     //     document.querySelector('.good-list').innerHTML = listHTML;
//     // }
    
// }
    





// class Cart {
//     constructor(cart) {
//         this.cart = [];
//         this.contents = [];
//         let result = 0;
//     }

    

//     // renderCart() {
//     //     let listHTML = '';
        
//     //     this.contents.forEach(good => {
//     //         const goodCart = new CartItem(good.id_product, good.product_name, good.price, good.quantity);
//     //         listHTML += goodCart.renderGoodsCart();
//     //     })
//     //     document.querySelector('.good-cart').innerHTML = listHTML;
        
//     // }
    
    
// }

// const list = new GoodsList();
// list.fetchGoods(() => {
//   list.renderListGoods();
  
// });

// const listCart = new Cart();
// listCart.fetchCart(() => {
//   listCart.renderCart();
  
// });






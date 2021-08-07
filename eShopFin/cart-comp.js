Vue.component('cart-comp', {
    prop: [],
    template:
        `<div>
        <div class="goods-item" v-for='item in contents'>
            <p>{{item.id_product}}</p>
            <h3>{{item.product_name}}</h3>
            <p>{{item.price}}</p>
            <p>{{item.quantity}}</p>
            <button class='add' type='button'>+</button>
            <button class='del' type='button'>-</button>
        </div>
        <button class="cart-button">Корзина</button>
        <p class="count">{{countGoods}}</p>
        <p class="cost">{{amount}}</p>
    </div>`
})
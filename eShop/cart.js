Vue.component('cart-comp', {
    props: [cart],
    template:`<div class="finishCost">
            <button type="button" class="cartBut">Корзина</button><span>{{cart.length}}</span></div>`
})
Vue.component('goods-item', {
    props: ['good'],
    template:
    `<div class="goods-item">
            <p>{{good.id_product}}</p>
            <h3>{{good.product_name}}</h3>
            <p>{{good.price}}</p>
            <button class='add' type='button'>+</button>
            <button class='del' type='button'>-</button>
        </div> `

})
Vue.component('goods-item', {
    props:[good],
    template:`<div class='goodsItem' v-for='good in filteredGoods' v-on:click='addHandler'>
                <p class='goodsP'>{{good.id_product}}</p>
                <h3 class='goodsH'>{{good.product_name}}</h3>
                <p class='goodsP'>{{good.price}}</p>
            </div>`,
     methods: {
        addHandler() {
            this.$emit('add', this.good.id)
        }
    }
})
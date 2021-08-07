Vue.component('goods-list', {
    props: ['goods'],
    template: 
         `<div class="good-list">
        <goods-item v-for='good in goods' v-bind:good='good'></goods-item>
        </div>`
    
})
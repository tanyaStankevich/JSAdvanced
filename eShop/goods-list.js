Vue.component('goods-list', {
    props: [goods],
    template: `<div class="good-list" v-if='goods.length!=0'>
    <goods-item v-for='good in goods' v-bind:good='good' v-on:click='addHandler'></div>`,
    methods: {
        addHandler(id) {
            this.$emit('add', id)
        }
    }
    // methods: {
    //     addHandler(id) {
    //         this.$emit('add', id)
    //     }
    // }
})
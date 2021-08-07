Vue.component('search-comp', {
    props:'searchInput',
    template: `<div><input type="text" class="searchGood" v-model='searchInput'>
            <button type="button" class="search" v-on:click='filteredGoods'>Искать</button></div>`
})
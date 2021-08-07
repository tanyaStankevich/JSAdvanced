Vue.component('search-comp', {
    props: ['searchInp'],
    template:
    `<div class="search-comp"><input type="text" class="searchInp"></input>
            <button class="searchBut" type="button">Искать</button>
        </div>`
})
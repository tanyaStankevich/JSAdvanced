Vue.component('error-comp', {
    props: 'statusServer',
    template:`<div class="error">{{statusServer}}</div>`,
})
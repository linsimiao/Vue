import Vue from 'vue'
import App from './App'
import Hello from './components/Hello'
import Hi from './components/Hi'
import SimpleGrid from './components/SimpleGrid'
Vue.use(require('vue-resource'))
Vue.use(require('vue-router'))
/* eslint-disable no-new */
new Vue({
          el: 'body',
          components: { App }

})
//
// new Vue({
//     el: '#app',
//     components:{
//         'hello': Hello
//     },
// })


Vue.component('mine',{
    template : '#mineTpl',
    props : ['name']
});

Vue.component('childs',{
    props : ['myMessage'],
    template : '<span>{{myMessage}}</span>'
});
new Vue({
    el : "#example2"
});


// var V = new Vue({
//     el : '#vueInstance',
//     data :{
//         name:"f"
//     }
// });





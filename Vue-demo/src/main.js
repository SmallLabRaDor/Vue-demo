import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResoure from 'vue-resoure'
Vue.use(VueRouter)
// Vue.use(VueResoure)
const Second1 = {template:`<div><h5>first item page</h5></div>`}
import secondComponents from "./components/second.vue"

const router = new VueRouter({
   mode:"history",
    base:__dirname,
    routes:[
        {
            path:"/first",
            component:Second1
        },
        {
            path:"/second",
            component:secondComponents
        }
    ]
})

new Vue({
    router,
  el: '#app',
  render: h => h(App)
})

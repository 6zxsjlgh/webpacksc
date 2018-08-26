
  //导入vue
import Vue from 'vue'
  //vueroutes
 import VueRouter from  "vue-router"
  //vue本地 
import App from './App.vue'
  //01 vue的组件
import Index from  "./components/01.index.vue"
//轮播图
import ElementUI from 'element-ui';
//轮播图样式
import 'element-ui/lib/theme-chalk/index.css'

//懒加载
import VueLazyload from 'vue-lazyload'

//中间
Vue.use(VueLazyload,{
  loading:require('../dist/img/06.jpg'),
  error:require('../dist/img/18.jpg'),
  preLoad: 1.3,
})

Vue.use(ElementUI);

Vue.config.productionTip = false

Vue.use(VueRouter)

let  routes = [
  {
     path: "/",
     redirect:"/index",  
   },
   {
     path:"/index",
     component:Index,
   }
]
let  router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})
// Vue.use(VueLazyload, {
//   preLoad: 1.3,
//   error: 'dist/error.png',
//   loading: 'dist/loading.gif',
//   attempt: 1
// })



new Vue({
  render: h => h(App),
  router
}).$mount('#app')


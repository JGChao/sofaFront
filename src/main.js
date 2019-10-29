import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './assets/css/rem.css'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'

Vue.config.productionTip = false;
Vue.use(Mint);

router.beforeEach((to,from,next)=>{
    document.title = to.meta.title;
    if(to.meta.requireAuth){
      let usertoken = sessionStorage.getItem('token');
        if(usertoken && usertoken!= ''){
            next();
        }else{
            next({
              name:'login',
              query:{redirect:to.fullPath}
            })
        }
    }else {
      next();
    }
  // requireAuth redirect
});






new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

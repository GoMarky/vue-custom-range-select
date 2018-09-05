import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueClickoutside from './directives/click-outside'

Vue.config.productionTip = false
Vue.use(VueClickoutside)

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')

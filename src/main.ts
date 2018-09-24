import Vue from 'vue'
import App from './App.vue'
import VueClickoutside from './directives/click-outside'

Vue.config.productionTip = false
Vue.use(VueClickoutside)

new Vue({
    render: h => h(App)
}).$mount('#app')

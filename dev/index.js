import Vue from 'vue'
import App from './App.vue'
import VueCustomRangeSelect from './../src/index'

Vue.use(VueCustomRangeSelect);

// eslint-disable-next-line
new Vue({
    el: '#app',
    render: h => h(App)
});

Vue.config.devtools = true;
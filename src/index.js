import VueCustomRangeSelect from './components/VueCustomRangeSelect'

// Install the components
export function install(Vue, options) {
    Vue.component(VueCustomRangeSelect.name, {
        ...options,
        ...VueCustomRangeSelect
    })
}

export {
    VueCustomRangeSelect
}

const plugin = {
    /* eslint-disable no-undef */
    version: VERSION,
    install
}

export default plugin

let GlobalVue = null
if (typeof window !== 'undefined') {
    GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue
}
if (GlobalVue) {
    GlobalVue.use(plugin)
}

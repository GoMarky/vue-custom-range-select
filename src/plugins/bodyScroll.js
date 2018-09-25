import {disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks} from 'body-scroll-lock'

export default {
    install (Vue) {
        Vue.prototype.$bodyLock = {
            enable (elem) {
                enableBodyScroll(elem)
            },
            disable (elem) {
                disableBodyScroll(elem)
            },
            clear () {
                clearAllBodyScrollLocks()
            }
        }
    }
}

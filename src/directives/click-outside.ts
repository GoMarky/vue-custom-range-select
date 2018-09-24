export default {
    id: 'clickoutside',
    bind (el: any, props: any) {
        el.clickCatcher = function (e: any) {
            if (props.modifiers.hidden) { //.hidden modifier is required when target component is hidden using v-if or v-show
                props.modifiers.hidden = false;
                return;
            }
            if (!el.contains(e.target) && typeof props.value == 'function') {
                props.value(props.arg);
            }
        }
        window.addEventListener('click', el.clickCatcher);
    },
    unbind: (el: any) => window.removeEventListener('click', el.clickCatcher),
    install (Vue: any) {
        Vue.directive('clickoutside', {
            bind: this.bind,
            unbind: this.unbind
        });
    }
};
<template lang="pug">
    div#app
        vue-custom-range-select(
        v-bind:options="options")
</template>

<script lang="ts">
    import VueCustomRangeSelect from '@/components/VueCustomRangeSelect.vue'
    import Vue from 'vue'

    export default Vue.extend({
        data() {
            return {
                options: [1, 2, 3, 4, 5, 6, 7, 8,]
            }
        },
        computed: {
            value(): string|number {
                return this.options[0];
            }
        },
        components: {
            VueCustomRangeSelect
        }
    })


</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        color: #2c3e50;
    }
</style>

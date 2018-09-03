<template lang="pug">
    div#app
        vue-custom-range-select(
        v-on:input="setValue"
        v-bind:value="value"
        v-bind:options="options"
        itemLabel="text"
        itemValue="text")
</template>

<script lang="ts">
    import VueCustomRangeSelect from '@/components/VueCustomRangeSelect.vue'
    import Vue from 'vue'

    export default Vue.extend({
        data () {
            return {
                options: [{
                    value: 1,
                    text: 'first'
                },
                    {
                        value: 2,
                        text: 'second'
                    },
                    {
                        value: 3,
                        text: 'third'
                    }]
            }
        },
        methods: {
            setValue (val: string) {
                console.log(val)
            }
        },
        computed: {
            value (): object {
                return this.options[0]
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

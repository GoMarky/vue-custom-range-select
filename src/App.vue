<template lang="pug">
    div#app
        vue-custom-range-select(
        v-on:input="setValue"
        v-bind:value="value"
        v-bind:options="options"
        itemLabel="text"
        itemValue="text")
        div.result {{ output }}
</template>

<script lang="ts">
    import VueCustomRangeSelect from '@/components/VueCustomRangeSelect.vue'
    import Vue from 'vue'

    export default Vue.extend({
        data () {
            return {
                options: [{
                    value: 'fdatedesc',
                    text: 'first'
                },
                    {
                        value: 'fdatefrom',
                        text: 'second'
                    },
                    {
                        value: 'selectfrom',
                        text: 'third'
                    }],
                output: ''
            }
        },
        methods: {
            setValue (val: string) {
                this.output = val
            }
        },
        computed: {
            value (): object {
                return this.options[1]
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

    .result {
        margin-top: 60px;
    }

</style>

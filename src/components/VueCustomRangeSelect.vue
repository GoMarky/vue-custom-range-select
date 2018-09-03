<template lang="pug">
    include ../helpers/pug/mixins.pug

    +b.vcr-select(
    v-bind:id="selectID")
        +e.INPUT.current-value(
        type="text"
        v-bind:placeholder="placeholder"
        v-bind:value="currentValue")
        +e.UL.list
            +e.LI.item(v-for="item in options")
                +e.BUTTON.item-button(
                type="button"
                v-on:click="setValue(item)") {{ item }}
</template>

<script lang="ts">
    import Vue from 'vue'
    import helper from '../helper'

    export default Vue.extend({
        name: 'VueCustomRangeSelect',
        data () {
            return {
                selectID: `vue-custom-range-select-${helper.randomString(5)}`,
                currentValue: ''
            }
        },
        methods: {
            setValue (val: any) {
                this.currentValue = val
            }
        },
        computed: {},
        props: {
            value: {
                type: [String, Object, Array],
                required: false,
                default: null
            },
            options: {
                type: Array,
                required: false,
                default() {
                    return []
                }
            },
            disabled: {
                type: Boolean,
                default: false
            },
            maxHeight: {
                type: String,
                default: '400px'
            },
            isSearchable: {
                type: Boolean,
                default: true
            },
            multiple: {
                type: Boolean,
                default: false
            },
            placeholder: {
                type: String,
                default: ''
            },
            label: {
                type: String,
                default: 'label'
            },
            onChange: {
                type: Function,
                default(val: any) {
                    this.$emit('input', val)
                }
            },
            dir: {
                type: String,
                default: 'auto'
            },
            fullScreenMobile: {
                type: Boolean,
                default: true
            }
        }
    })
</script>

<style lang="scss">

    ul {

    }

    li {

    }

</style>

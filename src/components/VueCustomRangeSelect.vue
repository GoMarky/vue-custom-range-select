<template lang="pug">
    include ../helpers/pug/mixins.pug

    +b.vcr-select(
    v-bind:style="dropDownStyles"
    v-bind:id="selectID")
        +e.select-wrapper(v-on:click="toggleMenu")
            +e.SPAN.selected {{ currentValue.label }}
            +e.INPUT.current-value(
            v-if="isSearchable"
            type="search"
            v-bind:placeholder="placeholder"
            v-model="searchValue")
            +e.UL.list(v-show="isOpenMenu")
                +e.LI.item(v-for="item in currentValues")
                    +e.BUTTON.item-button(
                    type="button"
                    v-on:click="setValue(item)") {{ item.label }}

</template>

<script lang="ts">
    import Vue from 'vue'
    import helper from '../helper'

    export default Vue.extend({
        name: 'VueCustomRangeSelect',
        data () {
            return {
                selectID: `vue-custom-range-select-${helper.randomString(5)}`,
                currentValue: {
                    label: '',
                    value: ''
                },
                searchValue: '',
                isOpenMenu: false
            }
        },
        methods: {
            setValue (val: any) {
                this.currentValue = val
            },
            toggleMenu () {
                this.isOpenMenu = !this.isOpenMenu
            }
        },
        computed: {
            currentValues (): any {
                return this.$props.options
                    .map((it: any) => {
                        return {
                            value: it.value,
                            label: it[this.$props.itemLabel]
                        }
                    })
            },
            isHavingValue (): boolean {
                return this.currentValue.label.length > 0
            }
        },
        props: {
            value: {
                type: [String, Object, Array],
                required: false,
                default: null
            },
            options: {
                type: Array,
                required: false,
                default () {
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
                default: false
            },
            multiple: {
                type: Boolean,
                default: false
            },
            placeholder: {
                type: String,
                default: ''
            },
            itemValue: {
                type: String,
                default: 'value'
            },
            itemLabel: {
                type: String,
                default: 'label'
            },
            dir: {
                type: String,
                default: 'auto'
            },
            fullScreenMobile: {
                type: Boolean,
                default: true
            },
            dropDownStyles: {
                type: Object,
                required: false,
                default () {
                    return {}
                }
            }
        }
    })
</script>

<style lang="scss">

    .vcr-select {
        width: 380px;
        border: 1px solid #bbbdc0;
    }

    .vcr-select * {
        box-sizing: border-box;
    }

    .vcr-select__selected {
        display: block;
        width: 100%;
        height: 40px;
        background-color: #ffffff;
        padding: 10px 15px;
        font-size: 16px;
        cursor: pointer;
    }

    .vcr-select__select-wrapper {

    }

    .vcr-select__list {
        list-style: none;
        margin: 0;
        padding: 0 10px;
    }

    .vcr-select__item {
        margin: 0;
        border-top: 1px solid #cccccc;
    }

    .vcr-select__item-button {
        background: none;
        border: none;
        height: 40px;
        margin: 0;
        padding: 10px 15px;
        font-size: 16px;
        color: #222222;
        width: 100%;
        text-align: left;
        display: block;
        cursor: pointer;

        &:hover {
            background-color: #e1f5f7;
        }
    }

</style>

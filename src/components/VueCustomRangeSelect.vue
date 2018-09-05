<template lang="pug">
    include ../helpers/pug/mixins.pug

    +b.vcr-select(
    v-bind:dir="dir"
    v-bind:style="dropDownStyles"
    v-bind:id="selectID"
    v-clickoutside="outsideClick")
        +e.select-wrapper
            +e.input-wrapper
                +e.SPAN.current-value {{ currentValue.label || value[itemLabel] }}
                +e.INPUT.selected(
                type="search"
                ref="search"
                tabindex="1"
                v-on:keyup.esc="onEscape"
                v-on:focus="onSearchFocus"
                v-on:blur="onSearchBlur"
                v-on:click="toggleMenu"
                v-on:keydown.up.prevent="stepUp"
                v-on:keydown.down.prevent="stepDown"
                v-on:keyup.enter="toggleMenu"
                v-bind:placeholder="placeholder"
                v-bind:readonly="!isSearchable"
                v-model="currentValue.label || value[itemLabel]")
                +e.SVG.toggle-icon#arrow(
                width="12px"
                height="6px"
                fill="#bbbdc0"
                viewBox="0 0 6 3")
                    polygon(points="0 0 3 3 6 0 0 0")
            +e.UL.list(v-show="isOpen")
                +e.LI.item(v-for="item in currentValues")
                    +e.BUTTON.item-button(
                    type="button"
                    v-bind:class="{'vcr-select__item-button_current' : item.value === currentOption.value}"
                    v-on:mousedown.prevent="setValue(item)") {{ item.label }}

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
                isOpen: false,
                isSearching: false,
                inFocus: false,
                currentOptionIndex: 0
            }
        },
        methods: {
            setValue (val: any) {
                this.currentValue = val
                this.$emit('input', val.value)
                this.closeMenu()
            },
            toggleMenu () {
                if (this.isOpen) {
                    this.currentValue = this.currentOption
                    this.$emit('input', this.currentValue.value)
                }

                this.isOpen = !this.isOpen
            },
            openMenu () {
                if (this.inFocus) {
                    this.isOpen = true
                }
            },
            closeMenu () {
                this.isOpen = false
            },
            onSearchBlur () {
                this.inFocus = false

                if (!this.isSearching) {
                    this.closeMenu()
                }
            },
            onSearchFocus () {
                this.inFocus = true
            },
            outsideClick () {
                this.closeMenu()
            },
            onEscape () {
                this.closeMenu()
            },
            stepUp () {
                if (this.currentOptionIndex > 0) {
                    this.currentOptionIndex -= 1
                }
            },
            stepDown () {
                if (this.currentOptionIndex < this.currentValues.length - 1) {
                    this.currentOptionIndex += 1
                }
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
            },
            currentOption (): any {
                return this.currentValues[this.currentOptionIndex]
            },
            valuesAsArray (): any {
                return this.currentValues
                    .map((it: any) => {
                        return it.value
                    })
            }
        },
        props: {
            nativeMode: {
                type: Boolean,
                required: false,
                default: false
            },
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
            },
            optionHoverStyles: {
                type: Object,
                required: false,
                default () {
                    return {
                        backgroundColor: '#e1f5f7'
                    }
                }
            }
        }
    })
</script>

<style lang="scss">

    .vcr-select {
        width: 380px;
        margin-left: 20px;
    }

    .vcr-select * {
        box-sizing: border-box;
    }

    .vcr-select__toggle-icon {
        position: absolute;
        top: 40%;
        pointer-events: none;
        right: 15px;
    }

    .vcr-select__current-value {
        position: absolute;
        left: 15px;
        top: 10px;
        font-size: 16px;
    }

    .vcr-select__selected, .vcr-select__selected:focus {
        display: block;
        width: 100%;
        height: 40px;
        background: none;
        background-color: #ffffff;
        padding: 10px 15px;
        cursor: pointer;
        font-size: 0;
        outline: none;
        box-shadow: inset 0 0 0 0 red;
        border: 1px solid #bbbdc0;

        &:focus {
            border-color: #0cc7ff;
        }
    }

    .vcr-select__select-wrapper {
        position: relative;
    }

    .vcr-select__input-wrapper {
        position: relative;
    }

    .vcr-select__list {
        position: absolute;
        z-index: 2;
        top: 40px;
        left: 0;
        list-style: none;
        margin: 0;
        width: 380px;
        padding: 0 10px;
        background-color: #ffffff;
        border-left: 1px solid #bbbdc0;
        border-right: 1px solid #bbbdc0;
        border-bottom: 1px solid #bbbdc0;
    }

    .vcr-select__item {
        margin: 0;
        border-top: 1px solid #cccccc;

        &:first-child {
            border-top: 0;
        }
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

        &_current {
            background-color: #e1f5f7;
        }
    }

</style>

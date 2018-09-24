<template lang="pug">
    include ../helpers/pug/mixins.pug

    +b.vcr-select(
    v-bind:dir="dir"
    v-bind:style="dropDownStyles"
    v-bind:id="selectID"
    v-clickoutside="outsideClick")
        +e.select-wrapper(v-bind:class="{'vcr-select__select-wrapper_height_full': bindMaxHeight }")
            +e.overlay(v-show="isOpen && fullScreenMobile && !isSearchable")
            +e.input-wrapper
                +e.SPAN.current-value(v-if="isSearching") {{ currentValue.label }}
                +e.INPUT.selected(
                type="text"
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
                v-bind:disabled="disabled"
                v-bind:readonly="!isSearchable"
                v-model="currentValue.label")
                +e.SVG.toggle-icon#arrow(
                width="12px"
                height="6px"
                fill="#bbbdc0"
                viewBox="0 0 6 3")
                    polygon(points="0 0 3 3 6 0 0 0")
            +e.UL.list(
            v-show="isOpen"
            ref="searchList"
            v-bind:class="{'vcr-select__list_offset_top_medium' : !isSearchable || fullScreenMobile }"
            v-bind:style="dropDownListStyles")
                +e.LI.item(v-for="item in currentValues")
                    +e.BUTTON.item-button(
                    type="button"
                    v-bind:class="{'vcr-select__item-button_current' : item.value === currentOption.value && isNavigateStart}"
                    v-on:mousedown.prevent="setValue(item)") {{ item.label }}
                +e.LI.item(v-if="!currentValues.length")
                    +e.SPAN.item-button._no_pointer No matched values found

</template>

<script lang="ts">
    import Vue from 'vue'
    import helper from '../helper'

    const $bodyLock = require('body-scroll-lock')

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
                currentOptionIndex: 0,
                isNavigateStart: false,
                isMobile: window.innerWidth <= 1024
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
                    if (this.$props.isSearchable) {

                    } else {
                        if (this.$props.fullScreenMobile && this.isMobile) {
                            $bodyLock.enableBodyScroll((this.$refs['searchList'] as HTMLElement))
                        }
                    }

                    this.isNavigateStart = false
                    this.currentValue = this.currentOption
                    this.$emit('input', this.currentValue.value)
                } else {
                    if (this.$props.isSearchable) {

                    } else {
                        if (this.$props.fullScreenMobile && this.isMobile) {
                            $bodyLock.enableBodyScroll((this.$refs['searchList'] as HTMLElement))
                        }
                    }
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

                if (this.$props.fullScreenMobile && this.isMobile) {
                    $bodyLock.enableBodyScroll((this.$refs['searchList'] as HTMLElement))
                }
                this.isNavigateStart = false
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

                if (this.$props.isSearchable) {

                } else {
                    if (this.$props.fullScreenMobile && this.isMobile) {
                        $bodyLock.enableBodyScroll((this.$refs['searchList'] as HTMLElement))
                    }
                }

                this.isNavigateStart = false
            },
            onEscape () {
                this.closeMenu()

                if (this.$props.isSearchable) {

                } else {
                    if (this.$props.fullScreenMobile && this.isMobile) {
                        $bodyLock.enableBodyScroll((this.$refs['searchList'] as HTMLElement))
                    }
                }
            },
            stepUp () {
                this.isNavigateStart = true
                if (this.currentOptionIndex > 0) {
                    this.currentOptionIndex -= 1
                }
            },
            stepDown () {
                this.isNavigateStart = true
                if (this.currentOptionIndex < this.currentValues.length - 1) {
                    this.currentOptionIndex += 1
                }
            }
        },
        watch: {
            currentValue: {
                handler (val) {
                    this.searchValue = val.label
                },
                deep: true
            }
        },
        computed: {
            bindMaxHeight (): boolean {
                return (this.isOpen &&
                    this.isMobile &&
                    this.$props.fullScreenMobile)
            },
            currentValues (): any {
                let array = this.$props.options

                array = array
                    .map((it: any) => {
                        return {
                            value: it.value,
                            label: it[this.$props.itemLabel]
                        }
                    })

                if (this.$props.deleteDouble) {
                    array = array.reduce((arr: any, item: any) => {
                        const removed = arr.filter((i: any) => i.value !== item.value)
                        return [...removed, item]
                    }, [])
                }

                if (this.$props.isSearchable) {
                    array = array.filter((it: any) => {
                        return it.label.indexOf(this.searchValue) !== -1
                    })
                }

                return array
            },
            isHavingValue (): boolean {
                return this.currentValue.label.length > 0
            },
            currentOption (): any {
                return this.currentValues[this.currentOptionIndex]
            },
            currentIndex (): number {
                return this.valuesAsArray.indexOf(this.currentValue.value)
            },
            valuesAsArray (): any {
                return this.currentValues
                    .map((it: any) => {
                        return it.value
                    })
            },
            dropDownListStyles (): object {
                return {
                    width: this.$props.width
                }
            },
            dropDownStyles (): object {
                return {
                    width: this.$props.width
                }
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
            deleteDouble: {
                type: Boolean,
                required: false,
                default: true
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
                required: false,
                default: true
            },
            width: {
                type: String,
                required: false,
                default: null
            }
        }
    })
</script>

<style lang="scss">
    .vcr-select {
        margin-left: 20px;
        width: 300px;
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
        pointer-events: none;
    }

    .vcr-select__selected, .vcr-select__selected:focus {
        display: block;
        width: 100%;
        height: 40px;
        background: none;
        background-color: #ffffff;
        padding: 10px 15px;
        cursor: pointer;
        outline: none;
        box-shadow: inset 0 0 0 0 red;
        border: 1px solid #bbbdc0;

        &:disabled {
            opacity: 0.5;
        }

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
        width: 300px;
        top: 40px;
        left: 0;
        list-style: none;
        margin: 0;
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

        &_no_pointer {
            cursor: default;
            pointer-events: none;
        }
    }

    .vcr-select__overlay {
        display: none;
    }

    @media (min-width: 320px) and (max-width: 1024px) {
        .vcr-select {

        }

        .vcr-select__current-value {

        }

        .vcr-select__selected {

        }

        .vcr-select__overlay {
            display: block;
            position: fixed;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            background: #000;
            z-index: 1;
            opacity: .8;
        }

        .vcr-select__select-wrapper {

            &_height_full {
                overflow: hidden;
                min-height: 100vh;
            }

        }

        .vcr-select__list {
            padding-top: 10px;
            padding-bottom: 10px;
            border-radius: 10px;
            overflow: auto;
            top: 40px;
            max-height: 50vh;

            &_offset_top_medium {
                top: 20%;
            }

            &_offset_top_small {
                top: 40px;
            }
        }

    }
</style>

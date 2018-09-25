<template lang="pug">
    div.app
      vue-custom-range-select(v-bind:options="options")
</template>

<script>

    export default {
        data () {
            return {
                options: [
                    {
                        label: 'First',
                        value: 'First'
                    },
                    {
                        label: 'Second',
                        value: 'Second'
                    },
                    {
                        label: 'Third',
                        value: 'Third'
                    }
                ]
            }
        },
        methods: {},
    }
</script>

<style lang="scss">
    html,
    body {
        min-height: 200vh;
        font-size: 14px;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        line-height: 18px;
        font-weight: 400;
        -webkit-font-smoothing: antialiased;
        padding: 10px;
    }

    .app {
        &.align-right {
            text-align: right;
        }
    }

    h1 {
        font-size: 1.8em;
        line-height: 1.5em;
    }

    .datepicker-container {
        margin-bottom: 30px;
    }

    #datepicker-button-trigger {
        background: #008489;
        border: 1px solid #008489;
        color: white;
        padding: 6px 10px;
        border-radius: 4px;
        font-size: 15px;
        font-weight: bold;
        text-align: center;
        min-width: 200px;
    }

    input {
        padding: 6px 10px;
        border: 1px solid rgba(0, 0, 0, 0.2);
    }

    .with-input {
        .datepicker-trigger {
            //padding-right: 40px;
        }
    }

    .with-button {
        .datepicker-trigger {
            //padding-left: 10px;
        }
    }

    // .inline-with-input {
    //   width: 600px;
    //   input {
    //     width: 100%;
    //   }
    // }
</style>

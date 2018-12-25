<template>
    <div class="mzl-input-warpper">
        <input @input="addValue($event)" :placeholder="placeholder" :type="type">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        title: '输入框',
        data () {
            return {}
        },
        props: {
            placeholder: {
                type: String,
                default: ''
            },
            type: {
                type: String,
                default: 'text'
            }
        },
        methods: {
            addValue (e) {
                this.$emit('input', e.target.value)
            }
        }
    }
</script>

<template>
    <button type="button" class="btn" @click="confirm">
        <slot></slot>
    </button>
</template>
<script>
    export default {
        title: 'Button',
        data () {
            return {}
        },
        methods: {
            confirm () {
                this.$emit('click')
            }
        }
    }
</script>

<template>
    <div v-if="show" class="mzl-modal" style="display: flex;flex-direction: row; align-items: flex-start; justify-content: center;padding-top: 70px;">
        <div style="width: 600px;background-color: white;padding: 20px 25px;box-sizing: border-box;">
            <slot name="header">
                <div slot="header" class="modal-header">
                    <h1>提醒：系统操作</h1>
                </div>
            </slot>
            <slot name="content"></slot>
            <slot name="footer">
                <div class="modal-footer">
                    <Button class="btn-primary mt-10 btn" @click="confirm()">确定</Button>
                </div>
            </slot>
        </div>
    </div>
</template>
<script>
    import Button from '../components/Button'
    export default {
        name: 'modal',
        components: {
            Button
        },
        props: {
          show: {
              type: Boolean,
              default: true
          }
        },
        data () {
            return {}
        },
        methods: {
            confirm () {
                this.show = false
            },
            close () {
                this.show = false
            },
        }
    }
</script>
<style>
    .mzl-modal {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        left: 0;
    }

    .modal-header {
        border-bottom: 1px solid #B0B5B9;
        height: 30px;
    }

    .modal-content {
        min-height: 20px;
        padding: 5px 0;
    }

    .modal-footer {
        border-top: 1px solid #B0B5B9;
        text-align: right;
    }
</style>

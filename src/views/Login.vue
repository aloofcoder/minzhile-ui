<template>
    <div class="container-full" style="display: flex;flex-direction: column;">
        <div class="login-header">
        </div>
        <div class="login-content">
            <LoginForm></LoginForm>
        </div>
        <div class="login-footer">
        </div>
    </div>
</template>
<script>
    import LoginForm from '../components/LoginForm'
    export default {
        name: 'login',
        components: {
            LoginForm
        },
        data () {
            return {

            }
        }
    }
</script>

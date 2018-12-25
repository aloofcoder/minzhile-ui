<template>
    <div class="login-form">

        <div class="login-icon">
            {{loginTitle}}
        </div>
        <p v-if="error" class="mt-5 login-msg">{{errorMsg}}</p>
        <div class="mt-10" v-if="showRegister">
            <Input placeholder="请输入用户名" v-model="model.userNum" class="login-input mzl-input-icon-left">
                <span class="mzl-icon iconfont icon-user"></span>
            </Input>
        </div>
        <div class="mt-10" v-if="!showRegister">
            <Input placeholder="请输入登录账号" v-model="model.userNum" class="login-input mzl-input-icon-left">
                <span class="mzl-icon iconfont icon-user"></span>
            </Input>
        </div>
        <div class="mt-10">
            <Input  type="password" placeholder="请输入登录密码" v-model="model.userPwd" class="login-input mzl-input-icon-left" >
                <span class="mzl-icon iconfont icon-lock"></span>
            </Input>
        </div>
        <div class="mt-10" v-if="showRegister">
            <Input  type="password" placeholder="请确认登录密码" v-model="model.userPwd" class="login-input mzl-input-icon-left" >
                <span class="mzl-icon iconfont icon-lock"></span>
            </Input>
        </div>
        <Button class="login-btn btn-primary mt-10 btn-large" @click="confirm()">{{showRegister ? '注册' : '登录'}}</Button>
        <div class="mt-10 login-operate">
            <a href="#">
                <input id="rememberme" type="checkbox" style="width: 16px;height: 16px; display: inline-block;vertical-align: middle;margin-bottom: 2px;" @click="rememberMe">
                <label for="rememberme"> 记住我</label>
            </a>
            <a href="#" @click="register($event)">{{this.showRegister ? '登录' : '注册'}}<span class="iconfont icon-right"></span></a>
        </div>
    </div>
</template>
<script>
    import Input from '../components/Input'
    import Button from '../components/Button'
    export default {
        name: 'loginFrom',
        components: {
          Input,
          Button
        },
        data () {
            return {
                model: {
                    userNum: null,
                    userPwd: null
                },
                error: false,
                errorMsg: null,
                showRegister: false,
                loginTitle: '登录'
            }
        },
        methods: {
            confirm () {
                if (!this.model.userNum) {
                    this.error = true
                    this.errorMsg = '登录账号不能为空！'
                    return
                }
                if (!this.model.userPwd) {
                    this.error = true
                    this.errorMsg = '登录密码不能为空！'
                    return
                }
                this.error = false
                window.alert('登录成功！')
            },
            register (e) {
                this.error = false
                e.target.innerText === '注册' ? this.showRegister = true : this.showRegister = false
                this.loginTitle = e.target.innerText === '注册' ? '注册' : '登录'
            },
            rememberMe () {

            }
        }
    }
</script>

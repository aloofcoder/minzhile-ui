<template>
    <div class="" style="">
        <table>
            <thead>
            <th>序号</th>
            <th>姓名</th>
            <th>性别</th>
            <th>年龄</th>
            <th>地址</th>
            <th>操作</th>
            </thead>
            <tbody style="">
            <tr v-for="i in 5" :key="i">
                <td>{{i}}</td>
                <td>韩乐</td>
                <td>男</td>
                <td>21</td>
                <td>咸阳</td>
                <td>
                    <Button class="btn-primary btn-small">修改</Button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    import Button from './Button.vue'
    export default {
        title: 'Table',
        components: {
            Button
        },
        data () {
            return {}
        }
    }
</script>

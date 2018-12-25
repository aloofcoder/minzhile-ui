<template>
  <div id="app" style="height: 100%;">
    <div>
      <Input v-model="user_id" style="width: 300px;"></Input>
      <Input class="mzl-input-icon-right"><span class="iconfont icon-search"></span></Input>
      <Select v-model="user_name" :options="names" style="width: 300px;"></Select>
      <Button class="btn-calc btn-primary"><span class="iconfont icon-search"></span> 查询</Button>
    </div>
    <Table></Table>
  </div>
</template>

<script>
    import Select from './Select.vue'
    import Input from './Input.vue'
    import Table from './Table.vue'
    import Button from './Button.vue'
    export default {
        name: 'hello',
        components: {
            Select,
            Input,
            Table,
            Button
        },
        data () {
            return {
                user_name: '',
                user_id: '',
                names: [
                    {label: '全部', value: ''},
                    {label: 'php', value: 'php'},
                    {label: 'go', value: 'go'},
                    {label: 'ruby', value: 'ruby'},
                    {label: 'java', value: [1, 2, 4]}]
            }
        },
        watch: {
            user_id (val) {
                console.log(val, 'val')
            }
        }
    }
</script>

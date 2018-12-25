<template>
  <div class="container-full">
    <Login></Login>
    <!--<Table></Table>-->
  </div>
</template>

<script>
  import Login from './views/Login'
export default {
    name: 'app',
    components: {
        Login
    },
    data () {
      return {
          types: [
              {label: '身份证', value: 0},
              {label: '护照', value: 0},
              {label: '军官证', value: 0}
          ]
      }
    },
    mounted () {
    },
}
</script>

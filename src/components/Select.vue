<template>
    <div class="mzl-select-warpper" :class="{'mzl-select-border': show}" @click="showSelect($event)">
        <span class="mzl-select-palceholder">类型：</span>
        {{palceholder}}
        <i class="iconfont icon-caret-down"></i>
        <div class="mzl-select" v-if="show">
            <div v-for="i in options" :key="i.label" class="item" :class="{'mzl-select-item-bg': palceholder === i.label}" @click="focusItem($event, i)">{{i.label}}</div>
        </div>
    </div>
</template>
<script>
    export default {
        title: '选择框',
        data () {
            return {
                palceholder: '全部',
                show: false
            }
        },
        props: {
          options: {
              type: Array,
              default: function () {
                  return [{label: '全部', value: ''}]
              }
          }
        },
        created () {
            this.options.length <= 0 && (this.options = [{label: '全部', value: ''}])
            document.addEventListener('click', () =>{
                if (this.show) {
                    this.show = !this.show
                }
            })
        },
        methods: {
            showSelect (e) {
                console.log(this.options)
                e.stopPropagation()
                this.show = !this.show
            },
            focusItem(e, param) {
                this.palceholder = param.label
                this.$emit('input', param.value)
            }
        }
    }
</script>

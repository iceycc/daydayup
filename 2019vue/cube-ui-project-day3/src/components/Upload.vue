<template>
<input type="file" accept="image/*" @change="change" ref="show">
</template>


<script>
export default {
  methods:{
    change(e){
      let file = e.target.files[0];
      let fd = new FormData();
      fd.append('file',file);
      this.$emit('change',fd); // fileReader 兼容问题 blob
    },
    show(){
      this.$refs.show.click();
    }
  }
}
</script>

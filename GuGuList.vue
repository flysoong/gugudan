<template>
  <ul class="numlist">
    <li v-for="item in propsdata" :key="item" class="shadow">
      {{ inputNum }} x {{ item }} = {{ (inputNum * (item + 1)) }}
    </li>
  </ul>
</template>

<script>  
export default {
  props: {
    propItem: [], 
    propItemNum: Number
  }
  data() {
    return {
      items: []
    }
  }
}
</script>

<style>

</style>
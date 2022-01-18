<template>
  <div id="app">
    <GuGuHeader></GuGuHeader>
    <GuGuInput></GuGuInput>
    <GuGuList></GuGuList>
  </div>
</template>

<script>
import GuGuHeader from './GuGuHeader.vue'
import GuGuInput from './GuGuInput.vue'
import GuGuList from './GuGuList.vue'

export default {
  data() {
    return {
      items: []
    }
  },
  created() {
    for (var i = 1; i < 11; i++) {
      this.items.push(i);
    }
  },
  components: {
    'GuGuHeader': GuGuHeader,
    'GuGuInput': GuGuInput,
    'GuGuList': GuGuList
  }
}
</script>

<style>

</style>



<template>
  <div class="input">
    <label>원하는 구구단(1~10) : 
      <input type="number" v-model="inputNum" id="inNum" name="inNum" min="1" max="10">
    </label>
    &nbsp;
    <!-- <button class="print" @click="btnClick">실행</button> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputNum: 1
    }
  },
  watch: {
    inputNum: function(data) {
        console.log("inputNum : ", data);
    }
  }
}
</script>

<style scoped>
:root {
  --text-color: #e6e4e4;
  --background-color: #263343;
}
body {
  margin: 0;
  font-family: "Source Sans Pro";
}
.input {
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  background-color: var(--background-color);
  color: var(--text-color);
  width: 400px;
  padding: 8px 12px;
}
.Num {
  align-content: center;
}
</style>>

</style>
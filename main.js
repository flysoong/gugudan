import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
});

// let vm = new Vue({
//   el: '#app',
//   data: {
//     inputNum: 1,
//     items: [1, 2, 3, 4, 5, 6, 7, 8, 9]
//   },
//   // watch: {
//   //   inputNum: function(data) {
//   //       console.log("inputNum : ", data);
//   //   }
//   // },
//   methods: {
//     btnClick: function(){
//       console.log("click", this.inputNum);
//     }
//   }
// });
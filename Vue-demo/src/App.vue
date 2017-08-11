<template>
  <div id="app">
    <div><img src="./assets/logo.png" alt=""></div>
    <h1>{{msg1}}</h1>
    <h3>{{msg2}}</h3>
    <h4>{{msg3}}</h4>
    <first></first>
  </div>
</template>

<script>
  import first from "./components/first.vue"
  export default{
      name:"app",
      data(){
          return {
              msg1:"Hello Vue",
              msg2:"前端框架",
              msg3:"Vue是一个很强大的前端框架"
          }
      },
      components:{first}
  }
</script>

<style>
  h1,h3,h4{
    text-align: center;
  }
  img{
    position: absolute;
    margin: auto;
    left: 0;
    top: 0;
  }
</style>
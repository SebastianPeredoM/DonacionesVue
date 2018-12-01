<template>
  <div id="app">
    <div id="img">
      <img width="275px" height="83px" src="./assets/logo-urp.jpg">
    </div>
    <div id="container">
      <router-view/>
    </div>
  </div>
</template>
<script>
export default {
  name: "App"
};
</script>
<style>
@import url("https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css");
@import "../node_modules/material-design-icons/iconfont/material-icons.css";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
#img {
  text-align: center;
}
#container {
  margin: auto;
  width: 90%;
  padding: 10px;
}
</style>

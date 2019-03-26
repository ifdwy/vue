<template>
  <div id="app">
  <div class="header">{{$route.meta.title}}</div>   
    <router-view></router-view>
      <div class="nav">
        <router-link class="nav-item" to="/message">消息</router-link>
        <router-link class="nav-item" to="/pro">实例</router-link>
        <router-link class="nav-item" to="/home">个人中心</router-link>
      </div>
  </div>
</template>

<script>
import {XHeader} from 'vux'
export default {
  name: 'App',
  components: {
    XHeader,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.header{
  position:fixed;
  line-height: 50px;
  top: 0;
  width:100%;
  height:50px;
  background-color: #1E90FF;
}
.nav{
  position:fixed;
  bottom:1px;
  background-color:#fff;
  width:100%;
  height:50px;
  display:flex;
}
.nav-item{
  flex: 1;
  text-decoration: none;
}
.nav-item:link,.nav-item:visited{
  background-color: white;
  color: black;
}
.nav-item:hover,.nav-item:active{
  color: white;
  background-color: #C8C6C6;
}
</style>

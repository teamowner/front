<template>
    <div class="container">
      <div class="row clearfix">
        <div class="col-md-12 column">
          <ul class="nav nav-tabs">
            <li class="active">
              <a href="#"><router-link to="/">首页</router-link></a>
            </li>
            <li>
              <a href="#"><router-link to="introduction">简介</router-link></a>
            </li>
            <li class="disabled">
              <a href="#">信息</a>
            </li>
            <li class="dropdown pull-right">
              <a href="#" data-toggle="dropdown" class="dropdown-toggle">下拉<strong class="caret"></strong></a>
              <ul class="dropdown-menu">
                <li>
                  <a href="#">操作</a>
                </li>
                <li>
                  <a href="#">设置栏目</a>
                </li>
                <li>
                  <a href="#">更多设置</a>
                </li>
                <li class="divider">
                </li>
                <li>
                  <a href="#">分割线</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      radasd: 'asdadasdas',
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

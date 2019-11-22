<template>
    <div class="container">
      <div class="row clearfix">
        <div class="col-md-12 column">
          <ul class="nav nav-tabs">
            <li class="active" style="width:3%">
              <a href="#"><router-link to="/">首页</router-link></a>
            </li>
            <li style="width:3%">
              <a href="#"><router-link to="introduction">简介</router-link></a>
            </li>
            <li class="disabled" style="width:3%">
              <a href="#">信息</a>
            </li>
            <li class="disabled" style="width:77%;">
                <a href="#"  style="display:block;float:right;" data-toggle="modal" data-target="#login" >
                    登录
                </a>
            </li>
            <li class="disabled" style="width:4%;">
                <a href="#" style="display:block;float:right;" data-toggle="modal" data-target="#register" >
                    注册
                </a>
            </li>
          </ul>
        </div>
      </div>
      <!-- 注册窗口 -->
      <div id="register" class="modal fade" tabindex="-1">
          <div class="modal-dialog">
              <div class="modal-content">
                  <div class="modal-body">
                      <button class="close" data-dismiss="modal">
                          <span>&times;</span>
                      </button>
                  </div>
                  <div class="modal-title">
                      <h1 class="text-center">注册</h1>
                  </div>
                  <div class="modal-body">
                      <form class="form-group" action="">
                              <div class="form-group">
                                  <label for="">用户名</label>
                                  <input class="form-control" type="text" placeholder="6-15位字母或数字">
                              </div>
                              <div class="form-group">
                                  <label for="">密码</label>
                                  <input class="form-control" type="password" placeholder="至少6位字母或数字">
                              </div>
                              <div class="form-group">
                                  <label for="">再次输入密码</label>
                                  <input class="form-control" type="password" placeholder="至少6位字母或数字">
                              </div>
                              <div class="form-group">
                                  <label for="">邮箱</label>
                                  <input class="form-control" type="email" placeholder="例如:123@123.com">
                              </div>
                              <div class="text-right">
                                  <button class="btn btn-primary" type="submit">提交</button>
                                  <button class="btn btn-danger" data-dismiss="modal">取消</button>
                              </div>
                              <a href="" data-toggle="modal" data-dismiss="modal" data-target="#login">已有账号？点我登录</a>
                      </form>
                  </div>
              </div>
          </div>
      </div>
      <!-- 登录窗口 -->
      <div id="login" class="modal fade">
          <div class="modal-dialog">
              <div class="modal-content">
                  <div class="modal-body">
                      <button class="close" data-dismiss="modal">
                          <span>&times;</span>
                      </button>
                  </div>
                  <div class="modal-title">
                      <h1 class="text-center">登录</h1>
                  </div>
                  <div class="modal-body">
                      <form class="form-group">
                              <div class="form-group">
                                  <label for="">用户名</label>
                                  <input class="form-control" type="text" placeholder="用户名" v-model="formMess.name">
                              </div>
                              <div class="form-group">
                                  <label for="">密码</label>
                                  <input class="form-control" type="password" placeholder="密码" v-model="formMess.password">
                              </div>
                              <div class="text-right">
                                  <button class="btn btn-primary" type="submit" @click="login()">登录</button>
                                  <button class="btn btn-danger" data-dismiss="modal">取消</button>
                              </div>
                              <a href="" data-toggle="modal" data-dismiss="modal" data-target="#register">还没有账号？点我注册</a>
                      </form>
                  </div>
              </div>
          </div>
      </div>
    </div>
</template>

<script>

import axios from 'axios';
export default {
  name: 'Header',
  data () {
    return {    	
      formMess:{
          "name":"",
          "password":""
      }
    }
  },
  methods:{   
    login: function() {
       axios
        .post('/user/login',this.formMess)
        .then(successResponse => {
          console.log(JSON.stringify(successResponse.data.list));
          this.responseResult = JSON.stringify(successResponse.data)
          alert(JSON.stringify(responseResult));
          if (successResponse.data.code === 200) {
            console.log(111);
          }
        })
        .catch(failResponse => {})
        
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


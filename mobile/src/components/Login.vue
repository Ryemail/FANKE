<template>
  <div class="login">
    <div class="topTitle"> 
      <span @click="prev" id="topBack" class="topBack"></span> 
      <span class="curTitle">登陆</span> 
    </div>
    <div class="others-content">
      <div class="login-tab">
      </div>
      <!-- 登陆表单 start -->
      <form action="#">
        <div class="login-bar">
          <input type="text" name="phone" v-model="phone" placeholder="请点击输入手机号">
        </div>
        <div class="login-bar">
          <input type="text" v-model="pwd" name="user" placeholder="请输入密码">
        </div>
        <div class="user-login" style="border-bottom:0px;">
          <input type="hidden" name="url" id="url">
          <p id="errinfo" style=""> </p> 
        </div>
        <a href="javascript:;" @click="submit">登&nbsp;&nbsp;录</a>
      </form>
      <!-- 提示 start -->
      <div class="hint">
        <router-link to="reg">
          免费注册
          <span>></span>  
        </router-link>
        <router-link to="">
          手机账号取回密码
          <span>></span>
        </router-link>
      </div> 
      <!-- 其他登陆方式 start -->
      <div class="thirdLoginBtns">
         <span class="loginTextTitle">使用其他账号登录</span>
         <ul>
           <li><a class="a1" href=""></a></li>
           <li><a class="a2" href=""></a></li>
           <li><a class="a3" href=""></a></li>
           <li><a class="a4" href=""></a></li>
         </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'login',
  data(){
    return {
      phone:this.$store.state.username,
      isLogin:this.$store.state.isLogin,
      pwd:"",
      user:""
    }
  },
  methods:{
    prev(){
      console.log(this.user);
       if(!this.user){
          this.$router.push({path:"/"});
       }  
    },
    submit(){
      if(this.phone==""||this.pwd==""){
          alert('用户名或者密码不能为空');
          console.log(this.phone);
          return
       }else{
          this.$axios.post('/api/users/login',{user:this.phone,pwd:this.pwd}).then((res)=>{
              if(res.data.errno===1){
                this.login=true;
                window.localStorage.setItem('username',res.data.userInfo.phone);
                this.$store.commit('login',res.data.userInfo);
                this.$router.push({path:"/personal"});
              }else{
                alert('用户名或密码错误');
              }
          })
       }
    }
  }
}
</script>
<style scoped lang="scss">
a{
  text-decoration:none;
}
img{
  width: 100%;
  display:block;
}
.topTitle{
  position: relative;
  top: 0;
  max-width: 640px;
  width: 100%;
  height: 50px;
  overflow: hidden;
  background: #b81c22;
  text-align: center;
  line-height: 50px;
  span{
    display: inline-block;
  }
  .curTitle{
    margin: 0 auto;
    font-size:19px;;
    color: #fff;
  }
  .topBack{
    position: absolute;
    top:50%;
    left:20px;
    width: 18px;
    height: 18px;
    border-top:2px solid #fff;
    border-left:2px solid #fff;
    transform:translateY(-50%) rotata(-45deg);
      -webkit-transform: translateY(-50%) rotate(-45deg);
  }
}
.others-content{
  position: fixed;
  top:50px;
  bottom:0;
  height: 100%;
  width: 100%;
  overflow:hidden;
  line-height: 18.75px;
  margin-bottom:54px;
  background:#fff;
}

/***** 登陆表单 start *******/
form{
  padding:22px 25px 0 25px;
  .login-bar{
    width: 100%;
    height: 41px;
    margin-top:25px;
    padding-bottom:12.5px;
    input{
      border: 0;
      outline:none;
      font-size: 1.2em;
      background: #f5f5f5;
      color: #b5b5b5;
      padding: 12px;
      width: 100%;
      box-sizing: border-box;
    }
  }
  .user-login{
      height:10px;
      margin:12.5px 52.5px;
      padding-bottom:12.5px;
      margin-bottom:0;
  }
  a{
    display:block;
    width: 100%;
    background: #b81b22;
    color: #fff;
    border-radius: 2px;
    padding:10px 0;
    height:30px;
    line-height:30px;
    text-align:center;
    font-size:20px;
  }
}
/*** 提示 start ****/
.hint{
   margin:10px 25px;
   a:last-child{
    float: right;
   }
}
/**** 更多登陆方法 start ******/
.thirdLoginBtns{
  margin-top: 37.5px;
  color: #4c4c4c;
  .loginTextTitle{
    padding-left:25px;
  }
  ul{
    overflow:hidden;
    padding:6.25px 25px;
    li{
      float: left;
      margin-right:18.75px;
    }
  }
  a{
    display:block;
    width: 25px;
    height: 22px;
    background:url(../assets/loginlogs.png) no-repeat;
    background-size:145px 21.875px;
  }
  .a2{
    background-position: -37.85px 0;
  }
  .a3{
    background-position: -81.25px 0;
  }
  .a4{
    background-position: -126.875px 0;
  }
}
</style>  
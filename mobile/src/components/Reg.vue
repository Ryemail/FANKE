<template>
  <div class="reg">
    <div class="topTitle"> 
      <span @click="prev" id="topBack" class="topBack"></span> 
      <span class="curTitle">注册</span> 
    </div>
    <div class="others-content">
      <!-- 注册表单 start -->
      <form action="#">
        <div class="login-bar">
          <input autofocus type="text" v-model="info[0]" name="user"  @blur="Blur($event,0)" placeholder="请输入用户名">
          <p class="hint" v-show="isHint[0]">{{ hint[0] }}</p>
        </div>
        <div class="login-bar">
          <input autofocus type="text" v-model="info[1]" name="email" @blur="Blur($event,1)" placeholder="请输入邮箱">
          <p class="hint" v-show="isHint[1]">{{ hint[1] }}</p>
        </div>
        <!-- <div class="login-bar check-bar clearfix">
          <input type="text" name="phone" v-model="phone" @blur="Blur($event,2)" placeholder="请输入手机号">
          <a href="javascript:;" class="authcode">发送验证码</a>
          <p class="hint"></p>
        </div> -->
        <div class="login-bar">
          <input autofocus type="password" name="password" v-model="info[2]" @blur="Blur($event,2)"  placeholder="密码6-18位字母、数字、特殊字符">
          <p class="hint" v-show="isHint[2]">{{ hint[2] }}</p>
        </div>
        <p>注册账号即表示同意遵守<a href="/channel/index/441">《VANCL凡客服务条款》</a></p>
        <a href="javascript:;" @click="login1Submit">点击注册</a>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name:'login',
  data(){
    return {
      info:{
         user:"",
         email:"",
        /* phone:"",*/
         pwd:"",
      },
      hint:[
        "用户名必须以英文字母开头,5-17个字符",
        "请输入正确的邮箱地址",
        "6-18位字母、数字、特殊字符组合" 
      ],
      isHint:[
         false,
         false,
         false
      ],
      reg:[
        /^[a-zA-Z][a-zA-Z\u4E00-\u9FA5]{5,17}$/,
        /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/,
        // /^(13[0-9]|14[579]|15[012356789]|17[135678]|18[0-9]|199)[0-9]{8}$/,
        /^[\w\.+\-\/\\!@#$%\^&*\(\)\{\}\\|~?,;\:'"\[\]·￥<>`、=]{6,18}$/
      ]
    }
  },
  methods:{
    prev(){
       this.$router.go(-1)
    },
    Blur(e,key){
      var val="";
          val=e.target.value; 
      if(!this.reg[key].test(val)&&this.info[key]!=""){
         //this.isHint[key]=true;

         alert(this.hint[key]);
      }
    },
    login1Submit(){
      var bool=this.reg[0].test(this.user)&this.reg[1].test(this.email)&this.reg[2].test(this.pwd)
       if(!bool){
          alert('表单信息有误');
          return;
       }else{
          this.$axios.post('/api/users/reg',{user:this.user,email:this.email,pwd:this.pwd}).then((res)=>{
               console.log(res.data);
               if(res.data.errno===1){
                 this.$router.push({path:'/login'});
               }
          });
       }
    }
  }
}
</script>
<style scoped lang="scss">
img{
  width: 100%;
  display:block;
}
.clearfix:after{
  content: "."; 
  display: block; 
  height: 0; 
  clear: both; 
  visibility: hidden;  
}
.clearfix{
  zoom:1;
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
  overflow:hidden;
  padding:31.5px 25px;
  .login-bar{
    width: 100%;
    margin-bottom:20px;
    input{
      border: 0;
      outline:none;
      font-size: 15px;
      background: #f5f5f5;
      color: #b5b5b5;
      padding: 12px;
      width: 100%;
      box-sizing: border-box;
    }
    .hint{
     text-align: left; 
     height:20px;
     color:red;
     font-size:15px;
     margin-top:10px;
   }
  }
  .login-bar:first-child{
    margin-top:0
  }
  .check-bar{
    input{
      width:65%;
    }
    .codeWrap{
      display:block;
      float: right;
      height:41px;
      width: 75px;
      img{
        height: 35px;
      }
    }
    .authcode{
      color: #b71c22;
      font-size: 15px;
      background: #fff;
      border: 2px solid #b2b2b2;
      padding: 11.25px 18px;
      border-radius: 4px;
      text-align: center;
      float: right;
    }
  }
  .user-login{
      height:10px;
      margin:12.5px 52.5px;
      padding-bottom:12.5px;
      margin-bottom:0;
  }
  >a{
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
  p{
    color: #b3b3b3;
    text-align: center;
    margin-top:37.5px;
    margin-bottom:18.75px;
    a{
      color: #4c4c4c;
    }
  }
}
</style>  
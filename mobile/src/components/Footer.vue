<template>
  <div id="app">
    <div class="footer">
      <router-link  to="/">
         <span class="icon iconfont icon-home"></span>
         <span class="text">凡客</span>
      </router-link>
      <router-link  to="/product">
        <span class="icon iconfont icon-menu1"></span>
        <span class="text">分类</span>
      </router-link>
      <router-link  to="/customize">
        <span class="icon iconfont icon-dingzhi"></span>
        <span class="text">定制</span>
      </router-link>
      <router-link to="/cart" @click.native="cart">
        <span class="icon iconfont icon-shopcar1"></span>
        <span class="text">购物车</span>
        <span id="pcount" class="goods-num">0</span>
      </router-link>
      <router-link class="me" to="/personal" @click.native="me">
        <span class="icon iconfont icon-user"></span>
        <span class="text">我的</span>
      </router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
//jiang字体图标的css文件导入
import "../assets/icons/iconfont.css";
export default {
  name: 'app',
  data(){
    return {
      login:this.$store.state.isLogin,
      url:"",
      user:""
    }
  },
  created(){
    this.user=window.localStorage.getItem('username');
  },
  methods:{
    me(){
      if(this.user){
         this.$router.push({path:"/personal"});
      }else{
         this.$router.push({path:"/login"});
      }
    },
    cart(){
      if(this.user){
        this.$router.push({path:"/cart"});
      }else{
        this.$router.push({path:"/login"});
      }
    }
  }
}
</script>
<style scoped lang="scss">
  .footer{
    position: fixed;
    left:0;
    bottom:0;
    z-index:999;
    display: flex;
    flex-direction:row;
    border-top:1px solid #999;
    width:100%;
    height:54px;
    background:#fff;
    a{
      position: relative;
      display: flex;
      flex-direction: column;
      flex:1;
      text-align: center;
      color:#999;
      span.icon{
        margin-top:-5px;
        font-size:30px;
      }
      span.text{
        margin:-7px;
        font-size:13px;
      }
    }
    .router-link-exact-active{
        color:#b81c22;
      }
    .me > *{
      pointer-events:none;
    }
    #pcount{
      display:block;
      background:#b81c22;
      height: 13px;
      line-height:14px;
      padding:0 3px;
      border-radius:50%;
      position:absolute;
      top:2px;
      left:50px;
      font-size:12px;
      text-align:center;
      color:#fff;
    }
  }
</style>

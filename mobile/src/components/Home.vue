<template>
  <div class="home">
    <!-- 搜索 start -->
    <div class="search">
     <form action="#">
        <input type="text" class="s-content" placeholder="请输入搜索商品...">
     </form>
     <a href="">
       <span></span>
     </a>
    </div>
    <!-- 轮播图 start -->
    <div class="carousel">
      <swiper :options="swiperOption" ref ="mySwiper">
        <!-- 幻灯片-->
        <swiper-slide class="swiper-slide"><a href="">
           <img src="../assets/cm1.jpg" alt=""></a>
        </swiper-slide>
        <swiper-slide class="swiper-slide"><a href="">
           <img src="../assets/cm2.jpg" alt=""></a>
        </swiper-slide>
        <swiper-slide class="swiper-slide"><a href="">
           <img src="../assets/cm3.jpg" alt=""></a>
        </swiper-slide>
        <swiper-slide class="swiper-slide"><a href="">
           <img src="../assets/cm4.jpg" alt=""></a>
        </swiper-slide>
        <!-- 可选控件-->
        <div class ="swiper-pagination"  slot ="pagination"> </div>
      </swiper>
    </div>
    <!-- 推荐 start -->
    <div class="t1000 recommend">
     <a href=""><img src="../assets/2017_11_21_12_36_52_8847_320x50.jpg" alt=""></a>
     <a href=""><img src="../assets/2017_11_21_12_37_3_6711_320x50.jpg" alt=""></a>
    </div>
    <!-- 秒杀现场 start -->
    <div id="daily-seckill">
     <div class="seckill-txt">
       <i class="clock"></i>
       <span class="font-wbold" style="color: #b81c22;">每日秒杀</span>
     </div>
     <div class="seckill-countdown">
       <span>20点场</span>
       <span class="cuntdown">即将开始</span>
       <div class="enter-seckill">
         <span>进入秒杀</span>
         <i class="icon-seckill"></i>
       </div>
     </div>
    </div>
    <!-- 秒杀价 start -->
    <div class="seckillPrice">
      <ul class="goodsList">
        <li><a href=""><img src="../assets/2017_11_29_10_39_0_154_320x498.jpg" alt=""></a></li>
        <li><a href=""><img src="../assets/2017_11_29_10_39_3_4308_320x498.jpg" alt=""></a></li>
        <li><a href=""><img src="../assets/2017_11_29_10_39_4_6468_320x498.jpg" alt=""></a></li>
        <li><a href=""><img src="../assets/2017_11_29_10_39_4_9500_320x498.jpg" alt=""></a></li>
      </ul>
    </div>
    <!-- 新品推荐  start-->
    <div class="goods-title">
       <a href=""><img src="../assets/newgoods.jpg" alt=""></a>
    </div>
    <ul class="goodsList">
      <li><a href=""><img src="../assets/goods1.jpg" alt=""></a></li>
      <li><a href=""><img src="../assets/goods2.jpg" alt=""></a></li>
      <li><a href=""><img src="../assets/goods1.jpg" alt=""></a></li>
      <li><a href=""><img src="../assets/goods2.jpg" alt=""></a></li>
      <li><a href=""><img src="../assets/goods1.jpg" alt=""></a></li>
      <li><a href=""><img src="../assets/goods2.jpg" alt=""></a></li>
      <li><a href=""><img src="../assets/goods1.jpg" alt=""></a></li>
      <li><a href=""><img src="../assets/goods2.jpg" alt=""></a></li>
    </ul>
    <!-- 当季热卖 start -->
     <div class="goods-title">
       <a href=""><img src="../assets/hotgoods.jpg" alt=""></a>
    </div>
    <ul class="goodsList">
      <li><a href=""><img src="../assets/hot1.jpg" alt=""></a></li>
      <li><a href=""><img src="../assets/hot2.jpg" alt=""></a></li>
      <li><a href=""><img src="../assets/goods1.jpg" alt=""></a></li>
      <li><a href=""><img src="../assets/goods2.jpg" alt=""></a></li>
      <li><a href=""><img src="../assets/goods1.jpg" alt=""></a></li>
      <li><a href=""><img src="../assets/goods2.jpg" alt=""></a></li>
      <li><a href=""><img src="../assets/goods1.jpg" alt=""></a></li>
      <li><a href=""><img src="../assets/goods2.jpg" alt=""></a></li>
    </ul>
    <!-- 吉国武衬衫 start -->
     <div class="goods-title">
       <a href=""><img src="../assets/shirt.jpg" alt=""></a>
    </div>
    <ul class="goodsList">
      <li><a href=""><img src="../assets/shirt1.jpg" alt=""></a></li>
      <li><a href=""><img src="../assets/shirt2.jpg" alt=""></a></li>
      <li><a href=""><img src="../assets/goods1.jpg" alt=""></a></li>
      <li><a href=""><img src="../assets/goods2.jpg" alt=""></a></li>
    </ul>
    <!-- 牛津纺衬衫 start -->
    <div class="goods-title">
       <a href=""><img src="../assets/shirt0.jpg" alt=""></a>
    </div>
    <ul class="goodsList">
      <li><a href=""><img src="../assets/shirt1.jpg" alt=""></a></li>
      <li><a href=""><img src="../assets/shirt2.jpg" alt=""></a></li>
      <li><a href=""><img src="../assets/goods1.jpg" alt=""></a></li>
      <li><a href=""><img src="../assets/goods2.jpg" alt=""></a></li>
    </ul>
    <!-- 帆布鞋 start -->
    <div class="goods-title">
       <a href=""><img src="../assets/canvas-shop.jpg" alt=""></a>
    </div>
    <ul class="goodsList">
      <li><a href=""><img src="../assets/shirt1.jpg" alt=""></a></li>
      <li><a href=""><img src="../assets/shirt2.jpg" alt=""></a></li>
      <li><a href=""><img src="../assets/goods1.jpg" alt=""></a></li>
      <li><a href=""><img src="../assets/goods2.jpg" alt=""></a></li>
    </ul>
    <!-- 外套 start -->
    <div class="goods-title">
       <a href=""><img src="../assets/coat.jpg" alt=""></a>
    </div>
    <ul class="goodsList">
      <li><a href=""><img src="../assets/shirt1.jpg" alt=""></a></li>
      <li><a href=""><img src="../assets/shirt2.jpg" alt=""></a></li>
      <li><a href=""><img src="../assets/goods1.jpg" alt=""></a></li>
      <li><a href=""><img src="../assets/goods2.jpg" alt=""></a></li>
    </ul>
    <div class="bigImg">
      <a href=""><img src="../assets/vancl1.jpg" alt=""></a>
      <a href=""><img src="../assets/vancl2.jpg" alt=""></a>
      <a href=""><img src="../assets/vancl3.jpg" alt=""></a>
      <a href=""><img src="../assets/vancl4.jpg" alt=""></a>
    </div>
    <!-- 返回和更多 -->
    <div class="allAndTop">
      <a class="sell-all" href=""><img src="../assets/see-all.jpg" alt="查看更多"></a>
      <a @click.prevent="backTop" href="" class="ret-top"><img src="../assets/ret-top.jpg"alt="返回顶部"></a>
    </div>
    <!-- login start -->
    <div class="login">
       <div class="login-btn">
         <router-link to="/login">登陆</router-link>
         <router-link to='/reg'>注册</router-link>
       </div>
    </div>
    <!-- 页脚 start -->
    <div class="footer">
      <ul class="footerList">
        <li>
           <a href=""><img src="../assets/help1.png" alt=""></a>
        </li>
        <li>
           <a href=""><img src="../assets/download1.png" alt=""></a>
        </li>
        <li>
           <a href=""><img src="../assets/weixin1.png" alt=""></a>
        </li>
        <li>
           <a href=""><img src="../assets/pcsite1.png" alt=""></a>
        </li>
      </ul>
      <div class="copyright"> <h3>京ICP证100557号</h3> </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>
<script>
import 'swiper/dist/css/swiper.css';
import Footer from './Footer.vue';
import {swiper,swiperSlide} from 'vue-awesome-swiper';
export default {
  name: 'Home',
  data () {
    return {
      phone:this.$store.state.username,
      pwd:"",
      notNextTick: true,
      swiperOption: {
        // swiper options 所有的配置同swiper官方api配置
        autoplay: 30000,
        autoplayDisableOnInteraction:false,
        direction: 'horizontal',
        grabCursor: true,
        setWrapperSize: true,
        autoHeight: true,
        pagination : '.swiper-pagination',
        paginationClickable: true,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        mousewheelControl: true,
        observeParents: true
      }
    }
  },
  components:{
    swiper,
    swiperSlide,
    'myFooter':Footer
  },
  methods:{
    backTop(e){
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home{
  img{
    width: 100%;
    max-width:100%;
    display:block;
  }
  .t1000{
    width: 100%;
    overflow:hidden;
    margin-top:2px;
  }
  /*** 搜索 start ***/
  .search{
    overflow:hidden;
    position: fixed;
    top:0;
    left:0;
    z-index:2;
    width:100%;
    height: 50px;
    background:#b81c22;
    form{
      position: absolute;
      top:11px;
      left:12px;
      width: 85%;
      height: 28px;
      background:#fff;
    }
    a{
      position: absolute;
      top:17px;
      right:10px;
      width: 23px;
      height: 16px;
      background:url(../assets/msg3.png) no-repeat;
      background-size:23px 16px;
      span{
        position: absolute;
        top: -3px;
        right:-5px;
        width: 5px;
        height: 5px;
        background:#fff;
        border-radius:50%;
      }
    }
    .s-content{
     width: 100%;
     height: 28px;
     padding-left:30px;
     border:0;
     outline:none;
     background:url(../assets/search2.png) 8px 5px no-repeat;
     background-size:18px;
     box-sizing:border-box;
    }
  }
  /*** 轮播图 start ***/
  .carousel{
    overflow:hidden;
    width: 100%;
    margin-top:50px;
    height: 265px;
    .swiper-slide{
      width: 100%;
      float: left;
      .swiper-pagination-bullet-active{
        opacity:1;
        background:#b81c22;
      }
      a{
        display:block;
        width: 100%;
      }
    }
  }
  /*** 推荐 start  ***/
  .recommend{
    display:flex;
    a{ 
      display:block;
      width: 50%;
      img{
        display:block;
        width: 100%;
        height: auto;
      }
    }
    a:last-child{
      margin-left:3px;
    }
  }
}
/*** 秒杀现场 start ***/
#daily-seckill{
  overflow: hidden;
  margin:2px 0;
  background:url(../assets/sec-kill-bkgImg.png) #fff top center;
  background-size:cover;
  .seckill-txt,.seckill-countdown{
    overflow:hidden;
    position: relative;
    width: 100%;
    height: 20px;
    padding:5px 0;
    text-align:center;
    font-size:15px;
    font-weight:bold;
    .font-wbold{
      display:inline-block;
      vertical-align:text-bottom;
    }
    .clock{
      display:inline-block;
      width: 15px;
      height: 15px;
      vertical-align:text-bottom;
      background:url(../assets/clock.png) left top;
      background-size:15px;
    }
  }
  .seckill-countdown{
    .cuntdown{
       font-weight:400;
    }
    .enter-seckill{
      position: absolute;
      top:5px;
      right:5px;
      width: 80px;
      height: 20px;
      color: #b81c22;
    }
    .icon-seckill{
      display:inline-block;
      width: 15px;
      height: 15px;
      vertical-align:text-top;
      background:url(../assets/right-arrow.png) left top;
      background-size:15px;
    }
  }
}
/*** 秒杀价 start ****/
.seckillPrice{
  border-top:2px solid #ccc;
  border-bottom:2px solid #ccc;
}
.goodsList{
  overflow:hidden;
  li{
    float: left;
    width: 50%;
    margin-top:2px;
    box-sizing: border-box;
  }
  li:nth-child(2n){
    margin:2px -1px 0 1px;
  }
}
/*** 新品推荐 start ****/
.goods-title{
  a{
    display:block;
    width: 100%;
  }
}
.bigImg a{
  display: block;
  line-height: 0;
  width: 100%;
}
/*** 返回和更多 start ***/
.allAndTop{
  overflow:hidden;
  margin:2px 0 40px;
  a{
    display:block;
    float: left;
    width: 50%; 
    line-height:0;
    height:49px;
  }
  .ret-top{
    margin: 0 -1px 0 1px;
  }
}
/*** 登陆与注册 ***/
.login{
  text-align:center;
  height:30px;
  padding:44px 0;
  .login-btn{
    a{
      display:inline-block;
      width: 34px;
      height: 15px;
      line-height:15px;
      padding:7.5px 37.5px;
      background:#f2f2f2;
      color: #4c4c4c;
    }
    a:last-child{
      margin-left:6px;
    }
  }
}
/*** 页脚 start ***/
.footer{
  text-align:center;
  margin-bottom:62.5px;
  .footerList{
    overflow:hidden;
    height: 65px;
    display: inline-block;
    border-bottom: 1px solid #4c4d4d;
    border-top: 1px solid #4d4d4d;
    padding: 15px 0;
    li{
      float: left;
      margin:0 15px;
      width: 45px;
    }
  }
}
.copyright{
  height: 24px;
  color: #4c4c4c;
}
</style>
